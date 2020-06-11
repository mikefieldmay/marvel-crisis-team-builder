import {
  addCharacterToRoster,
  ADD_CHARACTER_TO_ROSTER,
  setSelectedCharacter,
  SET_SELECTED_CHARACTER,
  removeCharacter,
  REMOVE_CHARACTER_FROM_ROSTER
} from "./actions";

describe("actions", () => {
  it("adds a character from the roster", () => {
    const characterId = 1;
    const addHeroAction = addCharacterToRoster(characterId);
    expect(addHeroAction.type).toBe(ADD_CHARACTER_TO_ROSTER);
    expect(addHeroAction.payload).toBe(characterId);
  });

  it("removes a character from the roster", () => {
    const characterId = 1;
    const removeHeroAction = removeCharacter(characterId);
    expect(removeHeroAction.type).toBe(REMOVE_CHARACTER_FROM_ROSTER);
    expect(removeHeroAction.payload).toBe(characterId);
  });

  it("sets the selected character", () => {
    const characterId = 1;
    const selectCharacterAction = setSelectedCharacter(characterId);
    expect(selectCharacterAction.type).toBe(SET_SELECTED_CHARACTER);
    expect(selectCharacterAction.payload).toBe(characterId);
  });
});
