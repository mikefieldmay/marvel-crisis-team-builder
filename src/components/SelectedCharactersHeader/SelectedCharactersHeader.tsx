import React from "react";
import styles from "./styles.css";
import { useCrisisState } from "../../context/CrisisTeamContext";

export const SelectedCharactersHeader = () => {
  const {
    state: { selectedCharacters, availableCharacters }
  } = useCrisisState();
  return (
    <div className={styles.HeaderContainer}>
      <h1
        className={[
          styles.CharacterNumber,
          selectedCharacters.length > 10 ? styles.Warning : ""
        ].join(" ")}
      >
        {selectedCharacters.length}/10
      </h1>
    </div>
  );
};
