import styled from "styled-components";
import { adaptiveValue, colors } from "../../utils/variables";
import { styles } from "../../utils/commonStyles";

const HeaderBg = styled.div`
  background-color: ${colors.green};
`;

const HeaderWrapper = styled.div`
  ${styles.alignBetween}
  ${adaptiveValue("padding-block", 10, 5)};
  width: 100%;
`;

const Navbar = styled.nav`
  display: flex;
  ${adaptiveValue("gap", 22, 10)};

  @media (max-width: 1070px) {
    display: none;
  }
`;

const NavbarLink = styled.button<{ $active: boolean }>`
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

const NavbarCatalog = styled.button`
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

const CatalogWrapper = styled.div`
  ${styles.justBetween}
  ${adaptiveValue("row-gap", 15, 7)};
  flex-wrap: wrap;
  max-width: 315px;
  width: 100%;
`;

const CatalogType = styled.button`
  ${styles.alignBetween}
  background-color: ${colors.sky};
  color: ${colors.darkGreen};
  border: 2px solid ${colors.sky};
  ${adaptiveValue("padding", 15, 7)};
  ${adaptiveValue("width", 150, 75)};
  border-radius: 10px;
  cursor: pointer;
  text-transform: capitalize;
  transition: 0.2s;

  &:hover {
    border: 2px solid ${colors.darkGreen};
  }
`;

const CatalogTitle = styled.p`
  color: ${colors.gray};
  ${adaptiveValue("font-size", 20, 12)};
  ${adaptiveValue("margin-bottom", 15, 7)};
  font-weight: 500;
`;

const SearchInp = styled.input`
  background-color: ${colors.greenLayer};
  color: ${colors.darkGreen};
  ${adaptiveValue("font-size", 14, 10)};
  ${adaptiveValue("padding-block", 10, 8)};
  ${adaptiveValue("padding-inline-start", 35, 20)};
  ${adaptiveValue("padding-inline-end", 10, 0)};
  ${adaptiveValue("max-width", 215, 70)};
  letter-spacing: 0.5px;
  font-weight: 500;
  width: 100%;
  border-radius: 20px;
  border: none;

  &:focus {
    outline-color: ${colors.darkGreen};
  }
`;

const SearchWrapper = styled.form`
  position: relative;
`;

const SearchBtn = styled.button`
  ${styles.center}
  ${adaptiveValue("width", 40, 28)};
  ${adaptiveValue("height", 40, 28)};
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

const AccountWrapper = styled.div`
  ${styles.alignCenter}
  ${adaptiveValue("gap", 10, 5)};
`;

const UserName = styled.p`
  color: ${colors.white};
  ${styles.fourteenFont}
  letter-spacing: 0.5px;
`;

const ActionsWrapper = styled.div`
  ${styles.alignCenter}
  ${adaptiveValue("gap", 20, 0)};
`;

const LogoWrapper = styled.div`
  color: ${colors.white};
  ${styles.center};
  ${adaptiveValue("gap", 12, 6)};
`;

const LogoText = styled.p`
  ${adaptiveValue("font-size", 18, 12)};
  font-weight: 600;
  color: ${colors.white};
  
  @media (max-width: 750px) {
    font-weight: 500;
  },
`;

export {
  HeaderBg,
  HeaderWrapper,
  LogoWrapper,
  LogoText,
  Navbar,
  NavbarLink,
  NavbarCatalog,
  SearchInp,
  SearchWrapper,
  SearchBtn,
  CatalogTitle,
  CatalogType,
  CatalogWrapper,
  AccountWrapper,
  UserName,
  ActionsWrapper,
};
