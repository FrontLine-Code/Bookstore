import * as React from "react";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import CategoryIcon from "@mui/icons-material/Category";
import EastIcon from "@mui/icons-material/East";
import { bookTypes } from "./data";
import { colors } from "../../utils/variables";
import { CategoryLink, CategoryTitle, CategoryWrapper } from "./style";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 330,
  borderRadius: 8,
  bgcolor: `${colors.white}`,
  boxShadow: 24,
  p: 4,
};

export default function CategoryModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          backgroundColor: `${colors.green}`,
          width: "9rem",
          justifyContent: "space-between",
          "&:hover": {
            backgroundColor: `${colors.white}`,
            color: `${colors.green}`,
          },
        }}
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
          <Box sx={style}>
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
