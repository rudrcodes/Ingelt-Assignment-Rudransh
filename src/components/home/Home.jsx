import React from "react";
import styled from "styled-components";
const FlexSep = styled.div`
  height: 93vh;
  display: grid;
grid-template-columns: 1fr 3fr 1fr;
/* text-align: center; */
/* grid-template-rows: auto; */
  background: radial-gradient(
    26.58% 26.58% at 56.06% 2.41%,
    #131f36 0%,
    #161621 100%
  );
`;
export const Home = ({ children }) => {
  return <FlexSep>{children}</FlexSep>;
};
