import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';

import TurkeyImage from 'Assets/images/rectangleturkey.png';

export default function HotelDetailMainFlags() {
  return (
    <div id="flags">
      <SectionTitle style={{ marginBottom: '20px' }}>زبان ها</SectionTitle>
      <div style={{ display: 'flex', gap: '25px' }}>
        <img
          src={TurkeyImage}
          alt="turkey"
          style={{ width: '80px', height: '80px', borderRadius: '100%' }}
        />
        <img
          src={TurkeyImage}
          alt="turkey"
          style={{ width: '80px', height: '80px', borderRadius: '100%' }}
        />
      </div>
    </div>
  );
}
