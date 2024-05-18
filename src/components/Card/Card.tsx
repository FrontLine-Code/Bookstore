import { Box } from "@mui/material";
import ProductImg from "../../assets/images/book-img.png";

export function Card() {
  return (
    <Box>
      <img src={ProductImg} alt="product-img"/>
    </Box>
  );
}
