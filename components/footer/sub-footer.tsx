import Link from 'next/link';
/**
 * Sub-footer, below main conten section
 */
export function SubFooter() {
  return (
    <div className="flex justify-center space-x-5 pt-10 mt-10 border-t border-gray-300 w-full max-w-xl text-gray-600">
      <Link
        href="https://mattfields.dev/"
        className="font-medium underline underline-offset-4 hover:text-black transition-colors"
      >
        Matt Fields
      </Link>

      <Link
        href="https://vercel.com/postgres"
        className="font-medium underline underline-offset-4 hover:text-black transition-colors"
      >
        Next.JS Postgres template
      </Link>
    </div>
  );
}
