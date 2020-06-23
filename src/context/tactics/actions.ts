export const ADD_TACTIC_CARD_TO_ROSTER: "ADD_TACTIC_CARD_TO_ROSTER" =
  "ADD_TACTIC_CARD_TO_ROSTER";
export const REMOVE_TACTIC_CARD_FROM_ROSTER: "REMOVE_TACTIC_CARD_FROM_ROSTER" =
  "REMOVE_TACTIC_CARD_FROM_ROSTER";
export const SET_SELECTED_TACTIC_CARD: "SET_SELECTED_TACTIC_CARD" =
  "SET_SELECTED_TACTIC_CARD";
export const SORT_TACTIC_CARDS: "SORT_TACTIC_CARDS" = "SORT_TACTIC_CARDS";

export const removeTacticCard = (id: number) => ({
  type: REMOVE_TACTIC_CARD_FROM_ROSTER,
  payload: id
});

export const addTacticCardToRoster = (id: number) => ({
  type: ADD_TACTIC_CARD_TO_ROSTER,
  payload: id
});

export const setSelectedTacticCard = (id: number) => ({
  type: SET_SELECTED_TACTIC_CARD,
  payload: id
});

export const sortTacticCards = (key: string) => ({
  type: SORT_TACTIC_CARDS,
  payload: key
});
