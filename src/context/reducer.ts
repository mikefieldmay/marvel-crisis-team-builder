import { ADD_CHARACTER_TO_ROSTER } from "./actions";
import { CrisisTeamContext } from "./CrisisTeamContext";

interface Action {
  type: string
  payload?: any
}

export const defaultState: CrisisTeamContext = {
  selectedHeroes: []
}

export const reducer = (state: CrisisTeamContext, action: Action) => {
  switch (action.type) {
    case ADD_CHARACTER_TO_ROSTER:
      return {
        ...state,
        selectedHeroes: [...state.selectedHeroes, action.payload]
      }
    default:
      return state;
    }
};