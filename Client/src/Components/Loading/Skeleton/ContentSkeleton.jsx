import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function ContentSkeleton({ width = 300, height = 40 }) {
  return (
    <Box sx={{ width }}>
      <Skeleton height={height} />
      <Skeleton height={height} animation="wave" />
      <Skeleton height={height} animation="wave" />
      <Skeleton height={height} animation="wave" />
      <Skeleton height={height} animation={false} />
    </Box>
  );
}
