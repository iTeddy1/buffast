import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium focus:outline-none transition duration-150 ease-in-out text-[#7E262F]";

  const combinedStyles = `${baseStyles} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  return (
    <button type={type} className={combinedStyles} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
