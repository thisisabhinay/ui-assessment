import { Store, DollarSign, Info, ClockAlert } from "lucide-react";
import { type CardMetrics } from "../components/card-metrics";

export const contactsMetrics: CardMetrics[] = [
  {
    label: "Total Contacts",
    value: 675,
    delta: 29,
    icon: <Store className="size-4" />,
    colorHex: "#a855f7",
  },
  {
    label: "Inbound Contacts",
    value: 232,
    delta: 29,
    icon: <DollarSign className="size-4" />,
    colorHex: "#10b981",
  },
  {
    label: "Outbound Contacts",
    value: 22,
    delta: 10,
    icon: <Info className="size-4" />,
    colorHex: "#f59e0b",
  },
  {
    label: "Idle Contacts",
    value: 43,
    delta: -14,
    icon: <ClockAlert className="size-4" />,
    colorHex: "#06b6d4",
  },
];
