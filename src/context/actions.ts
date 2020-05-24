import { Character } from "../types";

export const ADD_CHARACTER_TO_ROSTER = "ADD_CHARACTER_TO_ROSTER";

export const addCharacterToRoster = (id: number) => ({
  type: ADD_CHARACTER_TO_ROSTER,
  payload: id
});
