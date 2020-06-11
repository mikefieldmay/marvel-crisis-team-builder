import React, { createContext, useContext, useReducer } from "react";

import { reducer, State } from "./reducer";
import { characters } from "../fixtures";

const initialState: State = {
  availableCharacters: characters,
  selectedCharacters: [],
  selectedCharacter: null
};

export const CrisisContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

export const CrisisProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CrisisContext.Provider value={{ state, dispatch }}>
      {children}
    </CrisisContext.Provider>
  );
};

export const useCrisisState = () => useContext(CrisisContext);
