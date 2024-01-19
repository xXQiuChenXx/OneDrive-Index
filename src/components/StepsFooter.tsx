"use client";
import { Dispatch, SetStateAction } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function StepsFooter({
  activeStep,
  maxStep,
  setActiveStep,
  completed,
  setCompleted
}: {
  activeStep: number;
  maxStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  completed: {[ k: number]: boolean};
  setCompleted: Dispatch<SetStateAction<{[k: number]: boolean}>>;
}) {
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="dots"
      steps={maxStep}
      className="w-full mx-auto mt-5"
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 500, flexGrow: 1 }}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === (maxStep - 1)}
        >
          Next
          <KeyboardArrowRight />
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          <KeyboardArrowLeft />
          Back
        </Button>
      }
    />
  );
}
