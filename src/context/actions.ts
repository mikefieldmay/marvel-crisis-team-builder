export const ADD_CHARACTER_TO_ROSTER = 'ADD_CHARACTER_TO_ROSTER'

export const addCharacterToRoster = (query: string) => ({
  type: ADD_CHARACTER_TO_ROSTER,
  payload: query
})