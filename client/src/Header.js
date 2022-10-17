import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <StyledLink to={"/"}>
        <NameContainer>My Portfolio</NameContainer>
      </StyledLink>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const NameContainer = styled.div`
  font-family: arial;
  font-size: 40px;
  font-weight: bold;
  color: black;
  left: 0%;
  margin-bottom: 10px;
`;


