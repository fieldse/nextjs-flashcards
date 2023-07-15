import * as rpc from '@/rpc';
import { Card } from '@/server/types';
import { GetServerSideProps } from 'next';
import { logDebug } from '@/lib/utils';
import SingleCard from '@/components/single-card/single-card';

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { cardId } = ctx.params;
  logDebug(`=== (card) getServerSideProps: cardId`, cardId);
  try {
    const data = await await rpc.cards.get(cardId);
    const parsed = JSON.parse(JSON.stringify(data));
    logDebug(`=== (card) getServerSideProps: data`, JSON.stringify(parsed, null, 2));
    return { props: { card: parsed } };
  } catch (err) {
    console.log(`getServerSideProps: error: ${err}`);
    return { props: { hasError: true } };
  }
};

type Props = {
  card: Card;
};

/**
 * View for single card within deck browse view
 */
export default function DeckCard({ card }: Props) {
  return <SingleCard card={card} />;
}
