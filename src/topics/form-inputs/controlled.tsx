import React, { useState } from "react";
import { InputComponent } from "./input";

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
    <form onSubmit={handleSubmit}>
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

      {/* <ExpensiveComponent value={1} />
      <ExpensiveComponent value={1} />
      <ExpensiveComponent value={1} />
      <ExpensiveComponent value={1} />
      <ExpensiveComponent value={1} />
      <ExpensiveComponent value={1} />
      <ExpensiveComponent value={1} />
      <ExpensiveComponent value={1} /> */}

      <button type="submit">Submit</button>
    </form>
  );
};
