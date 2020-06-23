import React from "react";

import {
  addCharacterToRoster,
  setSelectedCharacter,
  removeCharacter
} from "../../context/characters/actions";
import { Threat } from "../Icons/Threat";
import { Character } from "../../types";
import { useCrisisState } from "../../context/CrisisTeamContext";

import * as styles from "./styles.css";
import { AddOrRemoveButton } from "../AddOrRemoveButton/AddOrRemoveButton";

export const ListItem: React.FC<{
  character: Character;
}> = ({ character }) => {
  const {
    dispatch,
    state: {
      characterState: { selectedCharacters }
    }
  } = useCrisisState();

  const { name, threatLevel } = character;

  return (
    <li className={styles.ItemContainer}>
      <span className={styles.Threat}>
        <Threat />
      </span>
      <div
        className={styles.CharacterInfo}
        onClick={() => {
          dispatch(setSelectedCharacter(character.id));
        }}
      >
        <span className={[styles.Title, styles.ThreatLevel].join(" ")}>
          {threatLevel}
        </span>
        <h2 className={styles.Title}>{name}</h2>
      </div>
      <div className={styles.Triangle}></div>
      <AddOrRemoveButton
        item={character}
        comparisonList={selectedCharacters}
        addAction={addCharacterToRoster}
        removeAction={removeCharacter}
      />
    </li>
  );
};
