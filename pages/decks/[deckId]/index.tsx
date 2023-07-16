import { CardsTable } from '@/components/cards-table';
import { MainHeading } from '@/components/headers';
import * as rpc from '@/rpc';
import { Card, Deck } from '@/server/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import urls from '@/lib/urls';

/**
 * Get deck details and cards
 */
async function getDeckData(deckId: number) {
  try {
    const data = await rpc.decks.getDeckCards(deckId);
    const parsed = JSON.parse(JSON.stringify(data));
    return { props: { ...parsed } };
  } catch (err) {
    throw err;
  }
}

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { deckId } = ctx.params;
  const data = await getDeckData(deckId);
  return { ...data };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allDeckIds = await rpc.decks.getAllIDs();
  const deckPaths = allDeckIds.map((id) => urls.decks.item(id));

  return {
    paths: [...deckPaths],
    fallback: false,
  };
};

type Props = {
  deck: Deck;
  cards: Card[];
};

/**
 * Single deck browse view
 */
export default function DeckPage({ cards, deck }: Props) {
  return (
    <div className="w-full mt-16">
      <MainHeading>{deck.title}</MainHeading>
      <CardsTable cards={cards} />;
    </div>
  );
}
