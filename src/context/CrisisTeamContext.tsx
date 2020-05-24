import React, { createContext, useContext, useReducer } from "react";

import { State } from "./reducer";
import { characters } from "../fixtures";

const initialState: State = {
  availableCharacters: characters,
  selectedCharacters: []
};

export const CrisisContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

export const CrisisProvider = ({
  reducer,
  children
}: {
  reducer: any;
  children: JSX.Element;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CrisisContext.Provider value={{ state, dispatch }}>
      {children}
    </CrisisContext.Provider>
  );
};

export const useStateValue = () => useContext(CrisisContext);
