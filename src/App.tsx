import React, { Component } from "react";

import { reducer } from './context/reducer'
import { CharacterList } from "./components/CharacterList/CharacterList";
import { CrisisProvider, defaultContext } from './context/CrisisTeamContext'
import * as styles from "./index.css";

export class App extends Component {
  render() {
    return <div className={styles.Background}>
      <CrisisProvider reducer={reducer} initialState={defaultContext}>
        <CharacterList />
      </CrisisProvider>
    </div>;
  }
}
