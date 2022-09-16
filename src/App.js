import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
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