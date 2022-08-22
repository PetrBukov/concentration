import React from 'react';
import { Card, CardID } from '../../../../../../types/card';
import { StyledCardButton } from './CardButton.style';

type CardButtonProps = Pick<Card, 'front' | 'id'> & {
  isSelected: boolean;
  isResolved: boolean;
  selectCard: (cardID: CardID) => void;
};

export const CardButton: React.FC<CardButtonProps> = ({
  id,
  front,
  isSelected,
  isResolved,
  selectCard
}) => {
  if (isResolved) {
    return <div />;
  }

  return (
    <StyledCardButton
      className={isSelected ? 'selected' : ''}
      onClick={() => {
        selectCard(id);
      }}
    >
      <div className="flipper">
        <div className="front">{front}</div>
        <div className="back"></div>
      </div>
    </StyledCardButton>
  );
};
