import React, { useCallback, useEffect } from 'react';

import { useGameCenter } from '../../providers';
import { CardID } from '../../types/card';
import { CardsListContainer } from './CardsList.styles';
import { CardButton } from './components';

export const CardsList: React.FC = () => {
  const {
    state: { currentGame },
    dispatch
  } = useGameCenter();

  const selectCard = useCallback(
    (cardID: CardID) => {
      dispatch({
        type: 'selectCard',
        cardID
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (currentGame && currentGame.selectedCardIDs.size === 2) {
      setTimeout(() => {
        dispatch({ type: 'checkCurrentGameTurn' });
      }, 1500);
    }
  }, [currentGame, dispatch]);

  if (!currentGame) {
    return null;
  }

  const { cardsList, selectedCardIDs, resolvedCardIDs } = currentGame;

  return (
    <CardsListContainer>
      {cardsList.map((card) => (
        <CardButton
          key={card.id}
          id={card.id}
          isSelected={selectedCardIDs.has(card.id)}
          isResolved={resolvedCardIDs.has(card.id)}
          front={card.front}
          selectCard={selectCard}
        />
      ))}
    </CardsListContainer>
  );
};
