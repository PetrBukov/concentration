import { CardID } from '../../types/card';
import { Game } from '../../types/game';

export type GameCenterAction =
  | { type: 'createNewGame' }
  | { type: 'selectCard'; cardID: CardID }
  | { type: 'checkCurrentGameTurn' }
  | { type: 'cancelCurrentGame' };

export type GameCenterDispatch = (action: GameCenterAction) => void;

export type GameCenterState = {
  currentGame: Game | null;
};
