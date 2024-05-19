import { styled, createGlobalStyle } from "styled-components";
import { adaptiveValue } from "../utils/variables";
import { colors } from "./variables";
import { styles } from "./commonStyles";

export const GlobalStyles = createGlobalStyle`
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
 }

 body{
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
  margin-block: 40px;
`;

export const HugeEllipse = styled.div`
  background-color: ${colors.greenLayer};
  ${styles.center}
  ${adaptiveValue("width", 415, 295)};
  ${adaptiveValue("height", 415, 295)};
  flex-direction: column;
  border-radius: 50%;
  margin: auto;
  color: ${colors.darkGreen};
  ${adaptiveValue("font-size", 24, 20)};
  text-align: center;
  font-weight: 600;
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
