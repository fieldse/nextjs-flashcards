import { CardsTable } from '@/components/cards-table';
import { MainHeading } from '@/components/headers';
import { Card, Deck } from '@/server/types';

type Props = {
  deck: Deck;
  cards: Card[];
};

/**
 * Single deck browse view
 */
export default function DeckItem({ cards, deck }: Props) {
  return (
    <div className="w-full mt-16">
      <MainHeading>{deck.title}</MainHeading>
      <CardsTable cards={cards} />;
    </div>
  );
}
