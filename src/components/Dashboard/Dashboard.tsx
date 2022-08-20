import React from 'react';
import { StyledDashboard } from './Dashboard.styles';
import { Gameboard } from '../Gameboard';
import { Scoreboard } from '../Scoreboard';

export const Dashboard: React.FC = () => {
  return (
    <StyledDashboard>
      <Scoreboard />
      <Gameboard />
    </StyledDashboard>
  );
};
