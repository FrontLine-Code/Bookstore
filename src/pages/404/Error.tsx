import { Link } from "react-router-dom";
import { BackBtn, ErrorReminder, ErrorWord, HugeEllipse } from "./style";
import WestIcon from "@mui/icons-material/West";

export function Error() {
  return (
    <div>
      <Link to="/">
        <BackBtn>
          <WestIcon />
          Home
        </BackBtn>
      </Link>
      <HugeEllipse>
        <ErrorWord>404</ErrorWord>
        <ErrorReminder>something went wrong try again</ErrorReminder>
      </HugeEllipse>
    </div>
  );
}
