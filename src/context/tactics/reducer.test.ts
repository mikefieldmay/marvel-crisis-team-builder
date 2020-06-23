import { reducer, State } from "./reducer";
import {
  ADD_TACTIC_CARD_TO_ROSTER,
  SET_SELECTED_TACTIC_CARD,
  REMOVE_TACTIC_CARD_FROM_ROSTER
} from "./actions";
import { characters } from "../../fixtures";

const defaultState: State = {
  availableCharacters: characters,
  selectedCharacters: [],
  selectedCharacter: null
};

describe("reducer", () => {
  it("returns the default state if no actions match", () => {
    const newState = reducer(defaultState, { type: "" });
    expect(newState.selectedCharacters).toEqual([]);
  });

  it("adds a character to selected characters", () => {
    const action = {
      type: ADD_TACTIC_CARD_TO_ROSTER,
      payload: 1
    };
    const newState = reducer(defaultState, action);
    expect(newState.selectedCharacters[0].id).toEqual(1);
  });

  it("removes a character from selected characters", () => {
    const state: State = {
      ...defaultState,
      availableCharacters: [],
      selectedCharacters: characters
    };
    const action = {
      type: REMOVE_TACTIC_CARD_FROM_ROSTER,
      payload: 1
    };
    const newState = reducer(state, action);
    expect(newState.availableCharacters[0].id).toEqual(1);
  });

  it("sets a selected character", () => {
    const action = {
      type: SET_SELECTED_TACTIC_CARD,
      payload: 1
    };
    const newState = reducer(defaultState, action);
    expect(newState.selectedCharacter.id).toEqual(1);
  });
});
