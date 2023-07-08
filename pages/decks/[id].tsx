import { CardsTable } from '@/components/cards-table';
import { MainHeading } from '@/components/headers';
import { logDebug } from '@/lib/utils';
import * as rpc from '@/rpc';
import { Card, Deck } from '@/server/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import URLS from '@/lib/urls';

/**
 * Get deck details and cards
 */
async function getDeckData(id: number) {
  logDebug(`(decksItem: getData) getDeckCards`);
  try {
    const data = await rpc.decks.getDeckCards(id);
    logDebug(`(decksItem: getData) data`, JSON.stringify(data, null, 2));
    const parsed = JSON.parse(JSON.stringify(data));
    logDebug(`(decksItem: getData) parsedData`, JSON.stringify(parsed, null, 2));
    return { props: { parsed } };
  } catch (err) {
    logDebug('fetch deck data error: ', err);
    throw err;
  }
}

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  logDebug(`(getStaticProps) getting deck data for id: ${ctx.id}`);
  const { id } = ctx;
  const data = await getDeckData(id);
  return { ...data };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allDeckIds = await rpc.decks.getAllIDs();
  logDebug(`(getStaticPaths) generating static paths for deck ids:`, allDeckIds);
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
