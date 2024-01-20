"use client"
import { IconCircleCheckFilled, IconXboxX } from "@tabler/icons-react";
import { useEffect, type Dispatch, type SetStateAction } from "react";

const StepOne = ({
  config,
  isDatabaseAvailable,
  setDisabled,
}: {
  config: any;
  isDatabaseAvailable: boolean;
  setDisabled: Dispatch<SetStateAction<boolean>>;
}) => {
  const missedConfig = Object.keys(config)
    .map((key) => (config?.[key] ? null : config?.[key]))
    .filter((x) => x !== null);

  const isPassed = !missedConfig.length && isDatabaseAvailable;

  useEffect(() => {
    setDisabled(isPassed ? false : true);
  }, [missedConfig, isDatabaseAvailable])

  return (
    <div>
      <h1 className="text-gray-400 text-md">Step 1</h1>
      <h1 className="text-xl font-bold">Configuration Validation</h1>
      <div className="mt-3  ">
        {Object.keys(config).map((key, i) => {
          return (
            <p className="my-1" key={i + 1}>
              {config?.[key] ? (
                <IconCircleCheckFilled className="inline-block mr-3" />
              ) : (
                <IconXboxX className="inline-block mr-3" />
              )}
              {key}
            </p>
          );
        })}
        <p className="my-1">
          {isDatabaseAvailable ? (
            <IconCircleCheckFilled className="inline-block mr-3" />
          ) : (
            <IconXboxX className="inline-block mr-3" />
          )}
          Database
        </p>
      </div>
      {isPassed ? (
        <p className="text-green-600 text-center mt-3">*Congraturation! All your configuration are all setted!*</p>
      ) : (
        <p className="text-red-600 text-center mt-3">*Oops... Looks like your configuration having problem, please check again*</p>
      )}
    </div>
  );
};

export default StepOne;
