import React from "react";
import "./button.scss";

type ButtonTypes = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ButtonProps extends ButtonTypes {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, onClick, className, ...props },
    ref?: React.Ref<HTMLButtonElement>
  ) => {
    const classNames =
      [className, "default-btn"].filter((v) => Boolean(v)).join(" ") ||
      undefined;
    return (
      <button ref={ref} className={classNames} onClick={onClick} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
