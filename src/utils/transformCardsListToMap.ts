import { Card, CardID, CardsList } from '../types/card';

export const transformCardsListToMap = (
  cardsList: CardsList
): Map<CardID, Card> => {
  return new Map(cardsList.map((card) => [card.id, card]));
};
