import { Header } from "../components/header";

export function ContactsPage() {
    return(
        <div id="ContactsPage" className="grid grid-cols-1 auto-rows-max gap-0">
            <Header/>
            <section id="metrics" className="bg-slate-100"></section>
            <section id="main-body"></section>
        </div>
    )
}