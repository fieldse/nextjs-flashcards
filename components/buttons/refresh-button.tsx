'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';

export function RefreshButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className={`${
        isPending ? 'cursor-not-allowed text-gray-400' : ''
      } text-sm text-gray-500 hover:text-gray-900`}
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          router.refresh();
        });
      }}
    >
      {isPending ? (
        'Refreshing...'
      ) : (
        <span className="text-gray-500">
          <HiOutlineRefresh className="mr-1 inline-block" size={20} />
          Refresh
        </span>
      )}
    </button>
  );
}
