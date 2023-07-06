/**
 * Main H1 heading
 */
export function MainHeading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
      {children}
    </h1>
  );
}
