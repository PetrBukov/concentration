import React, { useCallback, useMemo } from 'react';
import { Button, Scoreboard, StyledDashboard } from './Dashboard.styles';
import { useGameCenter } from '../../providers/GameCenter';
import { Gameboard } from '../Gameboard';
import { Timer } from '../Timer';

export const Dashboard: React.FC = () => {
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

  const startNewGame = useCallback(() => {
    dispatch({ type: 'createNewGame' });
  }, [dispatch]);

  return (
    <StyledDashboard>
      <Scoreboard>
        <h2>Game Info</h2>
        <ul>
          <li>
            Moves: <span>{movesCount}</span>
          </li>
          <li>
            Time: <Timer startDateMs={startDateMs} endDateMs={endDateMs} />
          </li>
        </ul>
        <Button onClick={startNewGame}>New Game</Button>
      </Scoreboard>
      <Gameboard />
    </StyledDashboard>
  );
};
