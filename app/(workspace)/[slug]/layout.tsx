import { AppSidebar } from "@/components/AppSidebar";
import { Navbar } from "@/components/Navbar";
import { SidebarLayout, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr] h-screen">
        <Navbar />
        <div className="relative overflow-hidden">
          <SidebarLayout>
            <AppSidebar>
              <SidebarTrigger className="rounded-md bg-purple-100 p-1" />
            </AppSidebar>
            <main>{children}</main>
          </SidebarLayout>
        </div>
      </div>
    </>
  );
}
