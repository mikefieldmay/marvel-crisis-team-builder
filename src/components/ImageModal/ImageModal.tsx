import React, { useState, useEffect } from "react";

import * as styles from "./styles.css";
import { useCrisisState } from "../../context/CrisisTeamContext";
import { Loading } from "../Icons/Loading";
import { Flip } from "../Icons/Flip";
import {
  setSelectedCharacter,
  removeCharacter,
  addCharacterToRoster
} from "../../context/characters/actions";
import { AddOrRemoveButton } from "../AddOrRemoveButton/AddOrRemoveButton";

export const ImageModal = () => {
  const {
    state: {
      characterState: { selectedCharacter, selectedCharacters }
    },
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
        X
      </button>
      {imageLoading && (
        <div className={styles.LoadingContainer}>
          <Loading />
        </div>
      )}
      <div className={styles.ImageWrapper}>
        <AddOrRemoveButton
          classes={[styles.AddButton]}
          item={selectedCharacter}
          comparisonList={selectedCharacters}
          addAction={addCharacterToRoster}
          removeAction={removeCharacter}
        />
        {selectedCharacter.images.back && (
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
          src={selectedCharacter.images[injuredSide ? "back" : "front"].src}
          alt={selectedCharacter.images[injuredSide ? "back" : "front"].alt}
        />
      </div>
    </div>
  );
};
