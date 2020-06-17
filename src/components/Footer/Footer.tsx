import React from "react";
import styles from "./styles.css";

export const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <p className={styles.Copyright}>
        This site is not endorsed or affiliated by Marvel or Atomic Mass games ©
        2020 MARVEL © Atomic Mass Games
      </p>
    </div>
  );
};
