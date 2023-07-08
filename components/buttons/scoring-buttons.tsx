// Buttons for self-scoring on a review session

import { HiOutlineFaceFrown, HiOutlineFaceSmile } from 'react-icons/hi2';
import { ButtonSolid } from './button';
import { HiOutlineThumbUp } from 'react-icons/hi';
import * as urls from '@/lib/urls';

/**
 * Set of three buttons for self-scoring on a review session
 *  Easy / Okay / Hard
 */
export function ScoringButtons({ nextCardId }: { nextCardId: number }) {
  const nextCardUrl = urls.cardItem(nextCardId);
  return (
    <div className="flex relative top-6 justify-around w-full my-8">
      <a href={nextCardUrl}>
        <ButtonSolid className="px-6" color="green-dark">
          <span className="flex items-center">
            Easy
            <HiOutlineFaceSmile className="ml-3" />
          </span>
        </ButtonSolid>
      </a>
      <a href={nextCardUrl}>
        <ButtonSolid className="px-6" color="blue-dark">
          <span className="flex items-center">
            Okay
            <HiOutlineThumbUp className="ml-3" />
          </span>
        </ButtonSolid>
      </a>
      <a href={nextCardUrl}>
        <ButtonSolid className="px-6" color="red">
          <span className="flex items-center">
            Hard
            <HiOutlineFaceFrown className="ml-3" />
          </span>
        </ButtonSolid>
      </a>
    </div>
  );
}
