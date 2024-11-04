import React from "react";
import { HashRouter } from "react-router-dom";
import Router from "./Router";
import MobileOnly from "./components/common/MobileOnly";

function App() {
  return (
    <MobileOnly>
      <HashRouter>
        <Router />
      </HashRouter>
    </MobileOnly>
  );
}

export default App;
