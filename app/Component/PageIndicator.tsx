import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

interface LabelStepperProps {
    stepNum: number;
}

const steps = [
  'Enter BIN No',
  'View Information',
  'Payment Information',
  'Confirm Payment',
];

const LabelStepper: React.FC<LabelStepperProps> = ({stepNum}) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={stepNum} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default LabelStepper;
