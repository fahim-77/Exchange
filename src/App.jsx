import { useState } from "react";
import "./App.css";
import Headers from "./components/Headers";
import MainLayouts from "./layouts/MainLayouts";
import Archive from "./components/Archive";

function App() {
  return (
    <MainLayouts>
      <Archive />
    </MainLayouts>
  );
}

export default App;
