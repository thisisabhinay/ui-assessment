import { ContactsPage } from "./page/contacts";

function App() {
  return (
    <div
      id="page"
      className=" rounded-xl bg-white grid grid-cols-[240px_1fr] h-screen"
    >
      <aside
        id="sidebar"
        className="relative z-20 h-full border-r border-slate-200"
      >
        Sidebar
      </aside>
      <main className="h-full relative z-10">
        <ContactsPage />
      </main>
    </div>
  );
}

export default App;
