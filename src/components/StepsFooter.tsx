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
  setDisabled,
  disabled,
}: {
  activeStep: number;
  maxStep: number;
  disabled: boolean;
  setDisabled: Dispatch<SetStateAction<boolean>>;
  setActiveStep: Dispatch<SetStateAction<number>>;
}) {
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setDisabled(true);
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
          disabled={disabled}
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
