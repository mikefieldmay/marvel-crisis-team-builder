import React, { useState } from "react";

import { Character, InfinityGem, TacticCard } from "../../types";
import { ListItem } from "../ListItem/ListItem";
import { SectionHeading } from "../SectionHeading/SectionHeading";

import { useCrisisState } from "../../context/CrisisTeamContext";
import { CharacterImage } from "../CharacterImage/CharacterImage";
import { SelectedCharactersHeader } from "../SelectedCharactersHeader/SelectedCharactersHeader";
import { sortCharacters } from "../../context/characters/actions";
import * as styles from "./styles.css";

export const TacticCardList: React.FC = () => {
  const {
    state: {
      tacticCardState: { selectedTacticCards, availableTacticCards }
    },
    dispatch
  } = useCrisisState();
  const [charactersShowing, setCharactersShowing] = useState(true);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(sortCharacters(event.target.value));

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
                  <option className={styles.Option} value="id">
                    Default
                  </option>
                  <option className={styles.Option} value="threatLevel">
                    Threat Level
                  </option>
                </select>
              </div>
              <ol
                className={[
                  styles.CharacterListContainer,
                  styles.AvalaibleCharacterContainer
                ].join(" ")}
              >
                {availableTacticCards.map((tacticCard: TacticCard) => (
                  <h1>{tacticCard.name}</h1>
                ))}
              </ol>
            </div>
            <CharacterImage />
            <div>
              <SelectedCharactersHeader />
              <ol className={styles.CharacterListContainer}>
                {selectedTacticCards.map((tacticCard: TacticCard) => (
                  <h1>{tacticCard.name}</h1>
                  // <ListItem key={tacticCard.id} character={tacticCard} />
                ))}
              </ol>
            </div>
          </>
        )}
      </div>
    </>
  );
};
