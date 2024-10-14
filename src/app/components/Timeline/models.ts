import React, { ReactNode } from "react";

export interface StepProps {
  isComplete: boolean;
  isCurrentStep?: boolean;
  icon?: ReactNode;
  isError?: boolean;
  stepLabel: string;
}

export interface TimelineProps {
  title: ReactNode;
  steps: StepProps[];
}

export interface ContainerProps {
  children: ReactNode;
}

export interface TitleProps {
  children: ReactNode;
}

export interface StepLabelProps {
  children: ReactNode;
}

export interface LineProps extends React.HTMLAttributes<HTMLDivElement> {
  isCurrentStep: boolean | undefined;
  isComplete: boolean;
}
