import HotelDetailSideSectionTitle from '../HotelDetailSideSectionTitle';

export default function HotelDetailSideLocation({ lat, long }) {
  return (
    <div>
      <HotelDetailSideSectionTitle>مکان</HotelDetailSideSectionTitle>
      <div style={{ width: '100%', borderRadius: '24px', overflow: 'hidden' }}>
        <iframe
          title="hotelLocation"
          loading="lazy"
          width="100%"
          height="150"
          src={`//maps.google.com/maps?q=${lat},${long}&z=15&output=embed`}
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>
    </div>
  );
}
