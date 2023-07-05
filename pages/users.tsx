import { Suspense } from 'react';
import { UsersTable, UsersTablePlaceholder } from '@/components/users';
import { SubFooter, VercelFooter } from '@/components/footer';
import { MainHeading } from '@/components/headers';

export const runtime = 'edge';
export const preferredRegion = 'home';
export const dynamic = 'force-dynamic';

/**
 * The Users view
 */
export default function Users() {
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
