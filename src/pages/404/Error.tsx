import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import * as Style from "./style";
import { HugeEllipse } from "../../utils/globalStyles";

export function Error() {
  return (
    <div>
      <Link to="/">
        <Style.BackBtn>
          <WestIcon />
          Home
        </Style.BackBtn>
      </Link>
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <HugeEllipse>
          <Style.ErrorWord>404</Style.ErrorWord>
          <Style.ErrorReminder>
            something went wrong try again
          </Style.ErrorReminder>
        </HugeEllipse>
      </Box>
    </div>
  );
}
