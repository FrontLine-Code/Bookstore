import styled from "styled-components";
import { colors } from "../../utils/variables";
import { styles } from "../../utils/commonStyles";

const HugeEllipse = styled.div`
  background-color: ${colors.greenLayer};
  ${styles.center}
  flex-direction: column;
  border-radius: 50%;
  max-width: 415px;
  height: 415px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ErrorWord = styled.p`
  color: ${colors.darkGreen};
  font-size: 128px;
  font-weight: 600;
`;

const ErrorReminder = styled.p`
  color: ${colors.darkGreen};
  max-width: 278px;
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;

const BackBtn = styled.button`
  background-color: ${colors.white};
  color: ${colors.darkGreen};
  ${styles.alignCenter}
  gap: 5px;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  border-radius: 10px;
  border: none;
  padding: 15px;
  box-shadow: 0px 2px 25px -6px rgba(16, 16, 16, 0.5);
  cursor: pointer;
  position: fixed;
  top: 4%;
  left: 2%;
  transform: translate(-5%, -5%);
`;

export { HugeEllipse, ErrorWord, ErrorReminder, BackBtn };