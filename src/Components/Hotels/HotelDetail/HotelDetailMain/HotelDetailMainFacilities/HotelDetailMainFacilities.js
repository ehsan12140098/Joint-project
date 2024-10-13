import { useMemo } from 'react';

import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import InformationCard from 'Components/shared/InformationCard/InformationCard';
import { Calendar } from 'Assets/Svgs/Calendar';

const iconProps = {
  size: '26',
  fill: '#5A623A',
};

export default function HotelDetailMainFacilities({ facilities }) {
  const features = useMemo(() => {
    return [
      {
        id: 1,
        title: 'حمام',
        icon: <Calendar {...iconProps} />,
        items: facilities
          .filter(item => item.parent === 1)
          .map(item => item.title),
      },
      {
        id: 166,
        title: 'امکانات سلامتی',
        icon: <Calendar {...iconProps} />,
        items: facilities
          .filter(item => item.parent === 166)
          .map(item => item.title),
      },
      {
        id: 94,
        title: 'خدمات نظافتی',
        icon: <Calendar {...iconProps} />,
        items: facilities
          .filter(item => item.parent === 94)
          .map(item => item.title),
      },
      {
        id: 271,
        title: 'خدمات پذیرش',
        icon: <Calendar {...iconProps} />,
        items: facilities
          .filter(item => item.parent === 271)
          .map(item => item.title),
      },
      {
        id: 288,
        title: 'امنیت ایمنی',
        icon: <Calendar {...iconProps} />,
        items: facilities
          .filter(item => item.parent === 288)
          .map(item => item.title),
      },
      {
        id: 18,
        title: 'فعالیت ها',
        icon: <Calendar {...iconProps} />,
        items: facilities
          .filter(item => item.parent === 18)
          .map(item => item.title),
      },
      {
        id: 112,
        title: 'عمومی',
        icon: <Calendar {...iconProps} />,
        items: facilities
          .filter(item => item.parent === 112)
          .map(item => item.title),
      },
      {
        id: 3,
        title: 'فضای بیرون',
        icon: <Calendar {...iconProps} />,
        items: facilities
          .filter(item => item.parent === 3)
          .map(item => item.title),
      },
      {
        id: 107,
        title: 'امکانات تجاری',
        icon: <Calendar {...iconProps} />,
        items: facilities
          .filter(item => item.parent === 107)
          .map(item => item.title),
      },
      {
        id: 72,
        title: 'غذا و نوشیدنی',
        icon: <Calendar {...iconProps} />,
        items: facilities
          .filter(item => item.parent === 72)
          .map(item => item.title),
      },
      {
        id: 71,
        title: 'رسانه و فناوری',
        icon: <Calendar {...iconProps} />,
        items: facilities
          .filter(item => item.parent === 71)
          .map(item => item.title),
      },
    ];
  }, [facilities]);

  return (
    <div id="facilities" style={{ marginBottom: '40px' }}>
      <SectionTitle style={{ marginBottom: '20px' }}>امکانات</SectionTitle>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {features.map(({ id, ...props }) => (
          <InformationCard
            key={id}
            hasBullets
            bigTitle
            {...props}
            // id={id}
            // icon={icon}
            // title={title}
            // items={items}
          />
        ))}
      </div>
    </div>
  );
}
