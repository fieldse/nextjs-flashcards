import { Navigation } from '@/components/nav-menu';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

/**
 * Basic layout with navigation bar, and no footers
 */
export default function NoFootersLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
