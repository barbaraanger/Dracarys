import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Books,
  Characters,
  Dragons,
  Home,
  Houses,
  Map,
  Quotes,
  Shows,
} from "./pages";
import { menuProps } from "./types";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Footer, MenuToolbar, NotFound } from "./components";

function App() {
  return (
    <div className="App">
      <MenuToolbar {...menuProps} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/books" element={<Books />} />
        <Route path="/map" element={<Map />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
