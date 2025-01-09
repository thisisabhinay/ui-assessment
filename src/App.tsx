import { PrimarySidebar } from "./layout/primary-sidebar";
import { ContactsPage } from "./page/contacts";

function App() {
  return (
    <div
      id="page"
      className="rounded-xl bg-white grid grid-cols-1 md:grid-cols-[240px_1fr] h-screen"
    >
      <aside
        id="sidebar"
        className="relative z-20 h-full border-r border-slate-200 hidden md:block"
      >
        <PrimarySidebar />
      </aside>
      <main className="h-full relative z-10">
        <ContactsPage />
      </main>
    </div>
  );
}

export default App;
