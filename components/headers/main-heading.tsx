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
/**
 * H2 heading
 */
export function Heading2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-2xl ${
        className || ''
      }`}
    >
      {children}
    </h2>
  );
}

/**
 * H3 heading
 */
export function Heading3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-2xl">
      {children}
    </h3>
  );
}
