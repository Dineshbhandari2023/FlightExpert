// import React from "react";
// import FlightSearchForm from "./components/FlightSearchForm";

// function App() {
//   return (
//     <div className="App">
//       <FlightSearchForm />
//     </div>
//   );
// }

// export default App;
import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModifySearch from "./components/ModifySearch";
// import FlightSearchForm from "./components/FlightSearchForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<ModifySearch />} />
      </Routes>
    </Router>
  );
}

export default App;
