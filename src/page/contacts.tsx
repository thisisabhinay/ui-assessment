import { HeaderContacts } from "../components/header-contacts";
import { CardMetrics } from "../components/card-metrics";

import { contactsMetrics } from "../data/metrics";

export function ContactsPage() {
  return (
    <div id="ContactsPage" className="grid grid-cols-1 auto-rows-max gap-0">
      <HeaderContacts />
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
