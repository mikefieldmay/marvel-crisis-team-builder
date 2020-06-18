import React from "react";

import {
  addCharacterToRoster,
  setSelectedCharacter,
  removeCharacter
} from "../../context/actions";
import { Threat } from "../Icons/Threat";
import { Character, InfinityGem } from "../../types";
import { useCrisisState } from "../../context/CrisisTeamContext";

import * as styles from "./styles.css";

const isCharacter = (
  characterOrGem: Character | InfinityGem
): characterOrGem is Character =>
  (characterOrGem as Character) ? true : false;

const getAvailableGems = (
  character: Character,
  availableCharacters: (Character | InfinityGem)[]
) => {
  return character.gemBearer
    ? character.gemBearer.map(gem => {
        const infinityGem = [...availableCharacters].find(character => {
          return gem === character.name;
        });
        console.log(gem);
        console.log(infinityGem);
        if (infinityGem) return infinityGem;
      })
    : [];
};

export const ListItem: React.FC<{
  character: Character | InfinityGem;
}> = ({ character }) => {
  const {
    dispatch,
    state: { availableCharacters }
  } = useCrisisState();

  const { id, name, threatLevel } = character;

  console.log(character);

  const isSelected = () => {
    return availableCharacters.find(
      availableCharacter => availableCharacter.id === character.id
    )
      ? false
      : true;
  };

  const onButtonClick = () => {
    dispatch(isSelected() ? removeCharacter(id) : addCharacterToRoster(id));
  };

  return (
    <li className={styles.ListContainer}>
      <div className={styles.ItemContainer}>
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
      </div>
      {isSelected() && isCharacter(character) && (
        <ol className={styles.GemList}>
          {getAvailableGems(character, availableCharacters).map(gem => (
            <li className={styles.GemItem}>
              <div className={styles.ItemContainer}>
                <span className={styles.Threat}>
                  <Threat />
                </span>
                <div
                  className={styles.CharacterInfo}
                  onClick={() => {
                    dispatch(setSelectedCharacter(gem.id));
                  }}
                >
                  <span
                    className={[styles.Title, styles.ThreatLevel].join(" ")}
                  >
                    {gem.threatLevel}
                  </span>
                  <h2 className={styles.Title}>{gem.name}</h2>
                </div>
                <div className={styles.Triangle}></div>
                <button className={styles.SelectButton} onClick={onButtonClick}>
                  {isSelected() ? "-" : "+"}
                </button>
              </div>
            </li>
          ))}
        </ol>
      )}
    </li>
  );
};
