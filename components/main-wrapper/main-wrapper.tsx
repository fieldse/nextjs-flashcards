/**
 * Main wrapper for page content
 */
export function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      {children}
    </main>
  );
}
