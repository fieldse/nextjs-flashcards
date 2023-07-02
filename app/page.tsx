import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { UsersTable, UsersTablePlaceholder } from '@/components/users';

export const runtime = 'edge';
export const preferredRegion = 'home';
export const dynamic = 'force-dynamic';

/**
 * The main page of the app
 */
export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Flashcards app
      </h1>
      <Suspense fallback={<UsersTablePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <UsersTable />
      </Suspense>

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

      <div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
        <Link href="https://vercel.com">
          <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
        </Link>
        <Link
          href="https://github.com/vercel/examples/tree/main/storage/postgres-starter"
          className="flex items-center space-x-2"
        >
          <Image src="/github.svg" alt="GitHub Logo" width={24} height={24} priority />
          <p className="font-light">Source</p>
        </Link>
      </div>
    </main>
  );
}
