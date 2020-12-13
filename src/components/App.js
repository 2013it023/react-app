import React from "react";
import { Route } from "react-router-dom";
import Landing from "./Landing";

function App() {
  return (
    <div>
      <Route exact path="/" component={Landing} />
    </div>
  );
}

export default App;
