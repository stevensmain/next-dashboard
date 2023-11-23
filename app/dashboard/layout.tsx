import SideNav from "../ui/dashboard/sidenav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <aside className="w-full flex-none md:w-64">
        <SideNav />
      </aside>
      <main className="flex-grow pt-6 px-6 md:overflow-y-auto md:pt-12 md:px-12">
        {children}
        <footer className="py-12 flex items-center justify-center">
          Hecho con ❤️ por Vercel
        </footer>
      </main>
    </div>
  );
}
