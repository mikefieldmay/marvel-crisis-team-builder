import { addCharacterToRoster, ADD_CHARACTER_TO_ROSTER } from './actions'

describe("actions", () => {
  it("adds a character to the list", () => {
    const characterName = "captain America"
    const addHeroQuery = addCharacterToRoster(characterName)
    expect(addHeroQuery.type).toBe(ADD_CHARACTER_TO_ROSTER)
    expect(addHeroQuery.payload).toBe(characterName)
  })
})