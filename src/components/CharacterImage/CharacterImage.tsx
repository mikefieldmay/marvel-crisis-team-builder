import React, { useEffect, useState } from "react";
import { useCrisisState } from "../../context/CrisisTeamContext";
import styles from "./styles.css";
import { Loading } from "../Icons/Loading";
import { Flip } from "../Icons/Flip";
import { removeCharacter, addCharacterToRoster } from "../../context/actions";

export const CharacterImage = () => {
  const {
    state: { selectedCharacter, selectedCharacters },
    dispatch
  } = useCrisisState();
  const [imageLoading, setImageLoading] = useState(true);
  const [injuredSide, setInjuredSide] = useState(false);

  useEffect(() => {
    setImageLoading(true);
    setInjuredSide(false);
  }, [selectedCharacter]);

  const isSelected = () => {
    return selectedCharacters.find(
      availableCharacter => availableCharacter.id === selectedCharacter.id
    );
  };

  const onButtonClick = () => {
    dispatch(
      isSelected()
        ? removeCharacter(selectedCharacter.id)
        : addCharacterToRoster(selectedCharacter.id)
    );
  };

  if (!selectedCharacter) return <div />;

  return (
    <div className={styles.ImageContainer}>
      {imageLoading && (
        <div className={styles.LoadingContainer}>
          <Loading />
        </div>
      )}
      <div className={styles.ImageWrapper}>
        <button onClick={onButtonClick} className={styles.AddButton}>
          {isSelected() ? "-" : "+"}
        </button>
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
          src={
            selectedCharacter.images[injuredSide ? "back" : "front"] &&
            selectedCharacter.images[injuredSide ? "back" : "front"].src
          }
          alt={
            selectedCharacter.images[injuredSide ? "back" : "front"] &&
            selectedCharacter.images[injuredSide ? "back" : "front"].alt
          }
        />
      </div>
    </div>
  );
};
