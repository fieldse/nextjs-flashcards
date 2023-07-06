'use server';

import { Suspense } from 'react';
import { UsersTable, UsersTablePlaceholder } from './users-table';
import { SubFooter, VercelFooter } from '@/components/footer';
import { MainHeading } from '@/components/headers';
import { MainWrapper } from '@/components/main-wrapper';

/**
 * The Users overview
 */
export default async function Users() {
  return (
    <MainWrapper>
      <MainHeading>Users</MainHeading>
      <Suspense fallback={<UsersTablePlaceholder />}>
        {/* @ts-expect-error Async Server Component */}
        <UsersTable />
      </Suspense>

      <SubFooter />
      <VercelFooter />
    </MainWrapper>
  );
}
