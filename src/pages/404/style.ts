import styled from "styled-components";
import { adaptiveValue, colors } from "../../utils/variables";
import { styles } from "../../utils/commonStyles";

const HugeEllipse = styled.div`
  background-color: ${colors.greenLayer};
  ${styles.center}
  ${adaptiveValue("max-width", 415, 295)};
  ${adaptiveValue("height", 415, 295)};
  flex-direction: column;
  border-radius: 50%;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `;
  
  const ErrorWord = styled.p`
  ${adaptiveValue("font-size", 128, 80)};
  color: ${colors.darkGreen};
  font-weight: 600;
  `;
  
  const ErrorReminder = styled.p`
  color: ${colors.darkGreen};
  ${adaptiveValue("max-width", 278, 200)};
  ${adaptiveValue("font-size", 24, 20)};
  max-width: 278px;
  width: 100%;
  text-align: center;
  font-weight: 600;
  `;
  
  const BackBtn = styled.button`
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

export { HugeEllipse, ErrorWord, ErrorReminder, BackBtn };