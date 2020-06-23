import React from "react";
import styles from "./styles.css";

export const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <p className={styles.Copyright}>
        This site is not endorsed by, or affiliated with Marvel or Atomic Mass
        games. All © 2020 MARVEL © Atomic Mass Games
      </p>
    </div>
  );
};
