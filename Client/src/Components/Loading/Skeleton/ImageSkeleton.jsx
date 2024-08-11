import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const ImageSkeleton = () => {
  return (
    <Box
      sx={{
        bgcolor: "grey",
        p: 8,
        width: "90%",
        display: "flex",
        justifyContent: "center",
        ml: "9",
      }}
    >
      <Skeleton
        sx={{ bgcolor: "grey" }}
        variant="rectangular"
        width={210}
        height={118}
      />
    </Box>
  );
};

export default ImageSkeleton;
