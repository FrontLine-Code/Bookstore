import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LogoText, LogoWrapper, Navbar } from "../Header/style";
import * as Style from "./style";
import { Container } from "../../utils/globalStyles";

export function Footer() {
  const currentUrl = window.location.href.slice(21);

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
    like: {
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
    like: {
      $active: currentUrl === "/like",
      children: "Like",
    },
  };

  return (
    <Box>
      <Style.MainFooterBg>
        <Container>
          <Style.FooterInnerWrapper>
            <Link to="/">
              <LogoWrapper>
                <AutoStoriesIcon
                  sx={{
                    fontSize: 38,
                    "@media (max-width: 750px)": {
                      fontSize: 25,
                    },
                  }}
                />
                <LogoText>Bookstore</LogoText>
              </LogoWrapper>
            </Link>

            <Navbar>
              <Link to="/">
                <Style.FooterLink {...navbarLinks.home} />
              </Link>

              <Link to="/books">
                <Style.FooterLink {...navbarLinks.books} />
              </Link>

              <Link to="/settings">
                <Style.FooterLink {...navbarLinks.settings} />
              </Link>

              <Link to="/like">
                <Style.FooterLink {...navbarLinks.like} />
              </Link>
            </Navbar>

            <Navbar>
              <Link to="https://t.me/frontline110" target="_blank">
                <Style.FooterSocial>
                  <TelegramIcon />
                </Style.FooterSocial>
              </Link>

              <Link
                to="https://www.facebook.com/profile.php?id=61559248544604"
                target="_blank"
              >
                <Style.FooterSocial>
                  <FacebookIcon />
                </Style.FooterSocial>
              </Link>

              <Link
                to="https://www.instagram.com/frontyard.inc/"
                target="_blank"
              >
                <Style.FooterSocial>
                  <InstagramIcon />
                </Style.FooterSocial>
              </Link>

              <Link
                to="https://www.linkedin.com/in/frontyard-inc-190190287/"
                target="_blank"
              >
                <Style.FooterSocial>
                  <LinkedInIcon />
                </Style.FooterSocial>
              </Link>
            </Navbar>
          </Style.FooterInnerWrapper>
        </Container>
      </Style.MainFooterBg>

      <Style.FooterRights>
        ©2024 The Bookstore. All rights reserved.
      </Style.FooterRights>
    </Box>
  );
}
