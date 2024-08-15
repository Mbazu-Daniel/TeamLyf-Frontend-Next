export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='relative grid min-h-dvh items-center justify-center bg-cs-gray-200'>
      {children}
    </main>
  );
}
