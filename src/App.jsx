import React from "react";
import { useState } from 'react';
import themeContext from './components/Theme'
import Navbar from './components/Navbar';
import Projects from "./components/projects";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
const App = () => {
  const [theme , setTheme] = useState('light')
  return (
    <themeContext.Provider value={{theme,setTheme}}> 
    
      <Navbar />
      <Header />
      <Projects/>
      <Portfolio/>

    </themeContext.Provider>  
    
  );
};

export default App;
