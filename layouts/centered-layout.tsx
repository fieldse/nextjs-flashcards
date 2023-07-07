import { Navigation } from '@/components/nav-menu';
import '@/globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Flashcards app',
  description: 'A simple flashcards app built with Next.js',
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

/**
 * Basic centered div layout
 */
export const CenteredLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navigation />
        <div style={{ margin: '0 auto', maxWidth: 650 }}>{children}</div>
      </body>
    </html>
  );
};
export const getLayout = (page: any) => <CenteredLayout>{page}</CenteredLayout>;

CenteredLayout.getLayout = getLayout;
