import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import HomePage from "./page/HomePage";
import CoinPage from "./page/CoinPage";

const App = () => {
  return (
    <div className="container">
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/:id" element={<CoinPage />}/>
      </Routes>
    </div>
  );
};

export default App;
