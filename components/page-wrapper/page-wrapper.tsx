/**
 * Main wrapper for page content
 */
export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start">
      {children}
    </main>
  );
}
