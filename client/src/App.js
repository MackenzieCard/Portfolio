import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import NavBar from "./NavBar";
import Header from "./Header";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import ContactMe from "./ContactMe";

const App = () => {
  return (
   <Wrapper>
    <BrowserRouter>
    <GlobalStyles /> 
    <Header />
    <NavBar /> 
    <Routes>
      <Route path="/" element={<Homepage />} /> 
      <Route path="/about" element={<AboutMe />} /> 
      <Route path="/projects" element={<MyProjects/>} /> 
      <Route path="/contact" element={<ContactMe/>} /> 
    </Routes>
    </BrowserRouter>
   </Wrapper> 
  );
}

export default App;

const Wrapper = styled.div``; 
