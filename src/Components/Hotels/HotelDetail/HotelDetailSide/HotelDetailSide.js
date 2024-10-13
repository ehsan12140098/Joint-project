import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';
import HotelDetailSideLocation from './HotelDetailSideLocation/HotelDetailSideLocation';
import HotelDetailSideRating from './HotelDetailSideRating/HotelDetailSideRating';
import HotelDetailSideSuggestion from './HotelDetailSideSuggestion/HotelDetailSideSuggestion';

export default function HotelDetailSide({ hotel }) {
  const isMdOrBigger = useIsDesktopDisplay('md');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
      {isMdOrBigger && <HotelDetailSideRating />}
      {isMdOrBigger && <HotelDetailSideLocation />}
      <HotelDetailSideSuggestion />
    </div>
  );
}
