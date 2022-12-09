import React from "react";
import styled from "styled-components";
import HeroImg from "../../images/hero-img.png";
import { BsFillCircleFill } from "react-icons/bs";

const Middle = styled.div`
  font-family: "Inter";
  color: white;
  padding-top: 30px;
  padding-left: 45px;
  padding-right: 45px;
  height: 100%;
  /* background-color: orange; */
`;

const Hero = styled.div`
  height: 40vh;
  letter-spacing: 1px;

  & div {
    margin-bottom: 10px;
  }
  & img {
    width: 750px;
    height: 208px;
  }
`;
const Tab = styled.div`
  font-size: 14px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 45px;
  background: #413f3f;
  border-radius: 15px;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(1) {
      border-radius: 15px 0px 0px 15px;
      border-right: 3px solid #000;

      background: #7b6cd5;
    }
    &:nth-child(3) {
      border-left: 3px solid #000;
    }
  }
`;
const Hr = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #20202d;
`;
const Table = styled.table`
  border-collapse: collapse;

  th {
    padding: 6px;
    width: 400px;
    height: 60px;
    font-size: 15px;
  }
  tr {
    border-top-right-radius: 20px;
    &:nth-child(2n) {
      background: #343333;
      /* background: red; */
    }
    &:not(:nth-child(2n)) {
      background: #29292e;
    }
    &:nth-child(1) {
      background-color: transparent;
      & th {
        color: gray;
      }
    }
  }
  td {
    text-align: center;
    backdrop-filter: blur(20px);
  }

  tr:not(:nth-child(1)) {
    width: 123px;
    height: 85px;

    & > td:nth-child(1) {
      color: #000;
    }
  }
`;
const LabelMatchStatus = styled.div`
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 40px;
  width: 80px;
  color: #8289c6;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
`;
const LabelODI = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 40px;
  width: 80px;
  background: #698b78;
`;
const LabelMatchType = styled.div`
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 40px;
  width: 80px;
  background: linear-gradient(
    180deg,
    rgba(23, 23, 34, 0.18) 0%,
    rgba(23, 23, 34, 0.22) 100%
  );
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
`;
const List = styled.div``;
export const MiddleComp = () => {
  return (
    <Middle>
      <Hero>
        <div>
          <h1> Important Matches</h1>
        </div>
        <img src={HeroImg} alt="hero-img" />
        <Hr />
      </Hero>
      <List>
        <Tab>
          <div>
            <h3>Cricket</h3>
          </div>
          <div>
            <h3>Football</h3>
          </div>
          <div>
            <h3>Tennis</h3>
          </div>
        </Tab>
        <Table>
          <tbody>
            {/* heading */}
            <tr>
              <th>Match Status</th>
              <th>Match Type</th>
              <th>Match Format</th>
              <th>Team1</th>
              <th>&nbsp;</th>
              <th>Team2</th>
            </tr>
            {/* Data */}
            <tr>
              <td>
                <LabelMatchStatus style={{ color: "#FF7C7C" }}>
                  <BsFillCircleFill
                    style={{ fontSize: "10px", marginRight: "5px" }}
                  />
                  Live{" "}
                </LabelMatchStatus>
              </td>
              <td>
                <LabelMatchType> Domestic</LabelMatchType>
              </td>
              <td>
                <LabelODI>ODI</LabelODI>
              </td>
              <td>Afganistan</td>
              <td style={{ color: "#7B6CD5" }}> Vs</td>
              <td>United States</td>
            </tr>
            <tr>
              <td>
                <LabelMatchStatus>Pending </LabelMatchStatus>
              </td>
              <td>
                <LabelMatchType> Domestic</LabelMatchType>
              </td>{" "}
              <td>
                <LabelODI>ODI</LabelODI>
              </td>
              <td> Afganistan</td>
              <td style={{ color: "#7B6CD5" }}> Vs</td>
              <td>United States</td>
            </tr>
            <tr>
              <td>
                <LabelMatchStatus>Pending </LabelMatchStatus>
              </td>
              <td>
                <LabelMatchType> Domestic</LabelMatchType>
              </td>{" "}
              <td>
                <LabelODI>ODI</LabelODI>
              </td>
              <td> Afganistan</td>
              <td style={{ color: "#7B6CD5" }}> Vs</td>
              <td>United States</td>
            </tr>
          </tbody>
        </Table>
      </List>
    </Middle>
  );
};
