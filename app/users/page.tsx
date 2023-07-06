'use server';

import { Suspense } from 'react';
import { UsersTable, UsersTablePlaceholder } from './users-table';
import { SubFooter, VercelFooter } from '@/components/footer';
import { MainHeading } from '@/components/headers';

/**
 * The Users overview
 */
export default async function Users() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <MainHeading>Users</MainHeading>
      <Suspense fallback={<UsersTablePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <UsersTable />
      </Suspense>

      <SubFooter />
      <VercelFooter />
    </main>
  );
}
