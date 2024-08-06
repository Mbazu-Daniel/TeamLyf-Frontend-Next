import { PropsWithChildren } from "react";
export default function AuthLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-clr-black/40 relative grid min-h-dvh items-center justify-center py-8">
      <div className="w-auth rounded-2xl bg-white">{children}</div>
    </main>
  );
}

