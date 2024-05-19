import { Box } from "@mui/material";
// import { Card } from "../../components/Card/Card";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import {
  Container,
  GradientTitle,
  HugeEllipse,
} from "../../utils/globalStyles";

export function Like() {
  return (
    <div>
      <Header />
      <GradientTitle>Liked Books</GradientTitle>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "left",
            columnGap: "5%",
            rowGap: "20px",
          }}
        >
          <HugeEllipse>You've not liked books yet</HugeEllipse>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
