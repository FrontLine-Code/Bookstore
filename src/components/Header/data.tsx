import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Favorite from "@mui/icons-material/Favorite";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import GlobalModal from "../Modal/Modal";
import { greenBtnStyle, redBtnStyle } from "../../utils/globalStyles";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const bookTypes: { id: number; type: string }[] = [
  {
    id: 0,
    type: "history",
  },
  {
    id: 1,
    type: "education",
  },
  {
    id: 2,
    type: "comics",
  },
  {
    id: 3,
    type: "physics",
  },
  {
    id: 4,
    type: "programming",
  },
  {
    id: 5,
    type: "biology",
  },
];

const modalMenus: {
  id: number;
  component: JSX.Element;
}[] = [
  {
    id: 0,
    component: (
      <GlobalModal
        buttonEl={
          <>
            <AddCircleIcon />
            ADD BOOK
          </>
        }
        btnStyle={greenBtnStyle}
      >
        Edit book
      </GlobalModal>
    ),
  },
  {
    id: 0,
    component: (
      <Link to="/settings">
        <Button variant="contained" sx={greenBtnStyle}>
          <SettingsIcon />
          Settings
        </Button>
      </Link>
    ),
  },
  {
    id: 1,
    component: (
      <GlobalModal
        buttonEl={
          <>
            <LogoutIcon />
            Log Out
          </>
        }
        btnStyle={redBtnStyle}
      >
        Log out
      </GlobalModal>
    ),
  },
];

const modalMenusSM: {
  id: number;
  text: string;
  icon: JSX.Element;
  color: string;
}[] = [
  {
    id: 0,
    text: "home",
    icon: <HomeIcon />,
    color: "#8BC34A",
  },
  {
    id: 1,
    text: "books",
    icon: <LibraryBooksIcon />,
    color: "#8BC34A",
  },
  {
    id: 2,
    text: "like",
    icon: <Favorite />,
    color: "#8BC34A",
  },
];

export { bookTypes, modalMenus, modalMenusSM };
