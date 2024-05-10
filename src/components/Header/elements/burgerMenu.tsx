import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CategoryModal from "./categoryModal";
import { modalMenus, modalMenusSM } from "../data";
import { screenWidth } from "../../../hooks/function";
import { greenBtnStyle } from "../../../utils/globalStyles";

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
        style={{ minWidth: "30px", padding: "0" }}
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
            {modalMenusSM.map((data) => {
              return (
                <MenuItem key={data.id}>
                  <Link to={`/${data.text == "home" ? "" : data.text}`}>
                    <Button
                      variant="contained"
                      sx={greenBtnStyle}
                      onClick={handleClose}
                    >
                      {data.icon}
                      {data.text}
                    </Button>
                  </Link>
                </MenuItem>
              );
            })}
            <MenuItem>
              <CategoryModal />
            </MenuItem>
          </div>
        )}

        {modalMenus.map((data) => {
          return <MenuItem key={data.id}>{data.component}</MenuItem>;
        })}
      </Menu>
    </div>
  );
}
