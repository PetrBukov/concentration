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
      <div className="main-logo">🔭</div>
      <p className="main-title__prefix">Let's train your ...</p>
      <h1 className="main-title">CONCENTRATION</h1>
      <p className="main-title__postfix">... with this awesome card game</p>
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
