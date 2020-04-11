import { reducer, defaultState } from './reducer'
import { ADD_CHARACTER_TO_ROSTER } from './actions'

describe("reducer", () => {
  it("returns the default state if no actions match", () => {
    const newState = reducer(defaultState, {type: ""})
    expect(newState.selectedHeroes).toEqual([])
  })

  it("adds a hero to selected heroes", () => {
    const action = {
      type: ADD_CHARACTER_TO_ROSTER,
      payload: "Captain America"
    }
    const newState = reducer(defaultState, action)
    expect(newState.selectedHeroes).toEqual(["Captain America"])
  })
})