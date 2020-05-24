import React, { useState } from "react";

import { Character } from "../../types";
import { ListItem } from "../ListItem/ListItem";
import { SectionHeading } from "../SectionHeading/SectionHeading";

import * as styles from "./styles.css";
import { useStateValue } from "../../context/CrisisTeamContext";

export const CharacterList: React.FC = () => {
  const [charactersShowing, setCharactersShowing] = useState(true);
  const {
    state: { selectedCharacters, availableCharacters }
  } = useStateValue();
  return (
    <>
      <SectionHeading
        title="Characters"
        onClick={() => setCharactersShowing(!charactersShowing)}
        sectionShowing={charactersShowing}
      />
      <div className={styles.CharacterContainer}>
        {charactersShowing && (
          <>
            <ol className={styles.CharacterListContainer}>
              {availableCharacters.map((character: Character) => (
                <ListItem key={character.id} character={character} />
              ))}
            </ol>
            <div />
            <ol className={styles.CharacterListContainer}>
              {selectedCharacters.map((character: Character) => (
                <ListItem key={character.id} character={character} />
              ))}
            </ol>
          </>
        )}
      </div>
    </>
  );
};
