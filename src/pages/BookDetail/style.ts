import styled from "styled-components";
import { Box } from "@mui/material";
import { colors } from "../../utils/variables";
import { styles } from "../../utils/commonStyles";

export const BookWrapper = styled(Box)`
  background-color: ${colors.white};
  padding: 10px;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  box-shadow: 0px 0px 20px -15px rgba(138, 138, 138, 1);
`;

export const BookTitle = styled.p`
  color: ${colors.green};
  max-width: 300px;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
`;

export const BookDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-block: 20px;
  margin-left: 30px;
`;

export const BookTypography = styled.p`
  ${styles.fourteenFont}
  color: ${colors.gray};
  line-height: 16px;
`;

export const BookActions = styled.div`
  padding-top: 15px;
  margin-left: auto;
`;
