import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import "./skeleton.scss";

export const Animations = () => {
  return (
    <Box className="skeleton-animation">
      <Skeleton sx={{ height: 70 }} />
      <Skeleton sx={{ height: 70 }} animation="wave" />
      <Skeleton sx={{ height: 70 }} animation={false} />
    </Box>
  );
};
