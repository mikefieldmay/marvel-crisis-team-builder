import React, { useState } from "react";

import { addCharacterToRoster } from "../../context/actions";
import { Threat } from "../Icons/Threat";
import { Character } from "../../types";
import { useStateValue } from "../../context/CrisisTeamContext";

import * as styles from "./styles.css";

export const ListItem: React.FC<{ character: Character }> = ({ character }) => {
  const {
    state: { selectedCharacters },
    dispatch
  } = useStateValue();

  const [selected, setSelected] = useState<boolean>(false);

  const { name, threatLevel } = character;

  return (
    <li className={styles.ItemContainer}>
      <span className={styles.Threat}>
        <Threat />
      </span>
      <div
        className={styles.CharacterInfo}
        onClick={() => {
          setSelected(!selected);
          dispatch(addCharacterToRoster(character.id));
        }}
      >
        <span className={[styles.Title, styles.ThreatLevel].join(" ")}>
          {threatLevel}
        </span>
        <h2 className={styles.Title}>{name}</h2>
      </div>
      <div className={styles.Triangle}></div>
    </li>
  );
};
