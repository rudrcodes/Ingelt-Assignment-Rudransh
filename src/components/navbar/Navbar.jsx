import React from "react";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import './navbar.css';
const Nav = styled.nav`
  /* position: absolute; */
  font-family: "Inter",sans-serif;
  width: 100vw;
  height: 7vh;
  background: #35d2ac;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > h3 {
    color: #000;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & h3:nth-child(1){
    border-bottom: 2px solid black;
  }
`;
const Left = styled.div`
  margin-right: 20px;
  font-size: 30px;
`;
export const Navbar = () => {
  return (
    <Nav>
      <Right>
        <h3 >Contact Us Now </h3>
        <h3> WhatsApp Contact: +91 9682976540</h3>
      </Right>
      <Left>
        <RxCross2 />
      </Left>
    </Nav>
  );
};
