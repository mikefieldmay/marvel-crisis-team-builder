import React, { useEffect, useState } from "react";
import { useCrisisState } from "../../context/CrisisTeamContext";
import styles from "./styles.css";
import { Loading } from "../Icons/Loading";
import { Flip } from "../Icons/Flip";

export const CharacterImage = () => {
  const {
    state: { selectedCharacter }
  } = useCrisisState();
  const [imageLoading, setImageLoading] = useState(true);
  const [injuredSide, setInjuredSide] = useState(false);

  useEffect(() => {
    setImageLoading(true);
    setInjuredSide(false);
  }, [selectedCharacter]);

  if (!selectedCharacter) return <div />;

  return (
    <div className={styles.ImageContainer}>
      {imageLoading && (
        <div className={styles.LoadingContainer}>
          <Loading />
        </div>
      )}
      <button
        title={`Flip to ${injuredSide ? "Healthy" : "Injured"}`}
        onClick={() => {
          setInjuredSide(!injuredSide);
          setImageLoading(true);
        }}
        className={styles.IconContainer}
      >
        <Flip />
      </button>
      <img
        onLoad={() => {
          setImageLoading(false);
        }}
        className={styles.Image}
        src={selectedCharacter.images[injuredSide ? "injured" : "healthy"].src}
        alt={selectedCharacter.images[injuredSide ? "injured" : "healthy"].alt}
      />
    </div>
  );
};
