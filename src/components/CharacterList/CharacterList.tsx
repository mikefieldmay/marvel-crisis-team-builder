import React, { useState } from "react";

import { Character } from "../../types";
import { ListItem } from "../ListItem/ListItem";
import { SectionHeading } from "../SectionHeading/SectionHeading";

import { useCrisisState } from "../../context/CrisisTeamContext";
import { CharacterImage } from "../CharacterImage/CharacterImage";
import { SelectedCharactersHeader } from "../SelectedCharactersHeader/SelectedCharactersHeader";
import * as styles from "./styles.css";

const sortByThreat = (characters: Character[]) =>
  characters.sort((a, b) => b.threatLevel - a.threatLevel);

export const CharacterList: React.FC = () => {
  const {
    state: { selectedCharacters, availableCharacters }
  } = useCrisisState();
  const [charactersShowing, setCharactersShowing] = useState(true);
  const [sortedCharacters, setSortedCharacters] = useState(
    sortByThreat(availableCharacters)
  );

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = event.target.value;
    switch (filter) {
      case "threatLevel":
        setSortedCharacters(sortByThreat([...sortedCharacters]));
      default:
        return;
    }
  };

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
            <div>
              <div className={styles.ListFilter}>
                <h1 className={styles.FilterTitle}>Sort By: </h1>
                <select
                  className={styles.Select}
                  onChange={handleSortChange}
                  name="sort"
                >
                  <option className={styles.Option} value="threatLevel">
                    Threat Level
                  </option>
                </select>
              </div>
              <ol className={styles.CharacterListContainer}>
                {sortedCharacters.map((character: Character) => (
                  <ListItem key={character.id} character={character} />
                ))}
              </ol>
            </div>
            <CharacterImage />
            <div>
              <SelectedCharactersHeader />
              <ol className={styles.CharacterListContainer}>
                {selectedCharacters.map((character: Character) => (
                  <ListItem selected key={character.id} character={character} />
                ))}
              </ol>
            </div>
          </>
        )}
      </div>
    </>
  );
};
