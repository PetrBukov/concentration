import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonLink } from '../../components/ButtonLink';
import { useGameCenter } from '../../providers';
import { convertMilisecondsToString } from '../../utils';
import {
  GameOverPageCard,
  GameOverPageCardHeader,
  GameOverPageCardContent,
  GameOverPageContainer,
  GameOverPageCardScores,
  GameOverPageCardScoresItem,
  GameOverPageCardRates,
  GameOverPageCardRatesItem,
  GameOverPageCardActions
} from './GameOverPage.styles';

export const GameOverPage: React.FC = () => {
  const { state } = useGameCenter();
  const navigate = useNavigate();

  useEffect(() => {
    const isCurrentGameExist = Boolean(state.currentGame);
    const isGameFinished =
      isCurrentGameExist && Boolean(state.currentGame?.endDateMs);
    if (!isCurrentGameExist) {
      navigate('/', { replace: true });
    } else if (!isGameFinished) {
      navigate('/current-game', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const timeSinceStarting = useMemo(() => {
    return (
      Number(state?.currentGame?.endDateMs) -
      Number(state?.currentGame?.startDateMs)
    );
  }, [state]);

  return (
    <GameOverPageContainer>
      <GameOverPageCard>
        <GameOverPageCardHeader>
          <h1>VICTORY</h1>
        </GameOverPageCardHeader>
        <GameOverPageCardContent>
          <GameOverPageCardScores>
            <GameOverPageCardScoresItem>
              🚀 {state?.currentGame?.movesCount}
            </GameOverPageCardScoresItem>
            <GameOverPageCardScoresItem>
              ⌛︎ {convertMilisecondsToString(timeSinceStarting)}
            </GameOverPageCardScoresItem>
          </GameOverPageCardScores>
          <GameOverPageCardRates>
            <GameOverPageCardRatesItem>⭐️</GameOverPageCardRatesItem>
            <GameOverPageCardRatesItem>⭐️</GameOverPageCardRatesItem>
            <GameOverPageCardRatesItem>⭐️</GameOverPageCardRatesItem>
          </GameOverPageCardRates>
          <GameOverPageCardActions>
            <ButtonLink to="/new-game">Restart</ButtonLink>
            <ButtonLink to="/" variant="outlined">
              Menu
            </ButtonLink>
          </GameOverPageCardActions>
        </GameOverPageCardContent>
      </GameOverPageCard>
    </GameOverPageContainer>
  );
};
