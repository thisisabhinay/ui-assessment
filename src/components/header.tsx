
import clsx from 'clsx';
import {Button} from "./button"
import {InputText} from "./input-text"

export function Header({placeholder, className, size}) {
    return (
        <header className="bg-white p-7 shadow-md border-b border-slate-200 justify-between w-full grid md:grid-cols-[auto_1fr_auto] gap-3 md:gap-10">
            <h1 className="text-2xl md:text-3xl font-medium">Contacts</h1>
            <InputText placeholder="Search contacts" />
            <div className="flex items-center gap-3">
                <Button>New</Button>
                <Button variant="secondary">Import...</Button>
            </div>
        </header>
    )
}