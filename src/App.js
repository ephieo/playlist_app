import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
