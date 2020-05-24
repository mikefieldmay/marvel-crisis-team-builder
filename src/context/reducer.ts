import { ADD_CHARACTER_TO_ROSTER } from "./actions";
import { Character } from "../types";

export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  availableCharacters: Character[];
  selectedCharacters: Character[];
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ADD_CHARACTER_TO_ROSTER:
      const character = [...state.availableCharacters].find(
        character => character.id === action.payload
      );
      const updatedAvailableCharacters = [...state.availableCharacters].filter(
        character => character.id !== action.payload
      );
      return {
        ...state,
        availableCharacters: updatedAvailableCharacters,
        selectedCharacters: [...state.selectedCharacters, character]
      };
    default:
      return state;
  }
};
