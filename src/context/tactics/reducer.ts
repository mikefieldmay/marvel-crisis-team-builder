import {
  ADD_TACTIC_CARD_TO_ROSTER,
  SET_SELECTED_TACTIC_CARD,
  REMOVE_TACTIC_CARD_FROM_ROSTER,
  SORT_TACTIC_CARDS
} from "./actions";
import { TacticCard } from "../../types";
import { tacticCards } from "../../fixtures";

export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  availableTacticCards: TacticCard[];
  selectedTacticCards: TacticCard[];
  selectedTacticCard: TacticCard;
}

export const initialState: State = {
  availableTacticCards: tacticCards,
  selectedTacticCards: [],
  selectedTacticCard: null
};

// const sortAvailableCharacters = (
//   tacticCards: (TacticCard)[],
//   sortKey: string
// ) => {
//   switch (sortKey) {
//     case "threatLevel":
//       return [...tacticCards].sort((a, b) => b.threatLevel - a.threatLevel);
//     case "id":
//       return [...tacticCards].sort((a, b) => a.id - b.id);
//     default:
//       return { ...tacticCards };
//   }
// };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ADD_TACTIC_CARD_TO_ROSTER:
      const tacticCard = [...state.availableTacticCards].find(
        tacticCard => tacticCard.id === action.payload
      );
      return {
        ...state,
        selectedTacticCards: [...state.selectedTacticCards, tacticCard]
      };
    case REMOVE_TACTIC_CARD_FROM_ROSTER:
      const characterToRemove = [...state.selectedTacticCards].find(
        tacticCard => tacticCard.id === action.payload
      );
      const updatedSelectedCharacters = [...state.selectedTacticCards].filter(
        tacticCard => tacticCard.id !== action.payload
      );
      return {
        ...state,
        selectedTacticCards: updatedSelectedCharacters
      };
    case SET_SELECTED_TACTIC_CARD:
      const selectedTacticCard = [
        ...state.availableTacticCards,
        ...state.selectedTacticCards
      ].find(tacticCard => tacticCard.id === action.payload);
      return {
        ...state,
        selectedTacticCard: selectedTacticCard
      };
    // case SORT_TACTIC_CARDS:
    //   const sortedCharacters = sortAvailableCharacters(
    //     state.availableTacticCards,
    //     action.payload
    //   );
    //   return {
    //     ...state,
    //     availableTacticCards: sortedCharacters,
    //   };
    default:
      return state;
  }
};
