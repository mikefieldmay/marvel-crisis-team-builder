import {
  addTacticCardToRoster,
  ADD_TACTIC_CARD_TO_ROSTER,
  REMOVE_TACTIC_CARD_FROM_ROSTER,
  removeTacticCard,
  SET_SELECTED_TACTIC_CARD,
  setSelectedTacticCard,
  sortTacticCards,
  SORT_TACTIC_CARDS
} from "./actions";

describe("actions", () => {
  it("adds a tactic card to the roster", () => {
    const tacticCardId = 1;
    const addTacticCard = addTacticCardToRoster(tacticCardId);
    expect(addTacticCard.type).toBe(ADD_TACTIC_CARD_TO_ROSTER);
    expect(addTacticCard.payload).toBe(tacticCardId);
  });

  it("removes a tactic card from the roster", () => {
    const tacticCardId = 1;
    const removeCardAction = removeTacticCard(tacticCardId);
    expect(removeCardAction.type).toBe(REMOVE_TACTIC_CARD_FROM_ROSTER);
    expect(removeCardAction.payload).toBe(tacticCardId);
  });

  it("sets the selected tactic card", () => {
    const tacticCardId = 1;
    const selectCardAction = setSelectedTacticCard(tacticCardId);
    expect(selectCardAction.type).toBe(SET_SELECTED_TACTIC_CARD);
    expect(selectCardAction.payload).toBe(tacticCardId);
  });

  it("sorts characters by key", () => {
    const sortKey = "threatLevel";
    const sortCardsAction = sortTacticCards(sortKey);
    expect(sortCardsAction.type).toBe(SORT_TACTIC_CARDS);
    expect(sortCardsAction.payload).toBe(sortKey);
  });
});
