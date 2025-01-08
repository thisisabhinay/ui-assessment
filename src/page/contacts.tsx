import { Button } from "../components/button";
import { CardMetrics } from "../components/card-metrics";
import { Header } from "../components/header";
import { InputText } from "../components/input-text";
import { contactsMetrics } from "../data/metrics";

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
      <section id="metrics" className="bg-slate-100 p-5">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-5 justify-center">
          {contactsMetrics?.map((metrics, index) => (
            <CardMetrics key={index} {...metrics} />
          ))}
        </div>
      </section>
      <section id="main-body"></section>
    </div>
  );
}
