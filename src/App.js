import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="App">
        <Home />
        <Header handleDarkMode={setDarkMode}/>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
