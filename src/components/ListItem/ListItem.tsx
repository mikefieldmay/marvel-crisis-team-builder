import React from "react";

import {
  addCharacterToRoster,
  setSelectedCharacter,
  removeCharacter
} from "../../context/actions";
import { Threat } from "../Icons/Threat";
import { Character } from "../../types";
import { useCrisisState } from "../../context/CrisisTeamContext";

import * as styles from "./styles.css";

export const ListItem: React.FC<{
  character: Character;
}> = ({ character }) => {
  const {
    dispatch,
    state: { selectedCharacters }
  } = useCrisisState();

  const { id, name, threatLevel } = character;

  const isSelected = () => {
    return selectedCharacters.find(
      availableCharacter => availableCharacter.id === character.id
    );
  };

  const onButtonClick = () => {
    dispatch(isSelected() ? removeCharacter(id) : addCharacterToRoster(id));
  };

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
      <button className={styles.SelectButton} onClick={onButtonClick}>
        {isSelected() ? "-" : "+"}
      </button>
    </li>
  );
};
