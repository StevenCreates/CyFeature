"use client";
import React from "react";
import { Timeline } from "@/app/components/Timeline/Timeline";
import { StepProps } from "@/app/components/Timeline/models";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import InboxIcon from "@mui/icons-material/Inbox";
import SyncIcon from "@mui/icons-material/Sync";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { SimpleAccordion } from "@/app/components/Accordion/Accordion";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Logo from "@/app/assets/icons/logo";

const firstStepComplete: StepProps[] = [
  {
    stepLabel: "Submitted",
    isComplete: true,
    icon: <HourglassEmptyIcon />,
    isError: false,
  },
  {
    stepLabel: "Awaiting Package",
    isComplete: false,
    isCurrentStep: true,
    icon: <InboxIcon />,
    isError: false,
  },
  {
    stepLabel: "Processing",
    isComplete: false,
    icon: <SyncIcon />,
    isError: false,
  },
  {
    stepLabel: "Complete",
    isComplete: false,
    icon: <CheckCircleIcon />,
    isError: false,
  },
];

const secondStepComplete: StepProps[] = [
  {
    stepLabel: "Submitted",
    isComplete: true,
    icon: <HourglassEmptyIcon />,
    isError: false,
  },
  {
    stepLabel: "Received",
    isComplete: true,
    icon: <InboxIcon />,
    isError: false,
  },
  {
    stepLabel: "Processing",
    isComplete: false,
    isCurrentStep: true,
    icon: <SyncIcon />,
    isError: false,
  },
  {
    stepLabel: "Complete",
    isComplete: false,
    icon: <CheckCircleIcon />,
    isError: false,
  },
];

const stepsComplete: StepProps[] = [
  {
    stepLabel: "Submitted",
    isComplete: true,
    icon: <HourglassEmptyIcon />,
    isError: false,
  },
  {
    stepLabel: "Received",
    isComplete: true,
    icon: <InboxIcon />,
    isError: false,
  },
  {
    stepLabel: "Processed",
    isComplete: true,
    icon: <SyncIcon />,
    isError: false,
  },
  {
    stepLabel: "Complete",
    isCurrentStep: true,
    isComplete: true,
    icon: <CheckCircleIcon />,
    isError: false,
  },
];

const errorStep: StepProps[] = [
  {
    stepLabel: "Submitted",
    isComplete: true,
    icon: <HourglassEmptyIcon />,
    isError: false,
  },
  {
    stepLabel: "Never Received",
    isCurrentStep: true,
    isComplete: false,
    icon: <InboxIcon />,
    isError: true,
  },
  {
    stepLabel: "Processing",
    isComplete: false,
    icon: <SyncIcon />,
    isError: false,
  },
  {
    stepLabel: "Complete",
    isComplete: false,
    icon: <CheckCircleIcon />,
    isError: false,
  },
];

interface SubmissionsProps {
  params: {
    user: string;
  };
}

export default function EditListingPage({ params }: SubmissionsProps) {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0 1rem",
        marginTop: "2rem",
      }}
    >
      <Logo />
      <div
        style={{
          marginTop: "2rem",
        }}
      >
        <SimpleAccordion icon={<FlightTakeoffIcon />} title="Submissions">
          <Timeline steps={firstStepComplete} title="#0003" />
          <Timeline steps={secondStepComplete} title="#0002" />
          <Timeline steps={stepsComplete} title="#0001" />
          <Timeline steps={errorStep} title="#0009" />
        </SimpleAccordion>
      </div>
    </div>
  );
}
