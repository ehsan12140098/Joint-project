import { Rating, styled } from '@mui/material';
import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';
import { LocationFooter } from 'Assets/Svgs/Icons';
import usePriceCommaSeparator from 'hooks/usePriceCommaSeparator';

export default function ToursDetailMainContentHotelsTableMobile({ hotels }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {hotels.map((hotel, i) => (
        <Hotel key={hotel.name} isEven={i % 2 === 0} hotel={hotel} />
      ))}
    </div>
  );
}

function Hotel({ hotel, isEven }) {
  const priceWithComma = usePriceCommaSeparator();

  const prices = [
    { text: 'یک تخته', key: 'oneBed' },
    { text: 'دو تخته', key: 'twoBeds' },
    {
      text: 'کودک با تخت',
      key: 'childWithBed',
    },
    {
      text: 'کودک بدون تخت',
      key: 'childWithoutBed',
    },
  ];
  return (
    <BisanCard
      sx={{
        padding: 0,
        backgroundColor: isEven ? '#fff' : 'rgb(244, 244, 245)',
      }}
    >
      <div
        style={{
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <a href="#hotel">
              <h3
                style={{
                  color: '#000',
                  fontSize: '16px',
                  fontWeight: '700',
                  lineHeight: '24px',
                }}
              >
                {hotel.name}
              </h3>
              <span
                style={{
                  color: 'rgb(71, 85, 105)',
                  fontSize: '14px',
                  lineHeight: '20px',
                }}
              >
                {hotel.enName}
              </span>
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StyledRating
              value={+hotel.stars}
              max={+hotel.stars}
              readOnly
              size="small"
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: 'rgb(71, 85, 105)',
          }}
        >
          <div style={{ fontSize: '14px', lineHeight: '20px' }}>
            امتیاز بوکینگ:
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>استانبول</span>
            <i
              style={{
                backgroundColor: 'rgb(229, 231, 235)',
                borderRadius: '4px',
                padding: '4px',
              }}
            >
              <LocationFooter color="#000" size="12" />
            </i>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            color: 'rgb(71, 85, 105)',
            fontWeight: '700',
          }}
        >
          <span
            style={{
              borderRadius: '4px',
              color: 'white',
              padding: '0px 8px',
              backgroundColor: 'rgb(71, 85, 105)',
              lineHeight: '24px',
            }}
          >
            {hotel.service}
          </span>
          <span>صبحانه</span>
        </div>
        <br></br>
        <div
          style={{
            marginTop: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {prices.map((price, i) => (
            <div
              key={price.key}
              style={{
                color: 'rgb(75, 85, 99)',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '16px',
                borderRadius: '4px',
                border: '1px solid rgb(229, 231, 235)',
                backgroundColor: i % 2 !== 0 ? 'rgb(244, 244, 245)' : '#fff',
                lineHeight: '24px',
              }}
            >
              <div style={{ fontWeight: '700' }}>{price.text} </div>
              <div style={{ fontWeight: '700', color: 'rgb(75, 85, 99)' }}>
                {priceWithComma(hotel[price.key])}
              </div>
            </div>
          ))}
        </div>
      </div>
    </BisanCard>
  );
}

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'rgb(237, 224, 89)',
  },
});
