import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EastIcon from "@mui/icons-material/East";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar, Button, Popover, Tooltip, Typography } from "@mui/material";
import BasicMenu from "./basicMenu";
import { Container } from "../Common";
import {
  AccountWrapper,
  ActionsWrapper,
  CatalogTitle,
  CatalogType,
  CatalogWrapper,
  HeaderBg,
  HeaderWrapper,
  Navbar,
  NavbarCatalog,
  NavbarLink,
  SearchBtn,
  SearchInp,
  SearchWrapper,
  UserName,
} from "./style";
import { bookTypes } from "./data";
import { Logo } from "../../assets/icons";
import { colors } from "../../utils/variables";
import AvatarPopover from "./basicPopover";
import { screenWidth } from "../../hooks/function";

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
  } = {
    home: {
      $active: currentUrl === "/",
      children: "Home",
    },
    books: {
      $active: currentUrl === "/books",
      children: "Books",
    },
  };

  return (
    <HeaderBg>
      <Container>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>

          <Navbar>
            <Link to="/">
              <NavbarLink {...navbarLinks.home} />
            </Link>

            <Link to="/books">
              <NavbarLink {...navbarLinks.books} />
            </Link>

            <NavbarCatalog
              onMouseEnter={handleClick}
              aria-describedby={id}
              style={{
                border: `2px solid ${open ? colors.white : colors.green}`,
              }}
            >
              Catalog
              <ExpandMoreIcon
                style={{
                  transform: `rotateZ(${open ? 180 : 0}deg)`,
                  transition: "0.2s",
                }}
                fontSize="small"
              />
            </NavbarCatalog>

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
                <CatalogTitle>Types of books</CatalogTitle>
                <CatalogWrapper>
                  {bookTypes.map((data) => {
                    return (
                      <Link to={`/books/${data.type}`} key={data.id}>
                        <CatalogType>
                          {data.type}
                          <EastIcon fontSize="small" />
                        </CatalogType>
                      </Link>
                    );
                  })}
                </CatalogWrapper>
              </Typography>
            </Popover>
          </Navbar>

          <SearchWrapper>
            <SearchBtn>
              <Link to={`/books/${inputValue}`}>
                <SearchIcon sx={{ color: "white" }} fontSize="small" />
              </Link>
            </SearchBtn>
            <SearchInp
              placeholder="Search"
              type="search"
              value={inputValue}
              onChange={handleChange}
            />
          </SearchWrapper>

          <ActionsWrapper>
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
              <AvatarPopover />
            ) : (
              <AccountWrapper>
                <UserName>A.Alisher</UserName>
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
              </AccountWrapper>
            )}

            <BasicMenu />
          </ActionsWrapper>
        </HeaderWrapper>
      </Container>
    </HeaderBg>
  );
}
