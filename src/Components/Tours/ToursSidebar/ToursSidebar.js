import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usePersianNumber from '../../../hooks/usePersianNumber';

import rectangleturkey from 'Assets/images/rectangleturkey.png';

import VerticalStepper from '../../shared/VerticalStepper/VerticalStepper';
import CountryInfoCard from '../../shared/CountryInfoCard/CountryInfoCard';
import { Consultation } from '../../shared/Consultation/Consultation';
import BlogLinksHolder from '../../shared/BlogLink/‌BlogLinksHolder';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const steps = [
  {
    label: 'قیمت و پکیج های تور',
    hash: '#test1',
  },
  {
    label: 'آنتالیا',
    hash: '#test2',
  },
  {
    label: 'آب و هوا',
    hash: '#test3',
  },
  {
    label: 'فرودگاه های آنتالیا',
    hash: '#test3',
  },
  {
    label: 'نقشه مترو',
    hash: '#test3',
  },
  {
    label: 'جاذبه های گردشگری',
    hash: '#test3',
  },
  {
    label: 'هزینه سفر به آنتالیا',
    hash: '#test3',
  },
];

const blogs = [
  {
    id: '1',
    text: 'باید ها و نبایدهای سفر به ترکیه',
  },
  {
    id: '2',
    text: 'جاذبه های گردشگری شهر ترکیهس',
  },
];

export default function ToursSidebar() {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  // const isDesktopDisplay = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const isDesktopDisplay = useIsDesktopDisplay('lg');
  const convertToPersian = usePersianNumber();

  function handleStepChange(hash, index) {
    setActiveStep(index);
    navigate(hash);
  }

  const country = {
    image: rectangleturkey,
    title: 'ترکیه',
    population: convertToPersian('جمعیت 1,319,000 نفر'),
    language: convertToPersian('زبان : ترکی استانبولی'),
  };

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        position: 'relative',
      }}
    >
      <CountryInfoCard country={country} />
      <div
        style={{
          display: isDesktopDisplay ? 'flex' : 'none',
          position: 'sticky',
          top: '20px',
          gap: '20px',
          flexDirection: 'column',
        }}
      >
        <VerticalStepper
          activeStep={activeStep}
          steps={steps}
          handleStepChange={handleStepChange}
        ></VerticalStepper>
        <Consultation />

        <BlogLinksHolder destination="ترکیه" blogs={blogs} />
      </div>
    </div>
  );
}
