/**
 * A container component that groups related buttons together with consistent styling.
 * This component handles the visual arrangement and spacing of child button elements,
 * applying appropriate border radius to create a cohesive button group appearance.
 */

import clsx from "clsx"; // Utility for conditional className construction
import { ReactNode } from "react"; // Type for React child elements

/**
 * Interface defining the props for the ButtonGroup component.
 * @interface ButtonGroup
 * @property {ReactNode} children - The child elements to be rendered within the button group.
 *                                  Typically expected to be Button components.
 */
export interface ButtonGroup {
  children: ReactNode;
}

/**
 * ButtonGroup component that creates a horizontal group of related buttons.
 *
 * The component uses Tailwind CSS classes to:
 * - Arrange children horizontally using flex layout
 * - Center-align items vertically
 * - Remove gaps between buttons (gap-0)
 * - Apply rounded corners only to the start of first button and end of last button
 *
 * @example
 * ```tsx
 * <ButtonGroup>
 *   <Button>Left</Button>
 *   <Button>Middle</Button>
 *   <Button>Right</Button>
 * </ButtonGroup>
 * ```
 *
 * @param {ButtonGroup} props - Component props
 * @param {ReactNode} props.children - Child elements to render within the group
 * @returns {JSX.Element} A div containing the grouped buttons
 */
export function ButtonGroup({ children }: ButtonGroup) {
  return (
    <div
      className={clsx(
        // Core layout classes
        "flex items-center gap-0",
        // Selective border radius application using Tailwind's first/last selectors
        "first:rounded-s last:rounded-e",
      )}
    >
      {children}
    </div>
  );
}
