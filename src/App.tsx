import React, { Component } from "react";

import { CharacterList } from "./components/CharacterList/CharacterList";
import { Header } from "./components/Header/Header";
import { CrisisProvider } from "./context/CrisisTeamContext";
import { Footer } from "./components/Footer/Footer";
import * as styles from "./index.css";

export class App extends Component {
  render() {
    return (
      <div className={styles.Background}>
        <Header />
        <CrisisProvider>
          <CharacterList />
        </CrisisProvider>
        <Footer />
      </div>
    );
  }
}
