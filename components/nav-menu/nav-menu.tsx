import Link from 'next/link';

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'Decks', href: '/decks' },
  { title: 'Cards', href: '/cards' },
  { title: 'Users', href: '/users' },
];
/**
 * The main navigation menu for the app
 */
export function Navigation({ className }: { className?: string }) {
  return (
    <nav
      className={`${
        className || ''
      } bg-white z-50 w-full fixed top-0 flex justify-start p-4 space-x-4 items-center `}
    >
      {navLinks.map((link, index) => (
        <NavLink key={`nav-${index}`} {...link} />
      ))}
    </nav>
  );
}

/**
 * Individual navigation item
 */
function NavLink({ title, href, className }: { title: string; href: string; className?: string }) {
  return (
    <Link href={href}>
      <span
        className={`${
          className || ''
        } w-40 px-8 py-2 text-gray-600 text-lg text-center rounded-sm hover:bg-gray-200 cursor-pointer `}
      >
        {title}
      </span>
    </Link>
  );
}
