import React from "react";

import * as styles from "./styles.css";
import { Minus, Plus } from "../Icons";

export const SectionHeading: React.FC<{
  onClick: () => void;
  sectionShowing: boolean;
  title: string;
}> = ({ onClick, sectionShowing, title }) => {
  return (
    <div className={styles.HeadingContainer} onClick={onClick}>
      <h1 className={styles.HeadingTitle}>{title}</h1>
      <span className={styles.Sign}>
        {sectionShowing ? <Minus /> : <Plus />}
      </span>
    </div>
  );
};
