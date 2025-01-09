import { MenuItemSidebar } from "../components/menu-item-sidebar";
import { overviewMenu, bottomMenu, topMenu } from "../data/sidebar";

export function PrimarySidebar() {
  return (
    <div
      data-comp="PriamrySidebar"
      className="h-full px-3 py-5 flex flex-col justify-between"
    >
      <div className="flex flex-col gap-5">
        <MenuItemSidebar {...overviewMenu} />
        <div className="h-px w-full bg-slate-100" />
        <div className="flex flex-col gap-1">
          {topMenu?.map((menu, index) => (
            <MenuItemSidebar key={index} {...menu} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {bottomMenu?.map((menu, index) => (
          <MenuItemSidebar key={index} {...menu} />
        ))}
      </div>
    </div>
  );
}
