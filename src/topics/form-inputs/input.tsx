import { InputHTMLAttributes, forwardRef, ForwardedRef } from "react";

type InputComponentProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const InputComponent = forwardRef<HTMLInputElement, InputComponentProps>(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
    const { label, ...inputProps } = props;
    console.log("InputComponent rendered:", label);
    return (
      <div>
        <label>{label}</label>
        <input type="text" ref={ref} {...inputProps} />
      </div>
    );
  }
);
