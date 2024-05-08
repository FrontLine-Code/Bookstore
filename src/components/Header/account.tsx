import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { colors } from "../../utils/variables";
import { UserName } from "./style";

export default function AvatarPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} onClick={handleClick}>
        <Avatar
          sx={{
            backgroundColor: `${colors.greenLayer}`,
            color: `${colors.darkGreen}`,
            width: "30px",
            height: "30px",
          }}
        />
      </Button>
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
        <Typography sx={{ p: 1, backgroundColor: `${colors.darkGreen}` }}>
          <UserName>A.Alisher</UserName>
        </Typography>
      </Popover>
    </div>
  );
}
