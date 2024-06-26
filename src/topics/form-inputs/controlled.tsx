import React, { useState } from "react";
import { InputComponent } from "../../components/input";
import { ExpensiveComponent } from "../../components/expensive-component";

export const ControlledForm: React.FC = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  };

  console.log("Controlled form rendered");

  return (
    <form className="form" onSubmit={handleSubmit}>
      <InputComponent
        label="name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <InputComponent
        label="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
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
