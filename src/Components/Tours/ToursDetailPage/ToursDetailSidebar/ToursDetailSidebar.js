import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Consultation } from 'Components/shared/Consultation/Consultation';
import VerticalStepper from 'Components/shared/VerticalStepper/VerticalStepper';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';
import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';
import { BlackTwitter } from 'Assets/Svgs/BlackTwitter';
import { BlackLink } from 'Assets/Svgs/BlackLink';
import { BlackFaceBook } from 'Assets/Svgs/BlackFaceBook';
import { BlackInstagram } from 'Assets/Svgs/BlackInstagram';
import { display } from '@mui/system';
import { position } from 'stylis';

const steps = [
  {
    label: 'هتل',
    hash: '#hotel',
  },
  {
    label: 'اطلاعات تور',
    hash: '#information',
  },
  {
    label: 'خدمات تور',
    hash: '#services',
  },
  {
    label: 'گالری تصاویر',
    hash: '#gallery',
  },
  {
    label: 'تورهای پیشنهادی',
    hash: '#suggested',
  },
];

const socialMediaLinks = [
  {
    key: 'twitter',
    href: 'https://twitter.com/intent/tweet?url=https://bisanseir.com/tours/detail/%D8%AA%D9%88%D8%B1-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86%D8%A8%D9%88%D9%84---%D9%82%D8%B4%D9%85-%E2%80%8C%D8%A7%DB%8C%D8%B1',
    icon: <BlackTwitter />,
  },
  {
    key: 'copy',
    href: '#Link',
    icon: <BlackLink />,
  },
  {
    key: 'facebook',
    href: 'https://www.facebook.com/share.php?u=https://bisanseir.com/tours/detail/%D8%AA%D9%88%D8%B1-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86%D8%A8%D9%88%D9%84---%D9%82%D8%B4%D9%85-%E2%80%8C%D8%A7%DB%8C%D8%B1',
    icon: <BlackFaceBook />,
  },
  {
    key: 'instagram',
    href: 'https://www.instagram.com/?url=https://bisanseir.com/tours/detail/%D8%AA%D9%88%D8%B1-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86%D8%A8%D9%88%D9%84---%D9%82%D8%B4%D9%85-%E2%80%8C%D8%A7%DB%8C%D8%B1',
    icon: <BlackInstagram />,
  },
];

export default function ToursDetailSidebar() {
  const [activeStep, setActiveStep] = useState(0);

  const isDesktopDisplay = useIsDesktopDisplay('lg');
  const navigate = useNavigate();

  function handleStepChange(hash, index) {
    setActiveStep(index);
    navigate(hash);
  }

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
      <div
        style={{
          display: isDesktopDisplay ? 'flex' : 'none',
          position: 'sticky',
          top: '20px',
          gap: '20px',
          flexDirection: 'column',
        }}
      >
        <Consultation />
        <VerticalStepper
          activeStep={activeStep}
          steps={steps}
          handleStepChange={handleStepChange}
        ></VerticalStepper>
        <BisanCard
          sx={{
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '10px',
            }}
          >
            {socialMediaLinks.map(({ key, href, icon }) => (
              <a
                key={key}
                rel="noreferrer"
                target="_blank"
                href={href}
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgb(229, 231, 235)',
                  borderRadius: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {icon}
              </a>
            ))}
          </div>
          <div
            style={{
              backgroundColor: 'rgb(237, 224, 89)',
              padding: '8px 16px',
              borderRadius: '16px',
              cursor: 'pointer',
              fontSize: '16px',
              color: 'rgb(90, 98, 58)',
              fontWeight: '700',
              width: 'max-content',
              position: 'absolute',
              left: '50%',
              top: '100%',
              transform: 'translateX(-50%) translateY(-50%)',
            }}
          >
            اشتراک گذاری
          </div>
        </BisanCard>
      </div>
    </div>
  );
}
