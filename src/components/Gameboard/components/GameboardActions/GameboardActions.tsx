import React from 'react';
import { ButtonLink } from '../../../ButtonLink';
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
      <ButtonLink to="/">← Menu</ButtonLink>
      <ButtonLink to="/cancel-game" disabled={!isGameGoing} variant="outlined">
        Cancel
      </ButtonLink>
    </GameboardActionsContainer>
  );
};
