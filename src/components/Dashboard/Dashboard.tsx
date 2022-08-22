import React from 'react';
import { StyledDashboard } from './Dashboard.styles';
import { Gameboard } from '../Gameboard';

export const Dashboard: React.FC = () => {
  return (
    <StyledDashboard>
      <Gameboard />
    </StyledDashboard>
  );
};
