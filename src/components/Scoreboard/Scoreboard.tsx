import React, { useCallback, useMemo } from 'react';
import { useGameCenter } from '../../providers';
import { Button } from '../Button';
import { Timer } from '../Timer';
import {
  ButtonsContainer,
  ScoreboardTitle,
  StyledScoreboard
} from './Scoreboard.styles';

export const Scoreboard: React.FC = () => {
  const { state, dispatch } = useGameCenter();

  const movesCount = useMemo(() => {
    return state?.currentGame?.movesCount ?? '-';
  }, [state?.currentGame?.movesCount]);

  const startDateMs = useMemo(() => {
    return state?.currentGame?.startDateMs;
  }, [state?.currentGame?.startDateMs]);

  const endDateMs = useMemo(() => {
    return state?.currentGame?.endDateMs ?? null;
  }, [state?.currentGame?.endDateMs]);

  const isGameGoing = useMemo(
    () => Boolean(state.currentGame && !state.currentGame.endDateMs),
    [state.currentGame]
  );

  const startNewGame = useCallback(() => {
    dispatch({ type: 'createNewGame' });
  }, [dispatch]);

  const cancelCurrentGame = useCallback(() => {
    dispatch({ type: 'cancelCurrentGame' });
  }, [dispatch]);

  return (
    <StyledScoreboard>
      <ScoreboardTitle>Game Info</ScoreboardTitle>
      <ul>
        <li>
          Moves: <span>{movesCount}</span>
        </li>
        <li>
          Time: <Timer startDateMs={startDateMs} endDateMs={endDateMs} />
        </li>
      </ul>
      <ButtonsContainer>
        <Button onClick={startNewGame} disabled={isGameGoing}>
          New
        </Button>
        <Button onClick={startNewGame} disabled={!isGameGoing}>
          Restart
        </Button>
        <Button
          onClick={cancelCurrentGame}
          disabled={!isGameGoing}
          variant="outlined"
        >
          Cancel
        </Button>
      </ButtonsContainer>
    </StyledScoreboard>
  );
};
