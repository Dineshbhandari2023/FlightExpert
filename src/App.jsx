
import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModifySearch from "./components/ModifySearch";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<ModifySearch />} />
      </Routes>
    </Router>
  );
}

export default App;
