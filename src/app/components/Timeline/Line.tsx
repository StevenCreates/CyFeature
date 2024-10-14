import React from "react";
import { styled, keyframes } from "@mui/material/styles";
import { LineProps } from "./models";

const pulseAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const LineDiv = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "isCurrentStep" && prop !== "isComplete",
})<LineProps>(({ isCurrentStep, isComplete }) => ({
  height: "2px",
  width: "100%",
  backgroundColor: isComplete ? "rgb(47, 91, 249)" : "rgba(255, 255, 255, 0.1)",
  transition: "background-color 0.3s ease",
  margin: "18px 8px 0 8px",
  alignSelf: "flex-start",
  "@media (max-width: 430px)": {
    display: "none",
  },
  ...(isCurrentStep && {
    background:
      "linear-gradient(90deg, rgb(47, 91, 249), rgba(47, 91, 249, 0.5))",
    backgroundSize: "200% 100%",
    animation: `${pulseAnimation} 2s infinite ease-in-out`,
  }),
}));

export const Line: React.FC<LineProps> = ({
  isCurrentStep,
  isComplete,
  ...props
}) => {
  return (
    <LineDiv isCurrentStep={isCurrentStep} isComplete={isComplete} {...props} />
  );
};
