import AddCircleIcon from "@mui/icons-material/AddCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Favorite from "@mui/icons-material/Favorite";

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
  text: string;
  icon: JSX.Element;
  color: string;
}[] = [
  {
    id: 0,
    text: "add book",
    icon: <AddCircleIcon />,
    color: "#8BC34A",
  },
  {
    id: 1,
    text: "settings",
    icon: <SettingsIcon />,
    color: "#8BC34A",
  },
  {
    id: 2,
    text: "log out",
    icon: <LogoutIcon />,
    color: "#FC6767",
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
  }
];

export { bookTypes, modalMenus, modalMenusSM};
