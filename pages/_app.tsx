// Custom app wrapper for everything under /pages directory

import type { AppProps } from 'next/app';
import { Navigation } from '@/components/nav-menu';
import '@/styles/globals.css';
// import { MainHeading } from '@/components/headers';
import { MainWrapper } from '@/components/main-wrapper';

export default function PagesApp({ Component, pageProps }: AppProps) {
  return (
    <MainWrapper>
      <Navigation />
      {/* <MainHeading>Cards</MainHeading> */}
      <Component {...pageProps} />
    </MainWrapper>
  );
}
