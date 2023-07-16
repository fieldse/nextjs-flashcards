/**
 * White background wrapper for content with shadow effect
 */
export default function CardBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      {children}
    </div>
  );
}
