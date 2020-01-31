import React from "react";

import * as styles from "./styles.css";

export const ListItem: React.FC<{ title: string }> = ({ title }) => {
  return (
    <li className={styles.ItemContainer}>
      <h2 className={styles.Title}>{title}</h2>
    </li>
  );
};
