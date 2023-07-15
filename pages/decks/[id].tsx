import { CardsTable } from '@/components/cards-table';
import { MainHeading } from '@/components/headers';
import * as rpc from '@/rpc';
import { Card, Deck } from '@/server/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import URLS from '@/lib/urls';

/**
 * Get deck details and cards
 */
async function getDeckData(id: number) {
  try {
    const data = await rpc.decks.getDeckCards(id);
    const parsed = JSON.parse(JSON.stringify(data));
    return { props: { ...parsed } };
  } catch (err) {
    throw err;
  }
}

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { id } = ctx.params;
  const data = await getDeckData(id);
  return { ...data };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allDeckIds = await rpc.decks.getAllIDs();
  return {
    paths: allDeckIds.map((id) => URLS.decks.item(id)),
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
