import InformationCard from 'Components/shared/InformationCard/InformationCard';
import { Clock } from 'Assets/Svgs/Clock';
import { Calendar } from 'Assets/Svgs/Calendar';
import { AirplaneTakeOff } from 'Assets/Svgs/AirplaneTakeOff';
import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const iconProps = {
  size: '26',
  fill: '#5A623A',
};

export default function TourDetailMainContentInformation({ tourInformation }) {
  const isSmOrBigger = useIsDesktopDisplay('sm');
  return (
    <div style={{ marginTop: '32px' }}>
      {/* <div
        id="information"
        style={{
          color: 'rgb(90, 98, 58)',
          fontSize: '20px',
          fontWeight: '700',
        }}
      >
        اطلاعات تور
      </div> */}
      <SectionTitle alireza="salam">اطلاعات تور</SectionTitle>
      <div
        style={{
          display: 'flex',
          gap: '5px',
          flexDirection: isSmOrBigger ? 'row' : 'column',
        }}
      >
        <InformationCard
          title="تاریخ رفت و برگشت"
          items={[tourInformation.departureDate, tourInformation.returnDate]}
          icon={<Clock {...iconProps} />}
        />
        <InformationCard
          title="مدت تور"
          items={[tourInformation.tourDuration]}
          icon={<Calendar {...iconProps} />}
        />
        <InformationCard
          title="حمل و نقل تور"
          items={[tourInformation.travelType]}
          icon={<AirplaneTakeOff {...iconProps} />}
        />
      </div>
      <InformationCard
        title="مدارک لازم"
        items={tourInformation.documents}
        icon={<Calendar {...iconProps} />}
        hasBullets
      />
      <InformationCard
        id="services"
        title="خدمات تور"
        items={tourInformation.services}
        icon={<Calendar {...iconProps} />}
        hasBullets
      />
      <InformationCard
        title="توضیحات"
        icon={<Calendar {...iconProps} />}
        html={tourInformation.description}
      />
    </div>
  );
}
