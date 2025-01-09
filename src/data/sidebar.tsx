import {
  Settings,
  Info,
  BellDot,
  MapPin,
  MapPinHouse,
  Store,
  User,
  Presentation,
  Sunrise,
  House,
} from "lucide-react";
import { type MenuItemSidebar } from "../components/menu-item-sidebar";

export const overviewMenu: MenuItemSidebar = {
  text: "Overview",
  icon: <House className="size-4" />,
  active: false,
  subMenu: [
    {
      text: "Nearby",
      icon: <MapPinHouse className="size-4" />,
      active: false,
      subMenu: [],
    },
  ],
};

export const topMenu: MenuItemSidebar[] = [
  {
    text: "Territories",
    icon: <MapPin className="size-4" />,
    active: false,
    subMenu: [],
  },
  {
    text: "Accounts",
    icon: <Store className="size-4" />,
    active: false,
    subMenu: [],
  },
  {
    text: "Contacts",
    icon: <User className="size-4" />,
    active: true,
    subMenu: [],
  },
  {
    text: "Opportunities",
    icon: <Sunrise className="size-4" />,
    active: false,
    subMenu: [],
  },
  {
    text: "Forecast",
    icon: <Presentation className="size-4" />,
    active: false,
    subMenu: [],
  },
];

export const bottomMenu: MenuItemSidebar[] = [
  {
    text: "Notification",
    icon: <BellDot className="size-4" />,
    active: false,
    subMenu: [],
  },
  {
    text: "Support",
    icon: <Info className="size-4" />,
    active: false,
    subMenu: [],
  },
  {
    text: "Settings",
    icon: <Settings className="size-4" />,
    active: false,
    subMenu: [],
  },
];
