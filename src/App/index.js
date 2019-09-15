import React from "react";
import "./App.css";
import AppLayout from "./AppLayout.js";
import AppBar from "./AppBar.js";
import {AppProvider} from "./AppProvider";
import Settings from '../Settings'

class App extends React.Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Settings />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
