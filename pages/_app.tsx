// Custom app wrapper for everything under /pages directory

import type { AppProps } from 'next/app';

import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
