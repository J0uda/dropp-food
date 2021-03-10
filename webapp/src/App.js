import React, { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { DataProvider } from "./GlobalState"
import MainPages from "./components/MainPages/pages"
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/SideBar.js/Sidebar'
import './App.css'

function App() {
  const [isopen, setIsOpen] = useState(false);
   
  const toggle = () => {
         setIsOpen(!isopen)
     }
  return (
    <DataProvider>
      <Router>
          <Navbar toggle={toggle} isopen={isopen} />
          <SideBar toggle={toggle} isopen={isopen} />
          <MainPages />
      </Router>
    </DataProvider>
  );
}

export default App;
