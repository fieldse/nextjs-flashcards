import { Navigation } from '@/components/nav-menu';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Flashcards app',
  description: 'A simple Next.js app for flashcards language study',
};

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
