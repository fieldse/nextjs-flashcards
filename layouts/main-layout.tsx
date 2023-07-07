import { Navigation } from '@/components/nav-menu';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
