import { addCharacterToRoster, ADD_CHARACTER_TO_ROSTER } from "./actions";

describe("actions", () => {
  it("adds a character to the list", () => {
    const characterName = 1;
    const addHeroQuery = addCharacterToRoster(1);
    expect(addHeroQuery.type).toBe(ADD_CHARACTER_TO_ROSTER);
    expect(addHeroQuery.payload).toBe(1);
  });
});
