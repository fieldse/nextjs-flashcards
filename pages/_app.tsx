// Custom app wrapper for everything under /pages directory

import type { AppProps } from 'next/app';
import { Navigation } from '@/components/nav-menu';
import '@/styles/globals.css';
import { MainWrapper } from '@/components/main-wrapper';
import { VercelFooter } from '@/components/footer';

export default function PagesApp({ Component, pageProps }: AppProps) {
  return (
    <MainWrapper>
      <Navigation />
      <Component {...pageProps} />
      <VercelFooter />
    </MainWrapper>
  );
}
