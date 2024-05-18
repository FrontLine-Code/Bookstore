import styled from "styled-components";
import { Box, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/variables";
import { styles } from "../../utils/commonStyles";

export const FormWrapper = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${styles.alignCenter}
  flex-direction: column;
  gap: 20px;
`;

export const FormContent = styled.form`
  ${styles.center}
  flex-direction: column;
  row-gap: 25px;
`;

export const FormInput = styled(TextField)`
  width: 340px;
`;

export const InputWrapper = styled(Box)`
  ${styles.justBetween}
  flex-direction: column;
  gap: 5px;
`;

export const submitBtnStyle = {
  maxWidth: "340px",
  width: "100%",
  backgroundColor: `${colors.darkGreen}`,
  color: `${colors.white}`,
  border: `2px solid ${colors.darkGreen}`,
  padding: "12px",
  borderRadius: "10px",

  "&:hover": {
    backgroundColor: `${colors.greenLayer}`,
    color: `${colors.darkGreen}`,
  },
};

export const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "10px",
        borderColor: `${colors.darkGreen}`,
        borderWidth: "2px",
      },
      "&:hover fieldset": {
        borderColor: `${colors.darkGreen}`,
        borderWidth: "2px",
      },
      "&.Mui-focused fieldset": {
        borderColor: `${colors.darkGreen}`,
        borderWidth: "2px",
      },
    },
  },
});
