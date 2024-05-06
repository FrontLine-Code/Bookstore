import styled from "styled-components";
import { adaptiveValue } from "../utils/variables";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-block: 0px;
  ${adaptiveValue("padding-inline", 80, 12)};
`;

const GradientTitle = styled.p`
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

export { GradientTitle, Container };
