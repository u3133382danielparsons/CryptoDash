import React from "react";
import "./App.css";
import WelcomeMessage from "./WelcomeMessage.js";
import AppLayout from "./AppLayout.js";
import AppBar from "./AppBar.js";
import {AppProvider} from "./AppProvider";

class App extends React.Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <WelcomeMessage />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
