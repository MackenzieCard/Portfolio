import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Wrapper>
            <NavButton>
                <NavLink to={"/"}> Home </NavLink>
            </NavButton>
            <NavButton>
                <NavLink to={"/about"}> About Me </NavLink>
            </NavButton>
            <NavButton>
                <NavLink to={"/projects"}> Projects </NavLink>
            </NavButton>
            <NavButton>
                <NavLink to={"/contact"}> Contact </NavLink>
            </NavButton>
        </Wrapper>
    );
};

export default NavBar;

const Wrapper = styled.div`
  height: 4vh;
  margin-bottom: 50px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & > a {
    display: flex;
    text-decoration: none;
    font-size: 18px;
  }

  & a.active {

    border-radius: 5px;
  }
`;

const NavButton = styled.div`
  font-size: 22px;
  font-weight: bold;

  & > a {
    color: black;
    text-decoration: none;
  }

  & > a:hover {

    border-radius: 5px;
  }
`;