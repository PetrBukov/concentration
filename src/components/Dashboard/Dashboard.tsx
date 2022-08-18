import React from 'react';
import { Card } from '../Card';
import { StyledDashboard } from './Dashboard.styles';
import { TEST_CARD_ARRAY } from './constants';
import { doubleCardsList } from './utils';

export const Dashboard: React.FC = () => {
  const cardsList = doubleCardsList(TEST_CARD_ARRAY);

  return (
    <StyledDashboard>
      {cardsList.map((card) => (
        <Card key={card.id} front={card.front} />
      ))}
    </StyledDashboard>
  );
};
