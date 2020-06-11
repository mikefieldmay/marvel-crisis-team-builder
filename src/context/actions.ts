export const ADD_CHARACTER_TO_ROSTER: "ADD_CHARACTER_TO_ROSTER" =
  "ADD_CHARACTER_TO_ROSTER";
export const REMOVE_CHARACTER_FROM_ROSTER: "REMOVE_CHARACTER_FROM_ROSTER" =
  "REMOVE_CHARACTER_FROM_ROSTER";
export const SET_SELECTED_CHARACTER: "SET_SELECTED_CHARACTER" =
  "SET_SELECTED_CHARACTER";

export const removeCharacter = (id: number) => ({
  type: REMOVE_CHARACTER_FROM_ROSTER,
  payload: id
});

export const addCharacterToRoster = (id: number) => ({
  type: ADD_CHARACTER_TO_ROSTER,
  payload: id
});

export const setSelectedCharacter = (id: number) => ({
  type: SET_SELECTED_CHARACTER,
  payload: id
});
