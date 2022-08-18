import React, { useEffect, useState } from 'react';
import { StyledDashboard } from './Dashboard.styles';
import { TEST_CARD_ARRAY } from './constants';
import { doubleCardsList } from './utils';
import { CardID } from '../../types/card';
import { CardButton } from '../CardButton';

export const Dashboard: React.FC = () => {
  const cardsList = doubleCardsList(TEST_CARD_ARRAY);
  const [selectedCards, setSelectedCards] = useState<Array<CardID>>([]);

  const toggleCard = (cardID: CardID) => {
    setSelectedCards((prevSelectedCards) => {
      if (prevSelectedCards.length <= 1) {
        return [...prevSelectedCards, cardID];
      }

      return prevSelectedCards;
    });
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      setTimeout(() => {
        setSelectedCards([]);
      }, 1500);
    }
  }, [selectedCards]);

  return (
    <StyledDashboard>
      {cardsList.map((card) => (
        <CardButton
          key={card.id}
          id={card.id}
          isActive={selectedCards.includes(card.id)}
          front={card.front}
          toggleCard={toggleCard}
        />
      ))}
    </StyledDashboard>
  );
};
