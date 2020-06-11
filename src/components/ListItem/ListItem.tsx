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
  selected?: boolean;
}> = ({ character, selected = false }) => {
  const { dispatch } = useCrisisState();

  const { id, name, threatLevel } = character;

  const onButtonClick = () => {
    dispatch(selected ? removeCharacter(id) : addCharacterToRoster(id));
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
        <h2 className={styles.Title}>{name.slice(0, 15)}</h2>
      </div>
      <div className={styles.Triangle}></div>
      <button onClick={onButtonClick}>{selected ? "Remove" : "Add"}</button>
    </li>
  );
};
