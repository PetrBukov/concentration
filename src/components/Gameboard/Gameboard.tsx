import React, { useCallback, useEffect } from 'react';
import { useGameCenter } from '../../providers';
import { CardID } from '../../types/card';
import { CardButton } from '../CardButton';
import { StyledGameboard } from './Gameboard.styles';

export const Gameboard: React.FC = () => {
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
    console.log('effecct check', currentGame);
    if (currentGame && currentGame.selectedCardIDs.size === 2) {
      console.log('effecct check inside');

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
    <StyledGameboard>
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
    </StyledGameboard>
  );
};
