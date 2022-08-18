import React, { useState } from 'react';
import { StyledCard } from './Card.style';

type CardProps = {
  front: string;
};

export const Card: React.FC<CardProps> = ({ front }) => {
  const [isActive, setIsActive] = useState(false);

  console.log({ isActive });

  return (
    <StyledCard
      className={isActive ? 'active' : ''}
      onClick={() => {
        setIsActive((prevState) => !prevState);
      }}
    >
      <div className="flipper">
        <div className="front">{front}</div>
        <div className="back">wwwww</div>
      </div>
    </StyledCard>
  );
};
