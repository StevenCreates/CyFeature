import React from "react";
import Typography from "@mui/material/Typography";
import { TitleProps } from "./models";

export const Title: React.FC<TitleProps> = ({ children, ...props }) => {
  return (
    <Typography
      variant="h6"
      component="h2"
      sx={{
        fontSize: "14px",
        fontWeight: 600,
        marginLeft: "12px",
        marginBottom: "10px",
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};
