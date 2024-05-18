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
  background-image: -webkit-linear-gradient(80deg, #8bc34a, #388e3c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Epilogue;
  font-size: 35px;
  font-weight: Bold;
  font-feature-settings: "kern";
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  margin-block: 90px 60px;
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
