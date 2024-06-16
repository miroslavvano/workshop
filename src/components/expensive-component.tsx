import React from "react";

interface ExpensiveComponentProps {
  value: number;
}

export const ExpensiveComponent: React.FC<ExpensiveComponentProps> = ({
  value,
}) => {
  const computeHeavy = () => {
    let sum = 0;
    for (let i = 0; i < 10000000; i++) {
      sum += i;
    }
    return sum;
  };

  const result = computeHeavy();
  console.log("ExpensiveComponent rendered");
  return (
    <div>
      <h4>I am expensive component</h4>
      <p>Value: {value}</p>
      <p>Computed Sum: {result}</p>
    </div>
  );
};
