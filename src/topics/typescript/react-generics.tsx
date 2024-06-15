import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

//GENERIC LIST COMPONENT
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

const numbers = [1, 2, 3];
const NumberList = () => (
  <List items={numbers} renderItem={(item) => <span>{item}</span>} />
);

//GENERIC STATE HOOK
function useGenericState<T>(initialState: T) {
  const [state, setState] = useState<T>(initialState);
  return [state, setState] as const;
}

const MyComponent = () => {
  const [value, setValue] = useGenericState<string>("Hello, World!");

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>{value}</p>
    </div>
  );
};

//GENERIC CONTEXT
interface ContextProps<T> {
  value: T;
  updateValue: (value: T) => void;
}

const createGenericContext = <T,>() => {
  const context = createContext<ContextProps<T> | null>(null);

  const useGenericContext = () => {
    const ctx = useContext(context);
    if (!ctx)
      throw new Error("useGenericContext must be used within a Provider");
    return ctx;
  };

  const GenericProvider: React.FC<{ initialValue?: T } & PropsWithChildren> = ({
    children,
    initialValue = null,
  }) => {
    const [value, setValue] = useState<T | null>(initialValue);

    const updateValue = (value: T) => setValue(value);

    if (!value) return <div>Loading...</div>;
    return (
      <context.Provider value={{ value, updateValue }}>
        {children}
      </context.Provider>
    );
  };

  return { useGenericContext, GenericProvider };
};

// Usage
const { useGenericContext: useStringContext, GenericProvider: StringProvider } =
  createGenericContext<string>();
const { useGenericContext: useNumberContext, GenericProvider: NumberProvider } =
  createGenericContext<number>();

const StringComponent = () => {
  const { value, updateValue } = useStringContext();
  return (
    <div>
      <div>String Value: {value}</div>
      <button onClick={() => updateValue("New String Value")}>
        Update String
      </button>
    </div>
  );
};

const NumberComponent = () => {
  const { value, updateValue } = useNumberContext();
  return (
    <div>
      <div>Number Value: {value}</div>
      <button onClick={() => updateValue(42)}>Update Number</button>
    </div>
  );
};

const ContextPage = () => (
  <div>
    <StringProvider>
      <StringComponent />
    </StringProvider>
    <NumberProvider>
      <NumberComponent />
    </NumberProvider>
  </div>
);

//GENERIC CONTEXT FOR USER_SETTINGS

interface Address {
  street: string;
  city: string;
  country: string;
}

interface Post {
  id: number;
  content: string;
  date: Date;
}

interface UserProfile {
  id: string;
  name: string;
  email: string;
  address: Address;
  posts: Post[];
  settings: {
    theme: "light" | "dark";
    notificationsEnabled: boolean;
  };
}

// Usage
const { useGenericContext, GenericProvider } =
  createGenericContext<UserProfile>();

const ProfileComponent = () => {
  const { value, updateValue } = useGenericContext();

  const updateTheme = () => {
    updateValue({
      ...value,
      settings: {
        ...value.settings,
        theme: value.settings.theme === "light" ? "dark" : "light",
      },
    });
  };

  return (
    <div>
      <h1>{value.name}'s Profile</h1>
      <p>Email: {value.email}</p>
      <p>
        Address: {value.address.street}, {value.address.city},{" "}
        {value.address.country}
      </p>
      <p>Theme: {value.settings.theme}</p>
      <button onClick={updateTheme}>Switch Theme</button>
      <h2>Posts</h2>
      <ul>
        {value.posts.map((post) => (
          <li key={post.id}>
            {post.content} - {post.date.toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

const initialProfile: UserProfile = {
  id: "123",
  name: "John Doe",
  email: "john.doe@example.com",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
  posts: [
    { id: 1, content: "Hello world!", date: new Date() },
    { id: 2, content: "My second post", date: new Date() },
  ],
  settings: {
    theme: "light",
    notificationsEnabled: true,
  },
};

const UserPage = () => (
  <GenericProvider initialValue={initialProfile}>
    <ProfileComponent />
  </GenericProvider>
);

//FORM MANAGEMENT
interface FormState {
  name: string;
  age: number;
}

const { useGenericContext: useFormContext, GenericProvider: FormProvider } =
  createGenericContext<FormState>();

const FormComponent = () => {
  const { value, updateValue } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <input
        name="name"
        value={value.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="age"
        value={value.age}
        onChange={handleChange}
        placeholder="Age"
        type="number"
      />
      <div>Name: {value.name}</div>
      <div>Age: {value.age}</div>
    </form>
  );
};

const App = () => (
  <FormProvider>
    <FormComponent />
  </FormProvider>
);
