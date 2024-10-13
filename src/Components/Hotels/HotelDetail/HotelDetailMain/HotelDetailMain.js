import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HotelDetailMainGallery from './HotelDatilMainGallery/HotelDetailMainGallery';
import HotelDetailMainDescription from './HotelDetailMainDescription/HotelDetailMainDescription';
import HotelDetailMainNav from './HotelDetailMainNav/HotelDetailMainNav';
import HotelDetailMainFacilities from './HotelDetailMainFacilities/HotelDetailMainFacilities';
import HotelDetailMainFlags from './HotelDetailMainFlags/HotelDetailMainFlags';
import HotelDetailSideRating from '../HotelDetailSide/HotelDetailSideRating/HotelDetailSideRating';
import HotelDetailSideLocation from '../HotelDetailSide/HotelDetailSideLocation/HotelDetailSideLocation';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

export default function HotelDetailMain({ hotel }) {
  const isMdOrBigger = useIsDesktopDisplay('md');
  const { hash } = useLocation();

  useEffect(() => {
    let element = null;
    if (hash) element = document.querySelector(hash);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);

  return (
    <div style={{ position: 'relative' }}>
      <HotelDetailMainGallery hotel={hotel} />
      {!isMdOrBigger && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
          }}
        >
          <div style={{ padding: '20px 40px' }}>
            <HotelDetailSideRating />
          </div>
          <HotelDetailSideLocation />
        </div>
      )}
      <HotelDetailMainNav />
      <HotelDetailMainDescription description={hotel.text} />
      <HotelDetailMainFacilities facilities={hotel.Feature} />
      <HotelDetailMainFlags />
      {/* <div style={{ border: '1px solid red', height: '1000px' }}></div> */}
    </div>
  );
}
