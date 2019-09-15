import React from "react";
import "./App.css";
import WelcomeMessage from "./WelcomeMessage.js";
import AppLayout from "./AppLayout.js";

class App extends React.Component {
  render() {
    return (
      <AppLayout>
        <WelcomeMessage />
      </AppLayout>
    );
  }
}

export default App;
