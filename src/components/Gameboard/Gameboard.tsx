import React, { useCallback, useMemo } from 'react';

import { useGameCenter } from '../../providers';
import {
  GameOverInfo,
  GameScoresList,
  GameboardActions,
  CardsList
} from './components';
import { GameboardContainer } from './Gameboard.styles';

export const Gameboard: React.FC = () => {
  const {
    state: { currentGame },
    dispatch
  } = useGameCenter();

  const isGameGoing = useMemo(
    () => Boolean(currentGame && !currentGame.endDateMs),
    [currentGame]
  );

  const movesCount = useMemo(() => currentGame?.movesCount, [currentGame]);
  const startDateMs = useMemo(() => currentGame?.startDateMs, [currentGame]);
  const endDateMs = useMemo(() => currentGame?.endDateMs, [currentGame]);
  const gameTimeMs = useMemo(() => {
    return endDateMs ? endDateMs - Number(startDateMs) : 0;
  }, [endDateMs, startDateMs]);

  const startNewGame = useCallback(() => {
    dispatch({ type: 'createNewGame' });
  }, [dispatch]);

  const cancelCurrentGame = useCallback(() => {
    dispatch({ type: 'cancelCurrentGame' });
  }, [dispatch]);

  return (
    <GameboardContainer>
      <GameboardActions
        isGameGoing={isGameGoing}
        startNewGame={startNewGame}
        cancelCurrentGame={cancelCurrentGame}
      />
      {(function () {
        if (isGameGoing) {
          return <CardsList />;
        }

        if (currentGame) {
          return (
            <GameOverInfo
              movesCount={currentGame.movesCount}
              gameTimeMs={gameTimeMs}
            />
          );
        }

        return <div />;
      })()}
      <GameScoresList
        movesCount={movesCount}
        startDateMs={startDateMs}
        endDateMs={endDateMs}
      />
    </GameboardContainer>
  );
};
