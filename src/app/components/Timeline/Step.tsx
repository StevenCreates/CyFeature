import React from "react";
import { styled } from "@mui/material/styles";
import { StepProps } from "./models";

const IconContainer = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "isCurrentStep" && prop !== "isComplete" && prop !== "isError",
})<Pick<StepProps, "isCurrentStep" | "isComplete" | "isError">>(
  ({ isCurrentStep, isComplete, isError }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: (() => {
      if (isError) return "rgb(239, 68, 68)";
      if (isCurrentStep) return "rgb(45, 56, 239)";
      if (isComplete) return "rgb(47, 91, 249)";
      return "rgba(255, 255, 255, 0.1)";
    })(),
    transition: "background-color 0.3s ease",
    "& svg": {
      fontSize: "16px",
    },
  })
);

export const Step: React.FC<StepProps> = ({
  isCurrentStep = false,
  isComplete = false,
  isError = false,
  icon,
  ...props
}) => {
  return (
    <IconContainer
      isCurrentStep={isCurrentStep}
      isComplete={isComplete}
      isError={isError}
      {...props}
    >
      {icon}
    </IconContainer>
  );
};
