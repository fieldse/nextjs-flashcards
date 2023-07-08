import { Navigation } from '@/components/nav-menu';
import { SubFooter, VercelFooter } from '@/components/footer';

import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

/**
 * The base app layout with navigation bar and footers
 */
export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navigation />
        {children}
        <SubFooter />
        <VercelFooter />
      </body>
    </html>
  );
}
