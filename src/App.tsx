import React, { Component } from "react";

import { CharacterList } from "./components/CharacterList/CharacterList";
import { CrisisProvider } from "./context/CrisisTeamContext";
import * as styles from "./index.css";

export class App extends Component {
  render() {
    return (
      <div className={styles.Background}>
        <CrisisProvider>
          <CharacterList />
        </CrisisProvider>
      </div>
    );
  }
}
