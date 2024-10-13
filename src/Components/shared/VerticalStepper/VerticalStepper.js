import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

import {
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  stepConnectorClasses,
  styled,
} from '@mui/material';
import { DoubleChevron } from '../../../Assets/Svgs/DoubleChevron';
import BisanCard from '../UI/BisanCard/BisanCard';

export default function VerticalStepper({
  steps,
  activeStep,
  handleStepChange,
}) {
  const isDesktopDisplay = useIsDesktopDisplay();

  return (
    <BisanCard
      sx={{
        width: '100%',
        // padding: isDesktopDisplay ? '24px' : '20px 16px',
        // position: 'sticky',
        // top: '20px',
      }}
    >
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        connector={<CustomizedConnector />}
      >
        {steps.map((step, index) => (
          <Step
            key={step.label}
            onClick={() => handleStepChange(step.hash, index)}
          >
            <StepLabel StepIconComponent={CustomizedStep}>
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </BisanCard>
  );
}

function CustomizedStep({ active, completed }) {
  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor:
            active || completed ? 'rgb(237, 224, 89)' : 'rgb(215, 215, 215)',
          position: 'relative',
        }}
      ></div>
      {active && <DoubleChevron />}
    </div>
  );
}

const CustomizedConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.root}`]: {
    marginLeft: '5px',
    marginTop: '-13px',
    marginBottom: '-13px',
    [`& .${stepConnectorClasses.lineVertical}`]: {
      width: '3px',
      left: '-4px',
      border: 0,
      backgroundColor: 'rgb(215, 215, 215)',
      borderRadius: 1,
      height: '37px',
    },
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.lineVertical}`]: {
      backgroundColor: 'rgb(237, 224, 89)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.lineVertical}`]: {
      backgroundColor: 'rgb(237, 224, 89)',
    },
  },
}));
