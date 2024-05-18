import styled from "styled-components";
import { adaptiveValue, colors } from "../../utils/variables";
import { styles } from "../../utils/commonStyles";

export const MainFooterBg = styled.div`
  background-color: ${colors.darkGreen};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const FooterInnerWrapper = styled.div`
${styles.justBetween}
  padding-block: 48px;
`;

export const FooterRights = styled.div`
  color: ${colors.white};
  background-color: ${colors.green};
  ${styles.center}
  font-size: 18px;
  padding-block: 12px;
`;

export const FooterLink = styled.button<{ $active: boolean }>`
  color: ${colors.white};
  border: 2px solid
    ${(props) => (props.$active ? colors.white : colors.darkGreen)};
  ${styles.fourteenFont}
  ${adaptiveValue("padding", 12, 6)};
  border-radius: 10px;
  transition: 0.1s;
  cursor: pointer;
  background: transparent;
`;

export const FooterSocial = styled.button`
  color: ${colors.white};
  border: 1px solid ${colors.white};
  ${adaptiveValue("height", 40, 20)};
  ${adaptiveValue("width", 40, 20)};
  ${styles.center}
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
`;
