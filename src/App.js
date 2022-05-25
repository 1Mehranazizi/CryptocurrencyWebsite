import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import HomePage from "./page/HomePage";

const App = () => {
  return (
    <div className="container">
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </div>
  );
};

export default App;
