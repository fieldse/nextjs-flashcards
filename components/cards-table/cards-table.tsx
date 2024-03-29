// Components for displaying cards as a table
import { timeAgo } from '@/lib/utils';
import { HiOutlineDocument } from 'react-icons/hi';
import { Card } from '@/server/types';
import Link from 'next/link';
import urls from '@/lib/urls';
import { useRouter } from 'next/router';

type Props = {
  title?: string;
  cards: Card[];
};
/**
 * Vertical table view of all cards
 */
export function CardsTable({ title, cards }: Props) {
  const router = useRouter();
  const { deckId } = router.query; // if we have a deckId, we're in deck browse view
  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          <p className="text-sm text-gray-500">total cards: {cards.length}</p>
        </div>
      </div>
      <div className="divide-y divide-gray-900/5">
        {cards.length ? (
          cards.map((card) => (
            <CardRow key={`card-row-${card.id}`} card={card} deckId={deckId as string} />
          ))
        ) : (
          <div>Cards data empty</div>
        )}
      </div>
    </div>
  );
}

/**
 * Single card row in card table
 */
export function CardRow({ card, deckId }: { card: Card; deckId?: string }) {
  const url = deckId ? urls.decks.deckCard(deckId, card.id) : urls.cards.item(card.id);
  return (
    <Link key={`card-${card.id}`} href={url}>
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center space-x-4">
          <span>
            <HiOutlineDocument
              className="inline-block mr-1 w-12 h-12 text-blue-500"
              aria-valuetext={`${card.headword}-icon`}
            />
          </span>
          <div className="space-y-1">
            <p className="font-medium leading-none">{card.headword}</p>
            <p className="text-sm text-gray-500">{card.definition}</p>
          </div>
        </div>
        <p className="text-sm text-gray-500">{timeAgo(card.createdAt)}</p>
      </div>
    </Link>
  );
}

export function CardsTablePlaceholder() {
  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">All cards</h2>
          <p className="text-sm text-gray-500">Fetching cards...</p>
        </div>
      </div>
      <div className="divide-y divide-gray-900/5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse" />
              <div className="space-y-1">
                <div className="h-6 w-28 rounded-md bg-gray-200 animate-pulse" />
                <div className="h-4 w-24 rounded-md bg-gray-200 animate-pulse" />
              </div>
            </div>
            <div className="h-4 w-12 rounded-md bg-gray-200 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
