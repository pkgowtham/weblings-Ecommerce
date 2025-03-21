import React, { useEffect, useRef, useState } from "react";
import { useStyle } from "./stepperStyle";
import clsx from "clsx";
import Typography from "../typography/component";
import { theme } from "../../../theme/theme";
import SvgPriorityHigh from "../../../src/assets/icons/priority_high.svg";
import SvgDone from "../../../src/assets/icons/done.svg";

interface StepData {
  label: string;
  status?: "success" | "failed" | "pending";
  
}

interface CheckoutStepperProps {
  data: any;
}

const CheckoutStepper: React.FC<CheckoutStepperProps> = ({ data = [] }) => {
  const classes = useStyle();
  const [margins, setMargins] = useState<{
    marginLeft: number;
    marginRight: number;
  }>({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (data.length > 0) {
      const firstStep = stepRef.current[0];
      const lastStep = stepRef.current[data.length - 1];

      if (firstStep && lastStep) {
        setMargins({
          marginLeft: firstStep.offsetWidth / 2,
          marginRight: lastStep.offsetWidth / 2,
        });
      }
    }
  }, [stepRef, data.length]);


  const calculateProgressBarWidth = () => {
    const completedSteps = data.filter(
      (step:any) =>
        step.status === "success" ||
        step.status === "pending" ||
        step.status === "failed"
    ).length;
    const totalSteps = data.length;

    if (completedSteps === 0) return 0;
    
    return ((completedSteps - 1) / (totalSteps - 1)) * 100;
  };

  const getStepState = (index: number) => {
    const step = data[index];
    if (step.status === "success") return "complete";
    if (step.status === "failed") return "failed";
    if (step.status === "pending") return "active";
    return "disabled";
  };

  if (!data.length) {
    return <></>;
  }

  return (
    <div className={classes.stepper}>
      {data.map((step:any, index:number) => (
        <div
          key={step.label}
          ref={(el) => (stepRef.current[index] = el)}
          className={clsx(classes.step)}
        >
          <div
            className={clsx(classes.stepNumber, {
              [classes.complete]: getStepState(index) === "complete",
              [classes.active]: getStepState(index) === "active",
              [classes.failed]: getStepState(index) === "failed",
              [classes.disabled]: getStepState(index) === "disabled",
            })}
          >
            {getStepState(index) === "failed" ? (
              <SvgPriorityHigh  />
            ) : getStepState(index) === "complete" ? (
              <SvgDone  />
            ) : (
              index + 1
            )}
          </div>
          <Typography
            variant="BXS"
            style={{
              color:
                getStepState(index) === "complete"
                  ? theme.light.neutral.onSurface.medium
                  : getStepState(index) === "failed"
                  ? theme.light.negative.surface.medium
                  : getStepState(index) === "active"
                  ? theme.light.brand.onSurface.default
                  : theme.light.neutral.onSurface.dark,
            }}
          >
            {step.label}
          </Typography>
        </div>
      ))}

      <div
        className={classes.progressBar}
        style={{
          width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
          marginLeft: margins.marginLeft,
          marginRight: margins.marginRight,
        }}
      >
        <div
          className={classes.progress}
          style={{
            width: `${calculateProgressBarWidth()}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default CheckoutStepper;
