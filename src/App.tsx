import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CharactersList } from "./components/CharactersList";
import { MenuToolbar } from "./components/MenuToolbar";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <MenuToolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
