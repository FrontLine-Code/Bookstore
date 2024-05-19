import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
} from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Container, GradientTitle } from "../../utils/globalStyles";
import { colors } from "../../utils/variables";
import { Russia } from "../../assets/icons/Russia";
import { British } from "../../assets/icons/British";
import { Uzbek } from "../../assets/icons/Uzbek";

interface ChildComponentProps {
  mode: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Settings: React.FC<ChildComponentProps> = ({ mode, setMode }) => {
  const [value, setValue] = React.useState("#ffffff");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <Header />
      <GradientTitle>Settings</GradientTitle>
      <Container>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Personal
              </ListSubheader>
            }
          >
            <ListItem disablePadding>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    fontSize: 30,
                    marginRight: "20px",
                  }}
                >
                  A
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="UserName"
                secondary="Abdrimov Alisher"
              ></ListItemText>
            </ListItem>
          </List>
          <Divider />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Website UI
              </ListSubheader>
            }
          >
            <ListItem disablePadding>
              <MuiColorInput
                format="hex"
                value={value}
                onChange={handleChange}
              />
            </ListItem>
          </List>
          <Divider />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Theme
              </ListSubheader>
            }
          >
            <ListItem disablePadding>
              <Button
                sx={{ color: `${colors.gray}` }}
                variant="contained"
                onClick={() => {
                  mode ? setMode(false) : setMode(true);
                }}
              >
                {mode ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    light mode
                    <Brightness7Icon />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    dark mode
                    <Brightness4Icon />
                  </Box>
                )}
              </Button>
            </ListItem>
          </List>
          <Divider />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Language
              </ListSubheader>
            }
          >
            <ListItem disablePadding>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                variant="contained"
                sx={{color: `${colors.gray}`}}
              >
                Choose
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
                <MenuItem onClick={handleClose}>
                  <British /> English
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Russia /> Russian
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Uzbek /> Uzbek
                </MenuItem>
              </Menu>
            </ListItem>
          </List>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};
