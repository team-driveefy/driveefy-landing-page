import { FC, PropsWithChildren, ReactHTMLElement, ReactNode } from "react";

interface IProps {
  title: string | ReactNode;
  variant: "primary" | "secondary";
  ariaLabel?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: FC<IProps> = ({
  title,
  variant,
  onClick,
  className,
  ariaLabel,
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded-lg font-semibold";
  const variants = {
    primary: "bg-primary text-white hover:bg-hoverColor",
    secondary:
      "text-primary border-primary border-2 hover:bg-hoverLightColor hover:text-primary",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {title}
    </button>
  );
};
