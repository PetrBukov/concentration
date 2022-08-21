import { Game, GameHistoryItem } from '../types/game';

export const createGameHistoryItem = (currentGame: Game): GameHistoryItem => {
  if (!currentGame.endDateMs) {
    throw new Error(
      `GameHistoryItem could be created only based on finished Game`
    );
  }

  const gameTimeMs = currentGame.endDateMs - currentGame.startDateMs;
  return {
    gameTimeMs,
    movesCount: currentGame.movesCount
  };
};
