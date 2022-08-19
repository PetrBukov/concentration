import React, { useCallback, useMemo } from 'react';
import { Button, Scoreboard, StyledDashboard } from './Dashboard.styles';
import { useGameCenter } from '../../providers/GameCenter';
import { Gameboard } from '../Gameboard';

export const Dashboard: React.FC = () => {
  const { state, dispatch } = useGameCenter();

  const movesCount = useMemo(() => {
    return state?.currentGame?.movesCount ?? '-';
  }, [state?.currentGame?.movesCount]);

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
            Time: <span>00:33</span>
          </li>
        </ul>
        <Button onClick={startNewGame}>New Game</Button>
      </Scoreboard>
      <Gameboard />
    </StyledDashboard>
  );
};
