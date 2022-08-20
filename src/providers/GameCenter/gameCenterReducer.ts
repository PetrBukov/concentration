import { CARDS_LIST } from '../../consttants';
import { Card } from '../../types/card';
import {
  doubleCardsList,
  shuffleArray,
  transformCardsListToMap
} from '../../utils';
import { GameCenterAction, GameCenterState } from './GameCenter.types';

export const gameCenterReducer = (
  state: GameCenterState,
  action: GameCenterAction
): GameCenterState => {
  switch (action.type) {
    case 'createNewGame': {
      // To debug code while developing - manually set debugMode to "true" in the localStorage
      const isDebugMode = Boolean(localStorage.getItem('debugMode'));

      const doubledCardsList = isDebugMode
        ? doubleCardsList(CARDS_LIST)
        : shuffleArray<Card>(doubleCardsList(CARDS_LIST));

      return {
        ...state,
        currentGame: {
          cardsList: doubledCardsList,
          cardsMap: transformCardsListToMap(doubledCardsList),
          selectedCardIDs: new Set(),
          resolvedCardIDs: new Set(),
          movesCount: 0,
          startDateMs: Date.now(),
          endDateMs: null
        }
      };
    }

    case 'selectCard': {
      console.log('selectCard', { state, action });
      if (!state.currentGame) {
        return state;
      }

      if (state.currentGame.selectedCardIDs.size >= 2) {
        return state;
      }

      const newSelectedCardIDs = new Set(state.currentGame.selectedCardIDs);
      newSelectedCardIDs.add(action.cardID);

      return {
        ...state,
        currentGame: {
          ...state.currentGame,
          selectedCardIDs: newSelectedCardIDs
        }
      };
    }

    case 'checkCurrentGameTurn': {
      if (!state.currentGame || state.currentGame.selectedCardIDs.size < 2) {
        return state;
      }

      const {
        currentGame: {
          cardsList,
          cardsMap,
          selectedCardIDs: [cardID1, cardID2],
          resolvedCardIDs
        }
      } = state;

      const shouldResolveSelectedCards =
        cardsMap.get(cardID1)?.title === cardsMap.get(cardID2)?.title;
      const newResolvedCards = shouldResolveSelectedCards
        ? new Set(resolvedCardIDs).add(cardID1).add(cardID2)
        : resolvedCardIDs;

      const isGameRoundFinished = cardsList.length === newResolvedCards.size;

      return {
        ...state,
        currentGame: {
          ...state.currentGame,
          resolvedCardIDs: newResolvedCards,
          selectedCardIDs: new Set(),
          movesCount: state.currentGame.movesCount + 1,
          endDateMs: isGameRoundFinished ? Date.now() : null
        }
      };
    }

    case 'cancelCurrentGame': {
      return {
        ...state,
        currentGame: null
      };
    }

    default: {
      // @ts-ignore
      // TypeScript thinks that "Property 'type' does not exist on type 'never'"
      // but you and I know that in a real world everything is possible
      // so let's leave here some meaningful error for future us
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
