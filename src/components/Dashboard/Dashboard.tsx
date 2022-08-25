import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { StyledDashboard } from './Dashboard.styles';
import {
  GameOverPage,
  MainMenuPage,
  NewGamePage,
  NoMatchPage,
  CancelGamePage,
  CurrentGamePage
} from '../../pages';

export const Dashboard: React.FC = () => {
  return (
    <StyledDashboard>
      <Routes>
        <Route path="/" element={<MainMenuPage />} />
        <Route path="/new-game" element={<NewGamePage />} />
        <Route path="/current-game" element={<CurrentGamePage />} />
        <Route path="/cancel-game" element={<CancelGamePage />} />
        <Route path="/game-over" element={<GameOverPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </StyledDashboard>
  );
};
