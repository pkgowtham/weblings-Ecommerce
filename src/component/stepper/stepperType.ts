export interface Step {
    label: string;
  }
  
export interface StepperProps {
    steps: Step[];
    activeStep: number;
  }