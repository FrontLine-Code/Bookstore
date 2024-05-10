import React from "react";
import { CSSProperties } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { SxProps, Theme } from "@mui/material";

interface ModalProps {
  children: React.ReactNode;
  buttonEl: React.ReactNode;
  btnStyle: CSSProperties;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const GlobalModal: React.FC<ModalProps> = ({
  children,
  buttonEl,
  btnStyle,
}) => {
  const [unfold, setUnfold] = React.useState(false);
  const handleOpen = () => setUnfold(true);
  const handleClose = () => setUnfold(false);

  return (
    <Box>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ ...(btnStyle as SxProps<Theme>) }}
      >
        {buttonEl}
      </Button>
      <Modal
        open={unfold}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </Box>
  );
};

export default GlobalModal;
