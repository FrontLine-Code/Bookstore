import { Link } from "react-router-dom";
import styled from "styled-components";
import { adaptiveValue, colors } from "../../utils/variables";
import { styles } from "../../utils/commonStyles";

export const HeaderBg = styled.div`
  background-color: ${colors.green};
`;

export const HeaderWrapper = styled.div`
  ${styles.alignBetween}
  padding-block: 10px;
  width: 100%;
`;

export const Navbar = styled.nav`
  display: flex;
  ${adaptiveValue("gap", 22, 10)};

  @media (max-width: 1070px) {
    display: none;
  }
`;

export const NavbarLink = styled.button<{ $active: boolean }>`
  background-color: ${(props) => (props.$active ? colors.white : colors.green)};
  color: ${(props) => (props.$active ? colors.green : colors.white)};
  border: 2px solid ${colors.green};
  ${styles.fourteenFont}
  ${adaptiveValue("padding", 12, 6)};
  border-radius: 10px;
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    border: 2px solid ${colors.white};
  }
`;

export const NavbarCategory = styled.button`
  border: 2px solid ${colors.green};
  color: ${colors.white};
  ${styles.alignCenter}
  ${styles.fourteenFont}
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  ${adaptiveValue("padding-block", 6, 3)};
  ${adaptiveValue("padding-inline", 12, 6)};
  border-radius: 10px;
`;

export const CategoryWrapper = styled.div`
  ${styles.justBetween}
  row-gap: 15px;
  flex-wrap: wrap;
  max-width: 315px;
  width: 100%;
`;

export const CategoryLink = styled.button`
  ${styles.alignBetween}
  background-color: ${colors.sky};
  color: ${colors.darkGreen};
  border: 2px solid ${colors.sky};
  ${adaptiveValue("padding", 15, 7)};
  ${adaptiveValue("width", 150, 130)};
  border-radius: 10px;
  cursor: pointer;
  text-transform: capitalize;
  transition: 0.2s;

  &:hover {
    border: 2px solid ${colors.darkGreen};
  }
`;

export const CategoryTitle = styled.p`
  color: ${colors.gray};
  ${adaptiveValue("font-size", 20, 16)};
  margin-bottom: 15px;
  font-weight: 500;
  text-align: center;
`;

export const SearchInp = styled.input`
  ${adaptiveValue("padding-block", 10, 8)};
  ${adaptiveValue("padding-inline-start", 35, 25)};
  ${adaptiveValue("padding-inline-end", 10, 0)};
  ${adaptiveValue("max-width", 215, 95)};
  background-color: ${colors.greenLayer};
  color: ${colors.darkGreen};
  ${styles.fourteenFont}
  letter-spacing: 0.5px;
  width: 100%;
  border-radius: 20px;
  border: none;

  &:focus {
    outline-color: ${colors.darkGreen};
  }
`;

export const SearchWrapper = styled.form`
  position: relative;
`;

export const SearchBtn = styled.button`
  ${styles.center}
  ${adaptiveValue("width", 40, 34)};
  ${adaptiveValue("height", 40, 34)};
  position: absolute;
  ${adaptiveValue("top", -3, -1)};
  left: -10px;
  cursor: pointer;
  border-radius: 50%;
  background: rgb(56, 142, 60);
  background: linear-gradient(
    5deg,
    rgba(56, 142, 60, 1) 0%,
    rgba(139, 195, 74, 1) 100%
  );
  border: none;
  box-shadow: 0px 2px 25px -6px rgba(36, 36, 36, 1);
`;

export const AccountWrapper = styled(Link)<{ $active: boolean }>`
  background-color: ${(props) => (props.$active ? colors.white : colors.green)};
  ${styles.alignCenter}
  ${adaptiveValue("gap", 10, 5)};
  border: 2px solid ${colors.green};
  border-radius: 10px;
  padding: 5px 5px 5px 10px;
  transition: 0.1s;

  &:hover {
    border: 2px solid ${colors.white};
  }
`;

export const UserName = styled.p<{ $active: boolean }>`
  color: ${(props) => (props.$active ? colors.green : colors.white)};
  ${styles.fourteenFont}
  letter-spacing: 0.5px;
`;

export const ActionsWrapper = styled.div`
  ${styles.alignCenter}
  ${adaptiveValue("gap", 20, 10)};
`;

export const LogoWrapper = styled.div`
  color: ${colors.white};
  ${styles.center};
  ${adaptiveValue("gap", 12, 6)};
`;

export const LogoText = styled.p`
  ${adaptiveValue("font-size", 18, 12)};
  font-weight: 600;
  color: ${colors.white};
  
  @media (max-width: 750px) {
    font-weight: 500;
  },
`;
