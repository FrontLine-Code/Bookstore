import { Box, Skeleton } from "@mui/material";

export function CardSkeleton() {
  const skeletonCards = [];

  for (let i = 0; i < 5; i++) {
    skeletonCards.push(
      <Skeleton
        key={i}
        sx={{ bgcolor: "grey.500", borderRadius: "30px" }}
        variant="rectangular"
        width={220}
        height={375}
      />
    );
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "left",
        columnGap: "5.65%",
        rowGap: "20px",
      }}
    >
      {skeletonCards}
    </Box>
  );
}
