import React from "react";
import styled from "styled-components";
import PopVid from "../../images/right1.svg";
import UFC from "../../images/right2Final.png";
const Right = styled.div`
  height: 100%;
  /* width: 100%; */
  /* background-color: red; */
  border-left: 1px solid gray;
  padding: 10px;
`;
const PopularVid = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  /* background-color: gray; */
  letter-spacing: 1px;
  color: #fff;
  font-size: 1rem;
  height: 250px;
  width: 290px;
  font-family: "Inter";
  & img {
    margin-top: 15px;
    width: 270px;
    height: 180px;
  }
`;
const Hr = styled.hr`
  margin-top: 20px;
  /* margin-bottom: 40px; */
  border-bottom: 1px solid #20202d;
`;
const RecentUpd = styled.div`
  margin-top: 15px;
  letter-spacing: 1px;
  color: #fff;
  font-size: 1rem;
  font-family: "Inter";
  & h4{
    /* background-color: yellow; */
    margin-left:20px;
    margin-bottom:7px;
  }
`;
const Images = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  & img {
    margin-top: 10px;
    width: 220px;
    height: 81px;
    border: 1px solid black;
    border-radius: 21px; /* width: 200px; */
  }
`;
export const RightSide = () => {
  return (
    <Right>
      <PopularVid>
        <h4>Popular Videos</h4>
        <img src={PopVid} slt="popular videos" />
        <Hr />
      </PopularVid>
      <RecentUpd>
        <h4>Recent Updates</h4>
        <Images>
          <img src={UFC} slt="popular videos" />
          <img src={UFC} slt="popular videos" />
          <img src={UFC} slt="popular videos" />
          <img src={UFC} slt="popular videos" />
        </Images>
      </RecentUpd>
    </Right>
  );
};
