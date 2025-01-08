import clsx from "clsx";

export type InputSize = "lg" | "md" | "sm";

export type SizeStyles = {
  [K in InputSize]: string;
};

export interface InputText {
  placeholder?: string;
  size?: InputSize;
  className?: string;
}

export function InputText({ placeholder, className, size = "md" }: InputText) {
  const sizeStyles: SizeStyles = {
    lg: "py-2 px-3 text-base",
    md: "py-1 px-3 text-sm",
    sm: "py-1 px-2 text-sm",
  };

  return (
    <input
      type="text"
      className={clsx(
        "rounded-md text-sm shadow w-full border border-slate-200",
        sizeStyles[size],
        className,
      )}
      placeholder={placeholder}
    />
  );
}
