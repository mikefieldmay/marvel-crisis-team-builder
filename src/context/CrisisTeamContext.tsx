import React, { createContext, useContext, useReducer } from "react";

export interface CrisisTeamContext {
  selectedHeroes: string[];
}

export const defaultContext: CrisisTeamContext = {
  selectedHeroes: []
};


export const CrisisContext = createContext<CrisisTeamContext>(defaultContext);

export const CrisisProvider = ({ reducer, initialState, children }: {reducer: any, initialState: CrisisTeamContext, children: JSX.Element}) => (
  <CrisisContext.Provider value={useReducer<any>(reducer, initialState) as any}>
    {children}
  </CrisisContext.Provider>
);

export const useStateValue = () => useContext(CrisisContext);
