import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VerticalStepper from 'Components/shared/VerticalStepper/VerticalStepper';
import { Consultation } from 'Components/shared/Consultation/Consultation';

// const steps = [
//   {
//     label: 'قیمت و پکیج های تور',
//     hash: '#test1',
//   },
//   {
//     label: 'آنتالیا',
//     hash: '#test2',
//   },
//   {
//     label: 'آب و هوا',
//     hash: '#test3',
//   },
//   {
//     label: 'فرودگاه های آنتالیا',
//     hash: '#test3',
//   },
//   {
//     label: 'نقشه مترو',
//     hash: '#test3',
//   },
//   {
//     label: 'جاذبه های گردشگری',
//     hash: '#test3',
//   },
//   {
//     label: 'هزینه سفر به آنتالیا',
//     hash: '#test3',
//   },
// ];

export default function VisaSlugSide({ steps }) {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);

  function handleStepChange(hash, index) {
    setActiveStep(index);
    navigate(hash);
  }

  return (
    <div
      style={{
        //  border: '1px solid red',
        height: '100%',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: '100px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <VerticalStepper
          activeStep={activeStep}
          steps={steps}
          handleStepChange={handleStepChange}
        ></VerticalStepper>
        <Consultation />
      </div>
    </div>
  );
}
