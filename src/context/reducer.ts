import {
  ADD_CHARACTER_TO_ROSTER,
  SET_SELECTED_CHARACTER,
  REMOVE_CHARACTER_FROM_ROSTER
} from "./actions";
import { Character } from "../types";

export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  availableCharacters: Character[];
  selectedCharacters: Character[];
  selectedCharacter: Character;
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
    case REMOVE_CHARACTER_FROM_ROSTER:
      const characterToRemove = [...state.selectedCharacters].find(
        character => character.id === action.payload
      );
      const updatedSelectedCharacters = [...state.selectedCharacters].filter(
        character => character.id !== action.payload
      );
      return {
        ...state,
        availableCharacters: [...state.availableCharacters, characterToRemove],
        selectedCharacters: updatedSelectedCharacters
      };
    case SET_SELECTED_CHARACTER:
      const selectedCharacter = [
        ...state.availableCharacters,
        ...state.selectedCharacters
      ].find(character => character.id === action.payload);
      return {
        ...state,
        selectedCharacter: selectedCharacter
      };
    default:
      return state;
  }
};
