import React from 'react';
import { Button } from '../../../Button';
import { GameboardActionsContainer } from './GameboardActions.styles';

type GameboardActionsProps = {
  isGameGoing: boolean;
  startNewGame: () => void;
  cancelCurrentGame: () => void;
};

export const GameboardActions: React.FC<GameboardActionsProps> = ({
  isGameGoing,
  startNewGame,
  cancelCurrentGame
}) => {
  return (
    <GameboardActionsContainer>
      <Button onClick={startNewGame} disabled={isGameGoing}>
        New
      </Button>
      <Button
        onClick={cancelCurrentGame}
        disabled={!isGameGoing}
        variant="outlined"
      >
        Cancel
      </Button>
    </GameboardActionsContainer>
  );
};
