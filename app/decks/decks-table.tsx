import { stripKebabCase, timeAgo } from '@/lib/utils';
import { RefreshButton } from '@/components/buttons';
import * as rpc from '../../rpc';
import { HiOutlineBookOpen } from 'react-icons/hi';

/**
 * Table view of all decks
 */
export async function DecksTable() {
  let data;

  try {
    data = await rpc.decks.getAllWithCardCounts();
  } catch (e) {
    throw new Error(`get decks failed:` + e);
  }
  const { rows: decks } = data;

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">All decks</h2>
          <p className="text-sm text-gray-500">Fetched {decks.length} cards</p>
        </div>
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">
        {decks.map((deck) => (
          <div key={deck.title} className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-4">
              <span>
                <HiOutlineBookOpen
                  className="inline-block mr-1 w-12 h-12 text-blue-500"
                  aria-valuetext={`${stripKebabCase(deck.title)}-icon`}
                />
              </span>
              <div className="space-y-1">
                <p className="font-medium leading-none">total cards:</p>
                <p className="text-sm text-gray-500">{deck.cardCount}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">{timeAgo(deck.createdAt)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
