import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { CardSkeleton } from "../../components/CardSkeleton/CardSkeleton";
import { Container, GradientTitle } from "../../utils/globalStyles";
import { Card } from "../../components/Card/Card";

export function Home() {
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
      <GradientTitle>Products</GradientTitle>
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
            <Card />
            <Card />
            <Card />
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
