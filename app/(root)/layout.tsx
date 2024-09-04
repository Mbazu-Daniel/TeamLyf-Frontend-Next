import { Navbar } from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div>
        <div>sidebar</div>
        <main>{children}</main>
      </div>
    </>
  );
}
