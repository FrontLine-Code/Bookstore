import { Box } from "@mui/material";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { GradientTitle } from "../../utils/globalStyles";
import { Card } from "../../components/Card/Card";

export function Home() {
  return (
    <Box>
      <Header />
      <GradientTitle>Products</GradientTitle>
      <Card/>
      <Footer />
    </Box>
  );
}
