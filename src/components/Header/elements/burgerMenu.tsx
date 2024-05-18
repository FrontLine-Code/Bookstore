import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CategoryIcon from "@mui/icons-material/Category";
import EastIcon from "@mui/icons-material/East";
import { bookTypes, modalMenus, modalMenusSM } from "../data";
import GlobalModal from "../../Modal/Modal";
import { screenWidth } from "../../../hooks/function";
import { greenBtnStyle } from "../../../utils/globalStyles";
import * as Style from "../style";

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
              <GlobalModal
                buttonEl={
                  <>
                    <CategoryIcon />
                    Category
                  </>
                }
                btnStyle={greenBtnStyle}
              >
                <Style.CategoryTitle>Types of books</Style.CategoryTitle>
                <Style.CategoryWrapper>
                  {bookTypes.map((data) => {
                    return (
                      <Link to={`/books/${data.type}`} key={data.id}>
                        <Style.CategoryLink>
                          {data.type}
                          <EastIcon fontSize="small" />
                        </Style.CategoryLink>
                      </Link>
                    );
                  })}
                </Style.CategoryWrapper>
              </GlobalModal>
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
