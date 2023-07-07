// Buttons for self-scoring on a review session

import { ButtonSolid } from './button';

/**
 * Set of three buttons for self-scoring on a review session
 *  Easy / Okay / Hard
 */
export function ScoringButtons({ nextCardId }: { nextCardId: number }) {
  return (
    <div className="flex relative top-6 justify-around w-full my-8">
      <a href={`/card/${nextCardId}`}>
        <ButtonSolid color="green-dark">Easy</ButtonSolid>
      </a>
      <a href={`/card/${nextCardId}`}>
        <ButtonSolid color="blue-dark">Okay</ButtonSolid>
      </a>
      <a href={`/card/${nextCardId}`}>
        <ButtonSolid color="red">Hard</ButtonSolid>
      </a>
    </div>
  );
}
