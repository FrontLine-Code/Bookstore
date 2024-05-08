import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { colors } from "../../../utils/variables";
import { CategoryTitle, modalStyle } from "../style";

const btnStyle = {
  backgroundColor: `${colors.asphalt}`,
};

export default function LogoutModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          backgroundColor: `${colors.red}`,
          width: "9rem",
          justifyContent: "space-between",
          "&:hover": {
            backgroundColor: `${colors.white}`,
            color: `${colors.red}`,
          },
        }}
      >
        <LogoutIcon />
        Log Out
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <CategoryTitle>Are you really going to log out ?</CategoryTitle>
            <Button variant="contained" sx={btnStyle}>
              Cancel
            </Button>
            <Button variant="contained" sx={btnStyle}>
              Log Out
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
