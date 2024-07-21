
import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModifySearch from "./components/ModifySearch";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<ModifySearch />} />
         {/* <Route path="/home/signin" element={<SignIn />} />
         <Route path="/home/signup" element={<SignUp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
