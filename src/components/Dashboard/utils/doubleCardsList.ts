import { CardsList } from '../../../types/card';

export const doubleCardsList = (cardsList: CardsList): CardsList => {
  const newCardsList = cardsList.map((card) => ({
    ...card,
    id: card.id + '_CLONE'
  }));

  return [...cardsList, ...newCardsList];
};
