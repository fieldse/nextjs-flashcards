import { SubFooter, VercelFooter } from '@/components/footer';
import { Heading3, MainHeading } from '@/components/headers';
import { MainWrapper } from '@/components/main-wrapper';
import Link from 'next/link';

/**
 * The main page of the app
 */
export default function MainPage() {
  // placeholder for routing
  // const currentPage: 'home' | 'cards' | 'decks' | 'users' = 'home';

  return (
    <MainWrapper>
      <MainHeading>Flashcards app</MainHeading>

      <div className="text-center h-full flex flex-col justify-center">
        <Heading3>Welcome to the app</Heading3>
        <p className="my-12">
          Try browsing some{' '}
          <Link href="/decks" className="text-blue-500">
            decks
          </Link>
        </p>
      </div>

      <SubFooter />
      <VercelFooter />
    </MainWrapper>
  );
}
