import React, { createContext } from "react";

interface CrisisTeamContext {
  selectedHeroes: string[];
}

const defaultContext: CrisisTeamContext = {
  selectedHeroes: []
};

const CrisisTeamContext = createContext<CrisisTeamContext>(defaultContext);

export const CrisisTeam: React.FC<{initialValues: CrisisTeamContext | undefined}> = ({ children, initialValues }) => {

  return (
    <CrisisTeamContext.Provider value={initialValues || defaultContext}>
      {children}
    </CrisisTeamContext.Provider>
  );
};
