// Single card view

import { Heading2 } from '@/components/headers';
import { Card } from '@/server/types';
import { useEffect } from 'react';

export default function SingleCard({ card }: { card: Card }) {
  useEffect(() => {
    console.log('inside SingleCard: ', JSON.stringify(card, null, 2));
  });
  console.log(`card: `, card);
  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex flex-col justify-between">
        <Heading2> {card.headword || 'no headword'}</Heading2>
        <p className="text-2xl">{card.definition || 'no definition'}</p>
      </div>
    </div>
  );
}
