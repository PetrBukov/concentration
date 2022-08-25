import React, { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonLink, CardsList, Timer } from '../../components';
import { useGameCenter } from '../../providers';
import { convertMilisecondsToString } from '../../utils';
import {
  GiCardExchange,
  GiSandsOfTime,
  GiStack,
  GiBroom
} from 'react-icons/gi';

import {
  CurrentGamePageActions,
  CurrentGamePageContainer,
  CurrentGamePageScores,
  CurrentGamePageScoresItem,
  CurrentGamePageScoresItemIcon
} from './CurrentGamePage.styles';

export const CurrentGamePage: React.FC = () => {
  const {
    state: { currentGame }
  } = useGameCenter();
  const navigate = useNavigate();

  const isGameGoing = useMemo(
    () => Boolean(currentGame && !currentGame.endDateMs),
    [currentGame]
  );

  const movesCount = useMemo(() => currentGame?.movesCount, [currentGame]);
  const startDateMs = useMemo(() => currentGame?.startDateMs, [currentGame]);
  const endDateMs = useMemo(() => currentGame?.endDateMs, [currentGame]);

  useEffect(() => {
    const isGameFinished = Boolean(currentGame && currentGame?.endDateMs);

    if (isGameFinished) {
      navigate('/game-over', { replace: true });
    }
  }, [currentGame, navigate]);

  return (
    <CurrentGamePageContainer>
      <CurrentGamePageActions>
        <ButtonLink to="/">
          <GiStack /> Menu
        </ButtonLink>
        <ButtonLink
          to="/cancel-game"
          disabled={!isGameGoing}
          variant="outlined"
        >
          <GiBroom />
          Cancel
        </ButtonLink>
      </CurrentGamePageActions>
      <CardsList />
      <CurrentGamePageScores>
        <CurrentGamePageScoresItem>
          <CurrentGamePageScoresItemIcon>
            <GiCardExchange />
          </CurrentGamePageScoresItemIcon>
          {movesCount}
        </CurrentGamePageScoresItem>
        <CurrentGamePageScoresItem>
          <CurrentGamePageScoresItemIcon>
            <GiSandsOfTime />
          </CurrentGamePageScoresItemIcon>
          <Timer startDateMs={startDateMs} endDateMs={endDateMs} />
        </CurrentGamePageScoresItem>
      </CurrentGamePageScores>
    </CurrentGamePageContainer>
  );
};
