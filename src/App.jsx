import React, { useState } from "react";
import themeContext from "./components/Theme";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import ContactMe from "./components/ContactMe";
const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <Navbar />
      <Header />
      <Projects />
      <Portfolio />
      <ContactMe/>
    </themeContext.Provider>
  );
};

export default App;
