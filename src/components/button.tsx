/**
 * A flexible, customizable button component that supports multiple visual variants
 * and sizes while maintaining consistent styling patterns.
 *
 * This component uses Tailwind CSS for styling and supports dynamic class composition
 * through the clsx utility.
 *
 * @example
 * // Primary button with default (medium) size
 * <Button>Click me</Button>
 *
 * // Secondary small button
 * <Button variant="secondary" size="sm">Small action</Button>
 *
 * // Ghost button with custom additional classes
 * <Button variant="ghost" className="mt-4">Custom ghost</Button>
 */

import clsx from "clsx";
import { type MouseEventHandler, type ReactNode } from "react";

// Define the supported button variants for type safety and autocompletion
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "dotted"
  | "ghost"
  | "link";

// Define the supported button sizes for type safety and autocompletion
export type ButtonSize = "lg" | "md" | "sm";

/**
 * Maps button variants to their corresponding Tailwind CSS classes.
 * This type ensures all variants have associated styles.
 */
export type VariantStyles = {
  [K in ButtonVariant]: string;
};

/**
 * Maps button sizes to their corresponding Tailwind CSS padding classes.
 * This type ensures all sizes have associated styles.
 */
export type SizeStyles = {
  [K in ButtonSize]: string;
};

/**
 * Props interface for the Button component.
 * @property {ReactNode} children - The content to be rendered inside the button
 * @property {ButtonVariant} [variant="primary"] - The visual style variant of the button
 * @property {ButtonSize} [size="md"] - The size variant of the button
 * @property {string} [className] - Additional CSS classes to be applied to the button
 * @property {function} [onClick] - Optional click handler that receives the MouseEvent.
 *                                  The handler can be synchronous or asynchronous.
 */
export interface Button {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: Button) {
  /**
   * Defines the visual styles for each button variant using Tailwind CSS classes.
   * - primary: Purple background with white text
   * - secondary: Transparent background with purple text and border
   * - ghost: Similar to secondary but with different hover behavior
   * - dotted: Transparent background with purple text and dashed border
   * - link: Text-only appearance with hover effect and no padding
   */
  const variantStyles: VariantStyles = {
    primary: "bg-purple-500 text-white",
    secondary: "bg-tranpsarent text-purple-500 border border-purple-500",
    link: "text-slate-800 hover:text-purple-500 border-none !p-0",
    dotted:
      "bg-tranpsarent text-purple-500 border border-dashed border-purple-500",
    ghost:
      "bg-white hover:bg-purple-100 text-slate-800 hover:text-purple-500 border-none",
  };

  /**
   * Defines the padding styles for each button size using Tailwind CSS classes.
   * Maintains consistent spacing ratios across different sizes.
   */
  const sizeStyles: SizeStyles = {
    lg: "py-2 px-3 text-base",
    md: "py-1 px-3 text-sm",
    sm: "py-1 px-2 text-sm",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        "font-medium",
        "transition-all duration-200 ease-out", // Smooth hover/active transitions
        "rounded cursor-pointer", // Visual interaction hints
        variantStyles[variant], // Variant-specific styles
        sizeStyles[size], // Size-specific styles
        className, // Custom classes passed as props
      )}
    >
      {children}
    </button>
  );
}
