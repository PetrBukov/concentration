import React, { useMemo } from 'react';
import { Button } from '../../components';
import { ButtonLink } from '../../components/ButtonLink';
import { useGameCenter } from '../../providers';

import { MainMenuPageContainer } from './MainMenuPage.styles';

export const MainMenuPage: React.FC = () => {
  const {
    state: { currentGame }
  } = useGameCenter();

  const isGameGoinng = useMemo(() => {
    return Boolean(currentGame && !currentGame.endDateMs);
  }, [currentGame]);

  return (
    <MainMenuPageContainer>
      <h1 className="main-title">
        <div className="main-title__name">
          <span className="main-title__name-letter M1">M</span>
          <span className="main-title__name-letter E1">E</span>
          <span className="main-title__name-letter M2">M</span>
          <span className="main-title__name-letter O1">Ö</span>
          <span className="main-title__name-letter O2">O</span>
          <span className="main-title__name-letter R">R</span>
          <span className="main-title__name-letter E2">E</span>
        </div>
        <div className="main-title__subtitle">let's train your brain</div>
      </h1>
      <div className="main-menu">
        <ButtonLink
          to="/new-game"
          variant={currentGame ? 'outlined' : 'contained'}
        >
          New Game
        </ButtonLink>
        <ButtonLink
          to={isGameGoinng ? '/current-game' : '/'}
          disabled={!isGameGoinng}
        >
          Continue Game
        </ButtonLink>
        <Button disabled>History</Button>
        <Button disabled>Settings</Button>
        <Button disabled>About</Button>
      </div>
    </MainMenuPageContainer>
  );
};
