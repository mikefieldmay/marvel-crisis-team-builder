import { reducer, State } from "./reducer";
import {
  ADD_CHARACTER_TO_ROSTER,
  SET_SELECTED_CHARACTER,
  REMOVE_CHARACTER_FROM_ROSTER
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
      type: ADD_CHARACTER_TO_ROSTER,
      payload: 1
    };
    const newState = reducer(defaultState, action);
    expect(newState.selectedCharacters[0].id).toEqual(1);
  });

  it("removes a character from selected characters", () => {
    const state: State = {
      ...defaultState,
      availableCharacters: characters,
      selectedCharacters: [characters[0]]
    };
    const action = {
      type: REMOVE_CHARACTER_FROM_ROSTER,
      payload: 1
    };
    const newState = reducer(state, action);
    expect(newState.selectedCharacters.length).toEqual(0);
  });

  it("sets a selected character", () => {
    const action = {
      type: SET_SELECTED_CHARACTER,
      payload: 1
    };
    const newState = reducer(defaultState, action);
    expect(newState.selectedCharacter.id).toEqual(1);
  });
});
