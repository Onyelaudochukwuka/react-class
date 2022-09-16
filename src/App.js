import React from "react";
import { Route, Routes } from "react-router-dom";
import Card from "./Card";
import Home from "./pages/Home";
const data = [{
  firstName: "john",
  lastName: "doe",
  Date: Date.now(),
  userName: "MrJohn"
  },
  {
  firstName: "james",
  lastName: "doe",
  Date: Date.now(),
  userName: "MrJohn"
  },
  {
  firstName: "martins",
  lastName: "doe",
  Date: Date.now(),
  userName: "MrJohn"
  },
  {
  firstName: "hshdj",
  lastName: "doe",
  Date: Date.now(),
  userName: "MrJohn"
  }
];

const App = () => {
  
  return (
    <Routes>
      <Route path="/home" exact element={<Home />} />
      <Route path="/about" exact element={<Home />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/home/:Some" exact element={<Home />} />

    </Routes>
        );
};
  
export default App;