import { Card, CardID, CardsList } from './card';

export type Game = {
  cardsList: CardsList;
  cardsMap: Map<CardID, Card>;
  resolvedCardIDs: Set<CardID>;
  selectedCardIDs: Set<CardID>;
  movesCount: number;
  startDateMs: number;
  endDateMs: number | null;
};
