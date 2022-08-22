import React from 'react';
import { Timer } from '../../../Timer';
import {
  GameScoresListContainer,
  GameScoresListItem,
  GameScoresListItemTitle,
  GameScoresListItemValue
} from './GameScoresList.styles';

type GameScoresListProps = {
  movesCount?: number;
  startDateMs?: number;
  endDateMs?: number | null;
};

export const GameScoresList: React.FC<GameScoresListProps> = ({
  movesCount,
  startDateMs,
  endDateMs
}) => {
  return (
    <GameScoresListContainer>
      <GameScoresListItem>
        <GameScoresListItemTitle>moves: </GameScoresListItemTitle>
        <GameScoresListItemValue>{movesCount ?? '-'}</GameScoresListItemValue>
      </GameScoresListItem>
      <GameScoresListItem>
        <GameScoresListItemValue>
          <Timer startDateMs={startDateMs} endDateMs={endDateMs} />
        </GameScoresListItemValue>
        <GameScoresListItemTitle> :time</GameScoresListItemTitle>
      </GameScoresListItem>
    </GameScoresListContainer>
  );
};
