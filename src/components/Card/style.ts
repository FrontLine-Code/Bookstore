import styled from "styled-components";
import { Box } from "@mui/material";
import { colors } from "../../utils/variables";
import { styles } from "../../utils/commonStyles";
import { Link } from "react-router-dom";

export const CardBody = styled(Box)`
  background-color: ${colors.white};
  ${styles.justBetween}
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  max-width: max-content;
  border-radius: 30px;
  box-shadow: 0px 0px 20px -15px rgba(138, 138, 138, 1);
`;

export const CardItems = styled(Box)`
  display: flex;
  justify-content: space-evenly;
`;

export const InfoWrapper = styled(Box)`
  ${styles.justBetween}
  flex-direction: column;
  gap: 5px;
  max-width: 200px;
  width: 100%;
`;

export const Text = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
`;

export const Extender = styled(Link)`
  background-color: ${colors.green};
  color: ${colors.white};
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 13px;
  cursor: pointer;
  border: none;
`;
