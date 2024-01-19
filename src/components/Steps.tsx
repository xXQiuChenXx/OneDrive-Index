"use client";

import { ReactElement, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import StepsFooter from "./StepsFooter";

type demo = {
  title: string;
  component: ReactElement;
};

export default function Steps({ steps }: { steps: demo[] }) {
  const [activeStep, setActiveStep] = useState(0);


  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%" }} className="px-5">
        <h1 className="text-2xl mb-10 font-bold block text-center">Welcome, Please Configure First</h1>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.title} >
            <StepButton color="inherit" onClick={handleStep(index)}>
              {step.title}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div className="flex flex-col items-center my-10">
        <div className="w-full md:w-6/12 border rounded-lg shadow-md p-5">
          {steps[activeStep].component}
          <StepsFooter
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            maxStep={steps.length}
          />
        </div>
      </div>
    </Box>
  );
}
