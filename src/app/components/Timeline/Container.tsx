import React from "react";
import { ContainerProps } from "./models";
import { styled } from "@mui/material/styles";

const ContainerDiv = styled("div")({
  backgroundColor: "rgb(15, 15, 20)",
  padding: "8px 0",
});

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <ContainerDiv {...props}>{children}</ContainerDiv>;
};
