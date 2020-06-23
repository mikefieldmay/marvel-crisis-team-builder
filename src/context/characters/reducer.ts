import {
  ADD_CHARACTER_TO_ROSTER,
  SET_SELECTED_CHARACTER,
  REMOVE_CHARACTER_FROM_ROSTER,
  SORT_CHARACTERS
} from "./actions";
import { Character, InfinityGem } from "../../types";
import { characters } from "../../fixtures";

export interface Action {
  type: string;
  payload?: any;
}

export interface State {
  availableCharacters: (Character | InfinityGem)[];
  selectedCharacters: (Character | InfinityGem)[];
  selectedCharacter: Character | InfinityGem;
}

export const initialState: State = {
  availableCharacters: characters,
  selectedCharacters: [],
  selectedCharacter: null
};

const sortAvailableCharacters = (
  characters: (Character | InfinityGem)[],
  sortKey: string
) => {
  switch (sortKey) {
    case "threatLevel":
      return [...characters].sort((a, b) => b.threatLevel - a.threatLevel);
    case "id":
      return [...characters].sort((a, b) => a.id - b.id);
    default:
      return { ...characters };
  }
};

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
    case SORT_CHARACTERS:
      const sortedCharacters = sortAvailableCharacters(
        state.availableCharacters,
        action.payload
      );
      return {
        ...state,
        availableCharacters: sortedCharacters
      };
    default:
      return state;
  }
};
