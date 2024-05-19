import styled from "styled-components";
import { colors } from "../../utils/variables";
import { Box } from "@mui/material";
import { styles } from "../../utils/commonStyles";

export const SettingType = styled.p`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 1px;
  color: ${colors.darkGreen};
  margin-bottom: 20px;
`;

export const SectionWrapper = styled(Box)`
  ${styles.alignCenter}
  gap: 20px;
  border-radius: 20px;
  background-color: #ddd;
  padding: 10px;
  margin-bottom: 20px;
`;
