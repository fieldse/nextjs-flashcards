/**
 * Main wrapper for page content
 */
export function MainWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={`relative flex min-h-screen flex-col items-center justify-center ${
        className || ''
      }`}
    >
      {children}
    </main>
  );
}
