import React, { useState } from "react";

import { characters } from "./fixtures/characters";
import { ListItem } from "../ListItem/ListItem";
import { SectionHeading } from "../SectionHeading/SectionHeading";

import * as styles from "./styles.css";

export const CharacterList: React.FC = () => {
  const [charactersShowing, setCharactersShowing] = useState(true);
  const characterList = characters.map(({ name, id }) => (
    <ListItem key={id} title={name} />
  ));
  return (
    <>
      <SectionHeading
        title="Characters"
        onClick={() => setCharactersShowing(!charactersShowing)}
        sectionShowing={charactersShowing}
      />
      <div className={styles.CharacterContainer}>
        {charactersShowing && (
          <ol className={styles.CharacterListContainer}>{characterList}</ol>
        )}
      </div>
    </>
  );
};
