import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';

export default function HotelDetailMainDescription({ description }) {
  return (
    <BisanCard id="description" sx={{ marginBottom: '40px' }}>
      <SectionTitle style={{ marginBottom: '20px' }}>در مورد هتل</SectionTitle>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        style={{ fontWeight: '300', lineHeight: '24px', fontSize: '14px' }}
      ></div>
    </BisanCard>
  );
}
