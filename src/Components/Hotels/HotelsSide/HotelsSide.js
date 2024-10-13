import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';
import HotelsCountryFlag from '../HotelsCountryFlag';
import HotelsSideBlogs from './HotelSideBlogs/HotelsSideBlogs';

export default function HotelsSide() {
  const isLgOrBigger = useIsDesktopDisplay();

  return (
    <div>
      {isLgOrBigger && <HotelsCountryFlag />}
      <HotelsSideBlogs />
    </div>
  );
}
