import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import * as Style from "./style";
import { colors } from "../../utils/variables";
import { GradientTitle } from "../../utils/globalStyles";

export function Login() {
  const classes = Style.useStyles();

  return (
    <Style.FormWrapper>
      <GradientTitle variant="h4">Log In</GradientTitle>
      <Style.FormContent>
        <Style.FormInput
          type="email"
          placeholder="Email"
          variant="outlined"
          className={classes.root}
        />
        <Style.FormInput
          type="password"
          placeholder="Password"
          variant="outlined"
          className={classes.root}
        />
        <Button variant="contained" sx={Style.submitBtnStyle}>
          SUBMIT
        </Button>
        <Link to="/sigin" style={{ color: `${colors.darkGreen}` }}>
          Don't you have account yet?
        </Link>
      </Style.FormContent>
    </Style.FormWrapper>
  );
}
