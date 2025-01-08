import { Button } from "../components/button";
import { Header } from "../components/header";
import { InputText } from "../components/input-text";

export function ContactsPage() {
  return (
    <div id="ContactsPage" className="grid grid-cols-1 auto-rows-max gap-0">
      <Header title="Contacts">
        <div className="flex items-center gap-3 lg:gap-20">
          <InputText placeholder="Search contacts" size="lg" />
          <div className="flex items-center gap-3">
            <Button>New</Button>
            <Button variant="secondary">Import...</Button>
          </div>
        </div>
      </Header>
      <section id="metrics" className="bg-slate-100"></section>
      <section id="main-body"></section>
    </div>
  );
}
