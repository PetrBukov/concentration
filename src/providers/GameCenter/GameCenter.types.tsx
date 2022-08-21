import { CardID } from '../../types/card';
import { Game, GameHistoryItem } from '../../types/game';

export type GameCenterAction =
  | { type: 'createNewGame' }
  | { type: 'selectCard'; cardID: CardID }
  | { type: 'checkCurrentGameTurn' }
  | { type: 'cancelCurrentGame' };

export type GameCenterDispatch = (action: GameCenterAction) => void;

export type GameCenterState = {
  history: Array<GameHistoryItem>;
  currentGame: Game | null;
};
