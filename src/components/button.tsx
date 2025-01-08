
import clsx from 'clsx';

export function Button({children, variant="primary", className}) {
    const variantTable = {
        primary: "bg-purple-500 text-white",
        secondary: "bg-white text-purple-500 border border-purple-500",
    }
    return <button className={clsx("rounded py-2 px-3", variantTable[variant] , className)} >{children}</button>
}