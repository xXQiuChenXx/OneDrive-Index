import React from "react";
import config from "@/config/api.config";
import Steps from "@/components/Steps";
import StepOne from "@/components/steps/StepOne";
import StepTwo from "@/components/steps/StepTwo";
import StepThree from "@/components/steps/StepThree";

const Setup = () => {
  const STEPS = [
    {
      title: "Step One",
      component: <StepOne config={config}/>,
    },
    {
      title: "Step Two",
      component: <StepTwo />,
    },
    {
      title: "Step Three",
      component: <StepThree />,
    },
  ];
 
  return (
    <div className="container mx-auto mt-10">
      <Steps steps={STEPS} />
    </div>
  );
};

export default Setup;
