import * as rpc from '@/rpc';
import { Card } from '@/server/types';
import { GetStaticProps } from 'next';
import SingleCard from '@/components/single-card/single-card';

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { cardId } = ctx.params;
  try {
    const data = await await rpc.cards.get(cardId);
    const parsed = JSON.parse(JSON.stringify(data));
    return { props: { card: parsed } };
  } catch (err) {
    console.log(`getStaticProps: error: ${err}`);
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
