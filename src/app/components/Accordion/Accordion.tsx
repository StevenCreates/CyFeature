import React, { ReactNode } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface SimpleAccordionProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export const SimpleAccordion: React.FC<SimpleAccordionProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: "rgb(15, 15, 20)",
          color: "white",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          "&.MuiAccordion-root": {
            "&.Mui-expanded": {
              color: "white",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            },
            "&.MuiIconButton-root": {
              color: "white",
            },
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "rgb(33, 33, 38)" }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            {icon}
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};
