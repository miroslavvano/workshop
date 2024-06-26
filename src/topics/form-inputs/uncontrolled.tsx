import { useRef } from "react";
import { InputComponent } from "../../components/input";
import { ExpensiveComponent } from "../../components/expensive-component";

export const UncontrolledForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const name = nameRef.current ? nameRef.current.value : "";
    const email = emailRef.current ? emailRef.current.value : "";
    alert(`Name: ${name}, Email: ${email}`);
  };

  console.log("Uncontrolled form rendered");

  return (
    <form className="form" onSubmit={handleSubmit}>
      <InputComponent
        label="name"
        type="text"
        ref={nameRef}
        defaultValue="John Doe"
      />
      <InputComponent
        label="email"
        type="email"
        ref={emailRef}
        defaultValue="john@example.com"
      />
      <button type="submit">Submit</button>

      <ExpensiveComponent value={1} />
      <ExpensiveComponent value={1} />
      <ExpensiveComponent value={1} />
      <ExpensiveComponent value={1} />
      <ExpensiveComponent value={1} />
      <ExpensiveComponent value={1} />
      <ExpensiveComponent value={1} />
      <ExpensiveComponent value={1} />
    </form>
  );
};
