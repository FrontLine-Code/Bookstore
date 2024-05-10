import { styled, createGlobalStyle } from "styled-components";
import { adaptiveValue } from "../utils/variables";
import { colors } from "./variables";

export const GlobalStyles = createGlobalStyle`
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
 }

 body{
    background-color: ${colors.sky};
    font-family: Epilogue;
 }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-block: 0px;
  ${adaptiveValue("padding-inline", 80, 12)};
`;

export const GradientTitle = styled.p`
  font-size: 40px;
  font-weight: 600;
  font-family: Epilogue;
  background: rgb(56, 142, 60);
  background: linear-gradient(
    5deg,
    rgba(56, 142, 60, 1) 0%,
    rgba(139, 195, 74, 1) 100%
  );
`;

export const redBtnStyle = {
  backgroundColor: `${colors.red}`,
  width: "9rem",
  justifyContent: "space-between",

  "&:hover": {
    backgroundColor: `${colors.white}`,
    color: `${colors.red}`,
  },
};

export const grayBtnStyle = {
  backgroundColor: `${colors.asphalt}`,

  "&:hover": {
    backgroundColor: `${colors.white}`,
    color: `${colors.asphalt}`,
  },
};

export const greenBtnStyle = {
  backgroundColor: `${colors.green}`,
  width: "9rem",
  justifyContent: "space-between",

  "&:hover": {
    backgroundColor: `${colors.white}`,
    color: `${colors.green}`,
  },
};
