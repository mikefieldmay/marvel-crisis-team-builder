import React from "react";

import { characters } from "./fixtures/characters";
import { ListItem } from "../ListItem/ListItem";

import * as styles from "./styles.css";

export const CharacterList: React.FC = () => {
  const characterList = characters.map(({ name, id }) => (
    <ListItem key={id} title={name} />
  ));
  return <ol className={styles.CharacterListContainer}>{characterList}</ol>;
};
