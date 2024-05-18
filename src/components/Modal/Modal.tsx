import React from "react";
import { CSSProperties } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { SxProps, Theme } from "@mui/material";
import { modalStyle } from "./style";

interface ModalProps {
  children: React.ReactNode;
  buttonEl: React.ReactNode;
  btnStyle: CSSProperties;
}

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
        <Box sx={modalStyle}>{children}</Box>
      </Modal>
    </Box>
  );
};

export default GlobalModal;