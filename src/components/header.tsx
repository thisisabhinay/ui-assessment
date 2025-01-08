import { ReactNode } from "react";

export interface Header {
  title: string;
  children: ReactNode;
}

export function Header({ title, children }: Header) {
  return (
    <header className="bg-white p-5 shadow-md border-b border-slate-200 justify-between w-full grid md:grid-cols-[auto_1fr] gap-3 lg:gap-20">
      <h1 className="text-xl md:text-2xl font-medium">{title}</h1>
      {children}
    </header>
  );
}
