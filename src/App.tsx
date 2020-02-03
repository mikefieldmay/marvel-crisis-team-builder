import React, { Component } from "react";

import { CharacterList } from "./components/CharacterList/CharacterList";
import { CrisisTeam } from "./hooks/context";

export class App extends Component {
  render() {
    return (
      <CrisisTeam initialValues={null}>
        <CharacterList />
      </CrisisTeam>
    );
  }
}
