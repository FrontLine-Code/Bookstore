import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EastIcon from "@mui/icons-material/East";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Avatar, Button, Popover, Tooltip, Typography } from "@mui/material";
import BasicMenu from "./elements/burgerMenu";
import { Container } from "../../utils/globalStyles";
import { bookTypes } from "./data";
import { screenWidth } from "../../hooks/function";
import * as Style from "./style";
import { colors } from "../../utils/variables";

export function Header() {
  const [inputValue, setInputValue] = useState("");
  const currentUrl = window.location.href.slice(21);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const navbarLinks: {
    home: {
      $active: boolean;
      children: React.ReactNode;
    };
    books: {
      $active: boolean;
      children: React.ReactNode;
    };
    settings: {
      $active: boolean;
      children: React.ReactNode;
    };
  } = {
    home: {
      $active: currentUrl === "/",
      children: "Home",
    },
    books: {
      $active: currentUrl === "/books",
      children: "Books",
    },
    settings: {
      $active: currentUrl === "/settings",
      children: "Settings",
    },
  };

  return (
    <Style.HeaderBg>
      <Container>
        <Style.HeaderWrapper>
          <Link to="/">
            <Style.LogoWrapper>
              <AutoStoriesIcon
                sx={{
                  fontSize: 38,
                  "@media (max-width: 750px)": {
                    fontSize: 25,
                  },
                }}
              />
              <Style.LogoText>Bookstore</Style.LogoText>
            </Style.LogoWrapper>
          </Link>

          <Style.Navbar>
            <Link to="/">
              <Style.NavbarLink {...navbarLinks.home} />
            </Link>

            <Link to="/books">
              <Style.NavbarLink {...navbarLinks.books} />
            </Link>

            <Style.NavbarCategory
              onMouseEnter={handleClick}
              aria-describedby={id}
              style={{
                border: `2px solid ${open ? colors.white : colors.green}`,
              }}
            >
              Category
              <ExpandMoreIcon
                style={{
                  transform: `rotateZ(${open ? 180 : 0}deg)`,
                  transition: "0.2s",
                }}
                fontSize="small"
              />
            </Style.NavbarCategory>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}>
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
              </Typography>
            </Popover>
          </Style.Navbar>

          <Style.SearchWrapper>
            <Style.SearchBtn>
              <Link to={`/books/${inputValue}`}>
                <SearchIcon
                  sx={{
                    color: "white",
                    fontSize: 22,

                    "@media (max-width: 750px)": {
                      fontSize: 16,
                    },
                  }}
                  fontSize="small"
                />
              </Link>
            </Style.SearchBtn>
            <Style.SearchInp
              placeholder="Search"
              type="search"
              value={inputValue}
              onChange={handleChange}
            />
          </Style.SearchWrapper>
          <Style.ActionsWrapper>
            <Link to="/like">
              <Button
                sx={{
                  color: "white",
                  "@media (max-width: 750px)": {
                    display: "none",
                  },
                }}
              >
                <Tooltip title="liked books" arrow placement="bottom">
                  {currentUrl === "/like" ? (
                    <FavoriteIcon />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </Tooltip>
              </Button>
            </Link>

            {screenWidth <= 650 ? (
              ""
            ) : (
              <Style.AccountWrapper to="/settings" {...navbarLinks.settings}>
                <Style.UserName {...navbarLinks.settings}>
                  A.Alisher
                </Style.UserName>
                <Avatar
                  sx={{
                    backgroundColor: `${colors.greenLayer}`,
                    color: `${colors.darkGreen}`,
                    "@media (max-width: 1000px)": {
                      width: "30px",
                      height: "30px",
                    },
                  }}
                />
              </Style.AccountWrapper>
            )}

            <BasicMenu />
          </Style.ActionsWrapper>
        </Style.HeaderWrapper>
      </Container>
    </Style.HeaderBg>
  );
}
