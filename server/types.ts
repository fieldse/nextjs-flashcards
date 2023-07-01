// Basic data types for the app
export type User = {
  id: number;
  name: string;
  email: string;
  image: string;
  createdAt: string; // fixme: should be a date type
};

export type Card = {
  id: number;
  headword: string;
  definition: string;
  headwordPronunciation: string;
  headwordLanguage: string;
  definitionLanguage: string;
  updatedAt: string;
  createdAt: string; // fixme: should be a date type
};

export type Deck = {
  id: number;
  title: string;
  description: string;
  parentDeckId?: number;
  updatedAt: string;
  createdAt: string; // fixme: should be a date type
};
