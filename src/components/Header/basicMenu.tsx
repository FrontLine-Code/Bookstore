import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { modalMenus } from "./data";
import { screenWidth } from "../../hooks/function";
import { colors } from "../../utils/variables";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize="large" sx={{ color: "white" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {screenWidth >= 1070 ? (
          ""
        ) : (
          <div>
            <MenuItem>
              <Link to="/">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: `${colors.green}`,
                    width: "9rem",
                    justifyContent: "space-between",
                    "&:hover": {
                      backgroundColor: `${colors.white}`,
                      color: `${colors.green}`,
                    },
                  }}
                  onClick={handleClose}
                >
                  <HomeIcon />
                  Home
                </Button>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/books">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: `${colors.green}`,
                    width: "9rem",
                    justifyContent: "space-between",
                    "&:hover": {
                      backgroundColor: `${colors.white}`,
                      color: `${colors.green}`,
                    },
                  }}
                  onClick={handleClose}
                >
                  <LibraryBooksIcon />
                  Books
                </Button>
              </Link>
            </MenuItem>
          </div>
        )}
        {modalMenus.map((data) => {
          return (
            <MenuItem key={data.id}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: `${data.color}`,
                  width: "9rem",
                  justifyContent: "space-between",
                  "&:hover": {
                    backgroundColor: `${colors.white}`,
                    color: `${data.color}`,
                  },
                }}
                onClick={handleClose}
              >
                {data.icon}
                {data.text}
              </Button>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
