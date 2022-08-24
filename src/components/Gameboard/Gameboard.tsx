import React, { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGameCenter } from '../../providers';
import { GameScoresList, GameboardActions, CardsList } from './components';
import { GameboardContainer } from './Gameboard.styles';

export const Gameboard: React.FC = () => {
  const {
    state: { currentGame },
    dispatch
  } = useGameCenter();
  const navigate = useNavigate();

  const isGameGoing = useMemo(
    () => Boolean(currentGame && !currentGame.endDateMs),
    [currentGame]
  );

  const movesCount = useMemo(() => currentGame?.movesCount, [currentGame]);
  const startDateMs = useMemo(() => currentGame?.startDateMs, [currentGame]);
  const endDateMs = useMemo(() => currentGame?.endDateMs, [currentGame]);

  const startNewGame = useCallback(() => {
    dispatch({ type: 'createNewGame' });
  }, [dispatch]);

  const cancelCurrentGame = useCallback(() => {
    dispatch({ type: 'cancelCurrentGame' });
  }, [dispatch]);

  useEffect(() => {
    const isGameFinished = Boolean(currentGame && currentGame?.endDateMs);

    if (isGameFinished) {
      navigate('/game-over', { replace: true });
    }
  }, [currentGame, navigate]);

  return (
    <GameboardContainer>
      <GameboardActions
        isGameGoing={isGameGoing}
        startNewGame={startNewGame}
        cancelCurrentGame={cancelCurrentGame}
      />
      <CardsList />
      <GameScoresList
        movesCount={movesCount}
        startDateMs={startDateMs}
        endDateMs={endDateMs}
      />
    </GameboardContainer>
  );
};
