import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';

export default function ToursInstallmentMainSection({ title, children }) {
  return (
    <BisanCard sx={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 5px 20px 0px' }}>
      <SectionTitle style={{ marginBottom: '15px' }}>{title}</SectionTitle>
      <div style={{ lineHeight: '28px', fontWeight: '300' }}>{children}</div>
    </BisanCard>
  );
}
