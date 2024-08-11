import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const CardSkeleton = () => {
  return (
    <Grid container spacing={4}>
      {Array.from(new Array(3)).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box sx={{ padding: 2 }}>
            <Skeleton variant="rectangular" width="100%" height={200} />
            <Skeleton variant="text" sx={{ fontSize: "1rem", mt: 2 }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem", mt: 1 }} />
            {/* <Skeleton variant="text" sx={{ fontSize: "1rem", mt: 1 }} /> */}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardSkeleton;
