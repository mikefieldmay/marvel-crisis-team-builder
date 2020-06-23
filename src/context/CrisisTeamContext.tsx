import React, { createContext, useContext, useReducer } from "react";

import {
  reducer as characterReducer,
  State as CharacterState,
  initialState as initialCharacterState
} from "./characters/reducer";
import {
  reducer as tacticCardsReducer,
  State as TacticCardState,
  initialState as initialTacticCardState
} from "./tactics/reducer";

interface State {
  characterState: CharacterState;
  tacticCardState: TacticCardState;
}

const initialState: State = {
  characterState: initialCharacterState,
  tacticCardState: initialTacticCardState
};

export const CrisisContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

export const CrisisProvider = ({ children }: { children: JSX.Element }) => {
  const [characterState, characterDispatch] = useReducer(
    characterReducer,
    initialCharacterState
  );

  const [tacticCardState, tacticCardDispatch] = useReducer(
    tacticCardsReducer,
    initialTacticCardState
  );

  const dispatchActions = [characterDispatch, tacticCardDispatch];

  const dispatch = (arg: any) =>
    dispatchActions.map(dispatchAction => dispatchAction(arg));

  const state = {
    characterState,
    tacticCardState
  };

  return (
    <CrisisContext.Provider value={{ state, dispatch }}>
      {children}
    </CrisisContext.Provider>
  );
};

export const useCrisisState = () => useContext(CrisisContext);
