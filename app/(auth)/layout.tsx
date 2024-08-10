export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='relative grid min-h-dvh items-center justify-center overflow-hidden'>
      {children}
    </main>
  );
}
