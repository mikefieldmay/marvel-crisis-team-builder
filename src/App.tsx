import React, { Component } from "react";

import { CharacterList } from "./components/CharacterList/CharacterList";
import { Header } from "./components/Header/Header";
import { CrisisProvider, useCrisisState } from "./context/CrisisTeamContext";
import { Footer } from "./components/Footer/Footer";
import { ImageModal } from "./components/ImageModal/ImageModal";

import * as styles from "./index.css";

const AppSkeleton = () => {
  const {
    state: { selectedCharacter }
  } = useCrisisState();
  return (
    <>
      <Header />
      <CharacterList />
      <Footer />
      {selectedCharacter && <ImageModal />}
    </>
  );
};

export class App extends Component {
  render() {
    return (
      <div className={styles.Background}>
        <CrisisProvider>
          <AppSkeleton />
        </CrisisProvider>
      </div>
    );
  }
}
