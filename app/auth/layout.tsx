import { PropsWithChildren } from "react";

function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main className="bg-black/40 relative grid min-h-dvh items-center justify-center py-8">
      <div className="w-auth rounded-2xl bg-white">{children}</div>
    </main>
  );
}

export default AuthLayout;
