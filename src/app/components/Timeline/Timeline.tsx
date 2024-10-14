import React from "react";
import { Step } from "./Step";
import { Line } from "./Line";
import { Container } from "./Container";
import { Title } from "./Title";
import { StepLabel } from "./StepLabel";
import {
  TimelineProps,
  StepLabelProps,
  TitleProps,
  ContainerProps,
  StepProps,
  LineProps,
} from "./models";
import { styled } from "@mui/material/styles";

const StepsRow = styled("div")({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
});

const StepItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Timeline: React.FC<TimelineProps> & {
  Step: React.FC<StepProps>;
  Container: React.FC<ContainerProps>;
  Title: React.FC<TitleProps>;
  StepLabel: React.FC<StepLabelProps>;
  Line: React.FC<LineProps>;
} = ({ title, steps }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <StepsRow>
        {steps.map((step, index) => (
          <React.Fragment key={step.stepLabel}>
            <StepItem>
              <Step
                isComplete={step.isComplete}
                isCurrentStep={step.isCurrentStep}
                isError={step.isError}
                icon={step.icon}
                stepLabel={step.stepLabel}
              />
              <StepLabel>{step.stepLabel}</StepLabel>
            </StepItem>
            {index < steps.length - 1 && (
              <Line
                isCurrentStep={steps[index + 1].isCurrentStep}
                isComplete={step.isComplete}
              />
            )}
          </React.Fragment>
        ))}
      </StepsRow>
    </Container>
  );
};

Timeline.Step = Step;
Timeline.Container = Container;
Timeline.Title = Title;
Timeline.StepLabel = StepLabel;
Timeline.Line = Line;
