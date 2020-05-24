import { reducer, State } from "./reducer";
import { ADD_CHARACTER_TO_ROSTER } from "./actions";

const defaultState: State = {
  availableCharacters: [],
  selectedCharacters: []
};

describe("reducer", () => {
  it("returns the default state if no actions match", () => {
    const newState = reducer(defaultState, { type: "" });
    expect(newState.selectedCharacters).toEqual([]);
  });

  it("adds a hero to selected heroes", () => {
    const action = {
      type: ADD_CHARACTER_TO_ROSTER,
      payload: "Captain America"
    };
    const newState = reducer(defaultState, action);
    expect(newState.selectedCharacters).toEqual(["Captain America"]);
  });
});
