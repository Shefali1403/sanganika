import React from "react";
import Homepage from "./Pages/Homepage";
import Academics from "./Pages/Academics";
import Alumni from './Pages/Alumni';
import Achievement from './Pages/Achievement';
import Events from './Pages/Events';
import Team from './Pages/Team';
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
const App=()=>{
  return(
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path='/academic' element={<Academics/>}/>
        <Route path='/event' element={<Events/>}/>
        <Route path='/alumni' element={<Alumni/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/achieve" element={<Achievement/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}
export default App;