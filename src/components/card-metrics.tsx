import clsx from "clsx";
import { CSSProperties, ReactNode } from "react";

export interface CardMetrics {
  label: string;
  value: number;
  icon: ReactNode;
  delta?: number;
  colorHex?: `#${string}`;
  className?: string;
}

export function CardMetrics({
  label,
  value = 0,
  delta = 0,
  icon,
  colorHex = "#cbd5e1",
  className,
}: CardMetrics) {
  const isDeltaPositive = delta >= 0;
  const changeText = `(${isDeltaPositive ? "+" : "-"}${Math.abs(delta)}%)`;

  return (
    <div
      data-comp="CardMetrics"
      className={clsx(
        "flex items-start justify-between",
        "bg-white p-5 w-full rounded-md",
        "shadow-lg shadow-slate-300",
        className,
      )}
    >
      <div className="flex flex-col gap-1">
        <div className="text-xs">{label}</div>
        <div className="flex items-center gap-2">
          <div className={clsx("text-lg font-medium")}>{value}</div>
          <div
            className={clsx(
              "text-xs",
              isDeltaPositive ? "text-green-600" : "text-red-600",
            )}
          >
            {changeText}
          </div>
        </div>
      </div>
      <div
        style={
          {
            "--text-color": colorHex,
            "--bg-color": colorHex + "16", // suffixing the alpha channel (= 16%) value
          } as CSSProperties
        }
        className={clsx(
          "rounded size-7 flex items-center justify-center",
          `bg-[--bg-color] text-[--text-color]`,
        )}
      >
        {icon}
      </div>
    </div>
  );
}
