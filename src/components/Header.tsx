import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  margin-bottom: 1em;
`;

const Ul = styled.ul`
  display: flex;
  padding: 1em;
  align-items: center;
  justify-content: center;
  li {
    font-weight: bold;
    padding: 0 0.5em;
  }
`;

const BtnSpan = styled.span`
  cursor: pointer;
  text-decoration: underline;
`;

const Img = styled.img`
  width: 50vw;
`;

function Header() {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <HeaderContainer>
      <Img src="https://static.coingecko.com/s/coingecko-branding-guide-8447de673439420efa0ab1e0e03a1f8b0137270fbc9c0b7c086ee284bd417fa1.png" />
      <Ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/coin">COIN</Link>
        </li>
        <li>
          <BtnSpan onClick={goToAbout}>ABOUT</BtnSpan>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </Ul>
    </HeaderContainer>
  );
}

export default Header;
