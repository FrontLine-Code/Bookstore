import { createGlobalStyle } from "styled-components";
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