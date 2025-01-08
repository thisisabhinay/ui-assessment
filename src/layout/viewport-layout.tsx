/**
 * A responsive viewport simulator component that allows previewing content
 * at different device breakpoints (desktop, tablet, mobile) in real-time.
 */

import { ReactElement, ReactNode, useState } from "react";
import { ButtonGroup } from "../components/button-group";
import { Button } from "../components/button";
import { Smartphone, Tablet, LaptopMinimal } from "lucide-react";
import clsx from "clsx";

/**
 * Defines the available viewport sizes that can be simulated.
 * This type is exported to allow other components to interact with the viewport settings.
 */
export type View = "desktop" | "tablet" | "mobile";

/**
 * Maps each viewport type to its corresponding CSS classes.
 * This type ensures type safety when defining styles for different viewports.
 */
export type ViewStyles = {
  [K in View]: string;
};

/**
 * Props interface for the ViewportLayout component.
 * @property {ReactNode} children - The content to be rendered within the viewport simulator
 */
export interface ViewportLayout {
  children: ReactNode;
}

/**
 * Maps each viewport type to its corresponding icon component.
 * Uses Lucide icons to provide visual representation of each viewport option.
 */
const buttons: { [K in View]: ReactElement } = {
  mobile: <Smartphone className="size-4" />,
  tablet: <Tablet className="size-4" />,
  desktop: <LaptopMinimal className="size-4" />,
};

/**
 * ViewportLayout Component
 *
 * A container component that simulates different device viewports for content preview.
 * It provides a floating control panel to switch between desktop, tablet, and mobile views,
 * applying appropriate dimensions and styling for each viewport size.
 *
 * @component
 * @example
 * ```tsx
 * <ViewportLayout>
 *   <YourContent />
 * </ViewportLayout>
 * ```
 */
export function ViewportLayout({ children }: ViewportLayout) {
  // Manages the current viewport size selection
  const [view, setView] = useState<View>("desktop");

  /**
   * Defines the dimensions for each viewport size.
   * These values correspond to common device dimensions:
   * - Mobile: iPhone Pro Max width
   * - Tablet: iPad width
   * - Desktop: Standard 1440p width
   */
  const viewStyles: ViewStyles = {
    mobile: "w-[414px] h-[896px]",
    tablet: "w-[768px] h-[1024px]",
    desktop: "w-[1440px] h-[900px]",
  };

  return (
    <div
      data-comp="ViewportLayout"
      className="grid h-full grid-cols-1 grid-rows-1 bg-slate-50"
    >
      {/* Floating viewport selector control panel */}
      <div
        id="responsive-view-selector"
        className="fixed bottom-5 bg-white p-2 rounded-lg shadow-md left-[50%] translate-x-[-50%] z-50 border border-slate-200"
      >
        <ButtonGroup>
          {Object.entries(buttons).map(([viewName, button]) => (
            <Button
              onClick={() => setView(() => viewName as View)}
              variant="ghost"
            >
              {button}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      {/* Content container with viewport frame */}
      <div id="responsive-view-container" className="py-10 content-center">
        <div
          id="responsive-view-frame"
          className={clsx(
            "bg-white",
            "mx-auto overflow-y-scroll",
            "border border-solid border-slate-200 shadow-lg rounded-xl",
            "ring-8 ring-slate-100/80",
            viewStyles[view], // Applies the selected viewport's dimensions
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
