import HotelDetailSideSectionTitle from '../HotelDetailSideSectionTitle';
import HotelDetailSideSuggestionItem from './HotelDetailSideSuggestionItem';

const hotels = [
  {
    id: 5,
    title: 'هتل آبیسو',
    image: 'https://picsum.photos/id/20/300/300',
    rate: 3,
    href: '/hotel/detail/هتل-آبیسو',
  },
  {
    id: 6,
    title: 'هتل بلک برد استانبول',
    image: 'https://picsum.photos/id/21/300/300',
    rate: 4,
    href: '/hotel/detail/هتل-آبیسو',
  },
  {
    id: 7,
    title: 'هتل تکسیم لانژ استانبول',
    image: 'https://picsum.photos/id/22/300/300',
    rate: 5,
    href: '/hotel/detail/هتل-تکسیم-لانژ-استانبول',
  },
  {
    id: 8,
    title: 'هتل الان استانبول',
    image: 'https://picsum.photos/id/23/300/300',
    rate: 2,
    href: '/hotel/detail/هتل-الان-استانبول',
  },
];

export default function HotelDetailSideSuggestion() {
  return (
    <div>
      <HotelDetailSideSectionTitle>هتل های مشابه</HotelDetailSideSectionTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {hotels.map(hotel => (
          <HotelDetailSideSuggestionItem key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
