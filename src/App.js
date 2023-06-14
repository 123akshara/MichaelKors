import React from "react";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import NEW from "./Components/NEW";
import WOMEN from "./Components/WOMEN";
import MEN from "./Components/MEN";
import KIDS from "./Components/KIDS";
import MICHAELKORSCOLLECTION from "./Components/MICHAELKORSCOLLECTION";
import HANDBAGS from "./Components/HANDBAGS";
import NavBar from "./Components/Nav";
import HOME from "./Components/HOME";
import SHOES from "./Components/SHOES";
import WATCHES from "./Components/WATCHES";
import GIFTS from "./Components/GIFTS";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path="/" element={<HOME />} />
        <Route exact path="new" element={<NEW />} />
        <Route exact path="women" element={<WOMEN />} />
        <Route exact path="men" element={<MEN />} />
        <Route exact path="kids" element={<KIDS />} />
        <Route exact path="handbags" element={<HANDBAGS />} />
        <Route exact path="shoes" element={<SHOES />} />
        <Route exact path="watches" element={<WATCHES />} />
        <Route exact path="gifts" element={<GIFTS />} />

        <Route
          exact
          path="michael-kors-collection"
          element={<MICHAELKORSCOLLECTION />}
        />
      </Routes>
    </div>
  );
}

export default App;
