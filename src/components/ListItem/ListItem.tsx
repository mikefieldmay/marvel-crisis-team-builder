import React from "react";

import * as styles from "./styles.css";
import { Threat } from "../Icons/Threat";

export const ListItem: React.FC<{ title: string }> = ({ title }) => {
  return (
    <li className={styles.ItemContainer}>
      <span className={styles.Threat}>
        <Threat />
      </span>
      <div className={styles.CharacterInfo}>
        <span className={[styles.Title, , styles.ThreatLevel].join(" ")}>
          4
        </span>
        <h2 className={styles.Title}>{title}</h2>
      </div>
    </li>
  );
};
