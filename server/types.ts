// Basic data types for the app
export type User = {
  id: number;
  name: string;
  email: string;
  image: string;
  createdAt: Date;
};

export type Card = {
  id: number;
  headword: string;
  definition: string;
  headwordPronunciation: string;
  headwordLanguage: string;
  definitionLanguage: string;
  updatedAt: Date;
  createdAt: Date;
};

export type Deck = {
  id: number;
  title: string;
  description: string;
  parentDeckId?: number;
  updatedAt: Date;
  createdAt: Date;
};
