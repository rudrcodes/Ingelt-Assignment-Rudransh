import React from "react";
import styled from "styled-components";
import { FiHome } from "react-icons/fi";
import ArrowSVG from "../../images/arrow1.svg";
import HomeSVG from "../../images/home(2)1.svg";
import BlogSVG from "../../images/blogs1.svg";

import Cricket from "../../images/cricket1.svg";
import Football from "../../images/football1.svg";
import Tennis from "../../images/tennis1.svg";
const Left = styled.div`
  /* padding: 10px; */
  color: gray;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  /* background-color: yellow; */
  border-right: 1px solid gray;
  & h2 {
    font-family: "Lexend Mega";
    color: #fff;
  }
`;

const Part = styled.div`
  position: relative;
  /* padding: 10px; */

  height: 80vh;
  width: 100%;
`;
const NavLinks = styled.div`
  width: 100%;
  height: 25vh;
  /* background-color: red; */
  & img {
    height: 43px;
    width: 43px;
    /* background-color: black; */
  }

  & > div:nth-child(1) {
    /* width:90%; */
    padding-left: 10px;
    padding-right: 10px;
    /* background-color: blue; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: "Inter";
    margin-bottom: 10px;
    & h2 {
      color: #fff;
      font-size: 17px;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 20px;
    margin-left: 20px;
  }
  & > div > div {
    display: flex;
    align-items: center;
    font-family: "Inter";
    margin-top: 6px;
    & img {
      height: 35px;
      width: 35px;
      margin-right: 30px;
    }
  }
`;
const Games = styled.div`
  font-family: "Inter";

  padding: 10px;
  width: 100%;
  height: 30vh;
  /* background-color: purple; */
  & h2 {
    font-size: 17px;
    color: #fff;
  }
  & div {
    padding: 5px;
    /* background-color: blue; */
    display: flex;
    /* justify-content: center; */
    margin-top: 25px;
    margin-bottom: 20px;
    /* padding:10px; */
    align-items: center;
    & h2 {
      color: #fff;
    }
    & img {
      height: 30px;
      width: 30px;
      margin-right: 20px;
    }
  }
`;
const FeelingLucky = styled.div`
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: #fff;
  font-family: "Inter";
  position: absolute;
  background: #262735;
  border-radius: 30px 30px 0px 0px;
  height: 70px;
  width: 100%;
  bottom: -11px;
`;
export const LeftSide = () => {
  return (
    <Left>
      <h2>CRICNEWS</h2>
      <Part>
        <NavLinks>
          <div>
            <h2>NavLinks</h2>
            <img src={ArrowSVG} alt="arrow" />
          </div>
          <div>
            <div>
              {/* <FiHome /> */}
              <img src={HomeSVG} alt="home" />
              <h3 style={{ color: "#fff" }}>Home</h3>
            </div>
            <div>
              <img src={BlogSVG} alt="blogs" />
              <h3>Articles</h3>
            </div>
          </div>
        </NavLinks>
        <Games>
          <h2>Games</h2>
          <div>
            <img src={Cricket} alt="blogs" />
            <h4>Cricket</h4>
          </div>
          <div>
            <img src={Tennis} alt="blogs" />
            <h4>Tennis</h4>
          </div>
          <div>
            <img src={Football} alt="blogs" />
            <h4>Football</h4>
          </div>
        </Games>
        <FeelingLucky>Feeling Lucky Today?</FeelingLucky>
      </Part>
    </Left>
  );
};
