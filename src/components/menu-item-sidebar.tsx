import { ChevronRight } from "lucide-react";
import { ReactElement } from "react";
import clsx from "clsx";

export type InputSize = "lg" | "md" | "sm";

export type SizeStyles = {
  [K in InputSize]: string;
};

export interface MenuItemSidebar {
  text: string;
  icon?: ReactElement;
  active?: boolean;
  subMenu?: MenuItemSidebar[];
}

export function MenuItemSidebar({
  text,
  icon,
  active = false,
  subMenu,
}: MenuItemSidebar) {
  return (
    <div
      data-comp="MenuItemSidebar"
      className={clsx(
        "p-2 cursor-pointer rounded-md text-sm",
        "flex items-center justify-between",
        "transition-all duration-200 ease-out",
        "hover:bg-slate-100",
        active
          ? "font-medium text-purple-500 bg-slate-100"
          : "font-normal text-slate-800",
      )}
    >
      <div className="flex items-center gap-2">
        {icon} {text}
      </div>
      {subMenu?.length ? (
        <div className="flex items-center gap-2">
          <ChevronRight className="size-4" />
        </div>
      ) : null}
    </div>
  );
}
