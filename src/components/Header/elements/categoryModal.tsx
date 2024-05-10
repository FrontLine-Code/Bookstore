import * as React from "react";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import CategoryIcon from "@mui/icons-material/Category";
import EastIcon from "@mui/icons-material/East";
import { bookTypes } from "../data";
import { CategoryLink, CategoryTitle, CategoryWrapper, modalStyle } from "../style";
import { greenBtnStyle } from "../../../utils/globalStyles";

export default function CategoryModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={greenBtnStyle}
      >
        <CategoryIcon />
        Category
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
            <CategoryTitle>Types of books</CategoryTitle>
            <CategoryWrapper>
              {bookTypes.map((data) => {
                return (
                  <Link to={`/books/${data.type}`} key={data.id}>
                    <CategoryLink>
                      {data.type}
                      <EastIcon fontSize="small" />
                    </CategoryLink>
                  </Link>
                );
              })}
            </CategoryWrapper>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
