import { useState } from "react";
import { Box, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import * as Style from "./style";
import { colors } from "../../utils/variables";

interface TruncatedTextProps {
  text: string;
  limit: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, limit }) => {
  const [like, setLiked] = useState(false);

  const truncatedText =
    text.length > limit ? text.substring(0, limit) + "..." : text;

  return (
    <Style.InfoWrapper>
      <Style.Text>{truncatedText}</Style.Text>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Style.Extender to="/book-detail">Show More</Style.Extender>
        <Button
          sx={{ color: `${colors.green}` }}
          onClick={() => (like ? setLiked(false) : setLiked(true))}
        >
          {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>
      </Box>
    </Style.InfoWrapper>
  );
};

export default TruncatedText;
