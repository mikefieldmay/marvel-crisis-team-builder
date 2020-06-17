import React, { useState, useEffect } from "react";

import * as styles from "./styles.css";
import { useCrisisState } from "../../context/CrisisTeamContext";
import { Loading } from "../Icons/Loading";
import { Flip } from "../Icons/Flip";
import { setSelectedCharacter } from "../../context/actions";

export const ImageModal = () => {
  const {
    state: { selectedCharacter },
    dispatch
  } = useCrisisState();
  const [imageLoading, setImageLoading] = useState(true);
  const [injuredSide, setInjuredSide] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setImageLoading(true);
    setInjuredSide(false);
    return () => (document.body.style.overflow = "initial");
  }, [selectedCharacter]);

  if (!selectedCharacter) return null;

  return (
    <div className={styles.ImageContainer}>
      <button
        className={styles.CloseButton}
        onClick={() => dispatch(setSelectedCharacter(null))}
      >
        Close
      </button>
      {imageLoading && (
        <div className={styles.LoadingContainer}>
          <Loading />
        </div>
      )}
      <div className={styles.ImageWrapper}>
        {selectedCharacter.images.injured && (
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
        )}
        <img
          onLoad={() => {
            setImageLoading(false);
          }}
          className={styles.Image}
          src={
            selectedCharacter.images[injuredSide ? "injured" : "healthy"].src
          }
          alt={
            selectedCharacter.images[injuredSide ? "injured" : "healthy"].alt
          }
        />
      </div>
    </div>
  );
};