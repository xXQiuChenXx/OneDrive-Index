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
  const [completed, setCompleted] = useState<{
    [k: number]: boolean;
  }>({});

  // const totalSteps = () => {
  //   return steps.length;
  // };

  // const completedSteps = () => {
  //   return Object.keys(completed).length;
  // };

  // const isLastStep = () => {
  //   return activeStep === totalSteps() - 1;
  // };

  // const allStepsCompleted = () => {
  //   return completedSteps() === totalSteps();
  // };

  // const handleNext = () => {
  //   const newActiveStep =
  //     isLastStep() && !allStepsCompleted()
  //       ? // It's the last step, but not all steps have been completed,
  //         // find the first step that has been completed
  //         steps.findIndex((step, i) => !(i in completed))
  //       : activeStep + 1;
  //   setActiveStep(newActiveStep);
  // };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  // const handleComplete = () => {
  //   const newCompleted = completed;
  //   newCompleted[activeStep] = true;
  //   setCompleted(newCompleted);
  //   handleNext();
  // };

  return (
    <Box sx={{ width: "100%" }} className="px-5">
        <h1 className="text-2xl mb-10 font-bold block text-center">Welcome, Please Configure First</h1>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.title} completed={completed[index]}>
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
            completed={completed}
            setCompleted={setCompleted}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            maxStep={steps.length}
          />
        </div>
      </div>
    </Box>
  );
}
