import React from "react";
import { styled } from "@mui/material/styles";
import { StepLabelProps } from "./models";

const LabelText = styled("div")({
  fontSize: "12px",
  fontWeight: 600,
  marginTop: "8px",
  color: "rgb(139, 148, 163)",
  textAlign: "center",
  width: "80px",
  wordWrap: "break-word",
});

export const StepLabel: React.FC<StepLabelProps> = ({ children, ...props }) => {
  return <LabelText {...props}>{children}</LabelText>;
};
