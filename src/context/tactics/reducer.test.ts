import { reducer, State } from "./reducer";
import {
  ADD_TACTIC_CARD_TO_ROSTER,
  SET_SELECTED_TACTIC_CARD,
  REMOVE_TACTIC_CARD_FROM_ROSTER
} from "./actions";
import { tacticCards } from "../../fixtures";

const defaultState: State = {
  availableTacticCards: tacticCards,
  selectedTacticCards: [],
  selectedTacticCard: null
};

describe("reducer", () => {
  it("returns the default state if no actions match", () => {
    const newState = reducer(defaultState, { type: "" });
    expect(newState.selectedTacticCards).toEqual([]);
  });

  it("adds a character to selected characters", () => {
    const action = {
      type: ADD_TACTIC_CARD_TO_ROSTER,
      payload: 1
    };
    const newState = reducer(defaultState, action);
    expect(newState.selectedTacticCards[0].id).toEqual(1);
  });

  it("removes a character from selected characters", () => {
    const state: State = {
      ...defaultState,
      availableTacticCards: tacticCards,
      selectedTacticCards: [tacticCards[0]]
    };
    const action = {
      type: REMOVE_TACTIC_CARD_FROM_ROSTER,
      payload: 1
    };
    const newState = reducer(state, action);
    expect(newState.selectedTacticCards.length).toEqual(0);
  });

  it("sets a selected character", () => {
    const action = {
      type: SET_SELECTED_TACTIC_CARD,
      payload: 1
    };
    const newState = reducer(defaultState, action);
    expect(newState.selectedTacticCard.id).toEqual(1);
  });
});
