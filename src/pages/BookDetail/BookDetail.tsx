import { Box, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Card } from "../../components/Card/Card";
import BookImg from "../../assets/images/book-img.png";
import { Container, GradientTitle } from "../../utils/globalStyles";
import { colors } from "../../utils/variables";
import * as Style from "./style";
import { useEffect, useState } from "react";
import { CardSkeleton } from "../../components/CardSkeleton/CardSkeleton";

export function BookDetail() {
  const [product, setProduct] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProduct(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <Header />
      <GradientTitle>Book Details</GradientTitle>
      <Container>
        <Style.BookWrapper>
          <Box sx={{ display: "flex" }}>
            <img src={BookImg} width={200} alt="book" />
            <Style.BookDetails>
              <Style.BookTitle>
                Speak fear of being in public or just a normal fear
              </Style.BookTitle>
              <Style.BookTypography>Type: educational</Style.BookTypography>
              <Style.BookTypography>
                Author: William Kenidi
              </Style.BookTypography>
              <Style.BookTypography>Year: 2014</Style.BookTypography>
            </Style.BookDetails>

            <Style.BookActions>
              <Button sx={{ color: `${colors.green}`, minWidth: "5px" }}>
                <FavoriteBorderIcon />
              </Button>
              <Button sx={{ color: `${colors.green}`, minWidth: "5px" }}>
                <EditIcon />
              </Button>
              <Button sx={{ color: `${colors.red}`, minWidth: "5px" }}>
                <DeleteIcon />
              </Button>
            </Style.BookActions>
          </Box>

          <Style.BookTitle style={{ marginBlock: "15px" }}>
            Cover
          </Style.BookTitle>
          <Style.BookTypography>
            A book is a medium for recording information in the form of writing
            or images. Books are typically composed of many pages, bound
            together and protected by a cover. Modern bound books were preceded
            by many other written mediums, such as the codex and the scroll.
          </Style.BookTypography>
        </Style.BookWrapper>
      </Container>
      <GradientTitle>Other Books</GradientTitle>
      <Container>
        {product ? (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "left",
              columnGap: "5.65%",
              rowGap: "20px",
            }}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Box>
        ) : (
          <CardSkeleton />
        )}
      </Container>
      <Footer />
    </Box>
  );
}
