import React, { useCallback, useEffect, useState } from 'react';
import { StyledDashboard } from './Dashboard.styles';
import { TEST_CARD_ARRAY } from './constants';
import { doubleCardsList, transformCardsListToMap } from './utils';
import { CardID } from '../../types/card';
import { CardButton } from '../CardButton';

export const Dashboard: React.FC = () => {
  const cardsList = doubleCardsList(TEST_CARD_ARRAY);
  const cardsMap = transformCardsListToMap(cardsList);
  const [selectedCards, setSelectedCards] = useState<Set<CardID>>(new Set());
  const [resolvedCards, setResolvedCards] = useState<Set<CardID>>(new Set());

  const toggleCard = (cardID: CardID) => {
    setSelectedCards((prevSelectedCards) => {
      if (prevSelectedCards.size <= 1 && !prevSelectedCards.has(cardID)) {
        const newSelectedCards = new Set(prevSelectedCards);
        return newSelectedCards.add(cardID);
      }

      return prevSelectedCards;
    });
  };

  const checkCurrentTurn = useCallback(
    ([cardID1, cardID2]: Set<CardID>) => {
      if (cardsMap.get(cardID1)?.title === cardsMap.get(cardID2)?.title) {
        setResolvedCards((prevResolvedCards) => {
          const newResolvedCards = new Set(prevResolvedCards);
          newResolvedCards.add(cardID1).add(cardID2);

          return newResolvedCards;
        });
      }

      setSelectedCards(new Set());
    },
    [cardsMap]
  );

  const startNewGame = useCallback(() => {
    setResolvedCards(new Set());
  }, []);

  useEffect(() => {
    if (selectedCards.size === 2) {
      setTimeout(() => {
        checkCurrentTurn(selectedCards);
      }, 1500);
    }
  }, [selectedCards, checkCurrentTurn]);

  useEffect(() => {
    if (resolvedCards.size === cardsMap.size) {
      startNewGame();
    }
  });

  return (
    <StyledDashboard>
      {cardsList.map((card) => (
        <CardButton
          key={card.id}
          id={card.id}
          isActive={selectedCards.has(card.id)}
          isResolved={resolvedCards.has(card.id)}
          front={card.front}
          toggleCard={toggleCard}
        />
      ))}
    </StyledDashboard>
  );
};
