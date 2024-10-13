import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';
import HotelDetailSideRatingItem from './HotelDetailSideRatingItem';

const ratings = [
  {
    text: 'کارکنان',
    rate: 8.3,
  },
  {
    text: 'امکانات',
    rate: 7.4,
  },
  {
    text: 'پاکیزگی',
    rate: 7.9,
  },
  {
    text: 'آسایش',
    rate: 7.3,
  },
  {
    text: 'ارزش',
    rate: 7.5,
  },
  {
    text: 'موقعیت',
    rate: 8.3,
  },
  {
    text: 'وای فای رایگان',
    rate: 7.4,
  },
];

export default function HotelDetailSideRating() {
  const overallRating = ratings
    .reduce((acc, cur) => {
      return acc + cur.rate / ratings.length;
    }, 0)
    .toFixed(1);

  return (
    <div>
      <BisanCard sx={{ position: 'relative', padding: '16px' }}>
        <div
          style={{
            backgroundColor: 'rgb(237, 224, 89)',
            width: overallRating * 10 + '%',
            height: '100%',
            position: 'absolute',
            top: '0',
            left: '0',
            borderRadius: '24px 0 0 24px',
          }}
        ></div>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
            fontSize: '14px',
          }}
        >
          میانگین امتیاز کل
          <span style={{ fontSize: '48px' }}>{overallRating}</span>
        </div>
      </BisanCard>

      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {ratings.map(rating => (
          <HotelDetailSideRatingItem key={rating.text} rating={rating} />
        ))}
      </div>
    </div>
  );
}
