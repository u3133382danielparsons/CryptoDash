import React from "react";
import WelcomeMessage from "./WelcomeMessage.js";
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page.js';

export default function() {
  return (
    <Page name="settings">
      <WelcomeMessage />
      <ConfirmButton />
    </Page>
  );
}
