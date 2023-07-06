import { stripKebabCase, timeAgo } from '@/lib/utils';
import * as rpc from '../../rpc';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { DeckWithCardCount } from '@/server/types';

export async function getData(): Promise<{ decks: DeckWithCardCount[] }> {
  const data = await rpc.decks.getAllWithCardCounts();
  return {
    decks: data.rows,
  };
}

/**
 * Table view of all decks
 */
export async function DecksTable() {
  const { decks } = await getData();
  if (!decks) {
    return <>No data</>;
  }

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">All decks</h2>
          <p className="text-sm text-gray-500">Total: {decks.length} decks</p>
        </div>
      </div>
      <div className="divide-y divide-gray-900/5">
        {decks.map((deck) => (
          <div key={deck.title} className="flex items-start justify-between py-3">
            <div className="flex items-center space-x-4 w-full">
              <span className="flex flex-col">
                {/* Deck title and icon */}
                <span>
                  <HiOutlineBookOpen
                    className="inline-block mr-1 w-12 h-12 text-blue-500"
                    aria-valuetext={`${stripKebabCase(deck.title)}-icon`}
                  />
                  <span className="text-xl font-semibold">{deck.title}</span>
                </span>

                {/* Card count, created date */}
                <span className="w-full grow flex mt-6 leading-none space-between items-baseline">
                  <span className="text-sm text-gray-400 grow">total cards: {deck.cardCount}</span>
                  <span className="text-sm text-gray-500">{timeAgo(deck.createdAt)}</span>
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
