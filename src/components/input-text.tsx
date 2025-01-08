
import clsx from 'clsx';

export function InputText({placeholder, className, size}) {
    return <input type="text" className={clsx("shadow w-full border border-slate-200", className, size === "sm" ? "py-1 px-2": "py-2 px-3")} placeholder={placeholder} />
}