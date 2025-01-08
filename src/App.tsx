import { ContactsPage } from "./page/contacts";
import { ViewportLayout } from "./layout/viewport-layout";

function App() {
  return (
    <ViewportLayout>
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
    </ViewportLayout>
  );
}

export default App;
