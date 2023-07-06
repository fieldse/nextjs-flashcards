// Single card view

import { Heading2 } from '@/components/headers';
import { Card } from '@/server/types';

export function SingleCard({ card }: { card: Card }) {
  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex flex-col justify-between">
        <Heading2> {card.headword}</Heading2>
        <p className="text-2xl">{card.definition}</p>
      </div>
    </div>
  );
}
