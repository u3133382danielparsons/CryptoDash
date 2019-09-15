import React from "react";
import "./App.css";
import AppLayout from "./AppLayout.js";
import AppBar from "./AppBar.js";
import { AppProvider } from "./AppProvider.js";
import Settings from "../Settings";
import Content from "../Shared/Content.js";

class App extends React.Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <Content>
            <Settings/>
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}
export default App;
