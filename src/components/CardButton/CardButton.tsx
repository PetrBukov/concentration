import React from 'react';
import { Card, CardID } from '../../types/card';
import { StyledCardButton } from './CardButton.style';

type CardButtonProps = Pick<Card, 'front' | 'id'> & {
  isActive: boolean;
  isResolved: boolean;
  toggleCard: (cardID: CardID) => void;
};

export const CardButton: React.FC<CardButtonProps> = ({
  id,
  front,
  isActive,
  isResolved,
  toggleCard
}) => {
  if (isResolved) {
    return <div />;
  }

  return (
    <StyledCardButton
      className={isActive ? 'active' : ''}
      onClick={() => {
        toggleCard(id);
      }}
    >
      <div className="flipper">
        <div className="front">{front}</div>
        <div className="back">wwwww</div>
      </div>
    </StyledCardButton>
  );
};
