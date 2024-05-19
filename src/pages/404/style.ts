import styled from "styled-components";
import { adaptiveValue, colors } from "../../utils/variables";
import { styles } from "../../utils/commonStyles";

export const ErrorWord = styled.p`
  ${adaptiveValue("font-size", 128, 80)};
`;

export const ErrorReminder = styled.p`
  ${adaptiveValue("max-width", 278, 200)};
  width: 100%;
`;

export const BackBtn = styled.button`
  ${adaptiveValue("padding", 15, 8)};
  ${adaptiveValue("font-size", 15, 13)};
  background-color: ${colors.white};
  color: ${colors.darkGreen};
  ${styles.alignCenter}
  gap: 5px;
  font-weight: 600;
  line-height: 24px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 2px 25px -6px rgba(16, 16, 16, 0.5);
  cursor: pointer;
  position: fixed;
  top: 3%;
  ${adaptiveValue("left", 30, 20)};
  transform: translate(-5%, -5%);
`;
