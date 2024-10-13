import { Rating, styled as MuiStyled } from '@mui/material';

import { StarIconFilled } from 'Assets/Svgs/StarIcon';
import turkeyImage from 'Assets/images/rectangleturkey.png';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

export default function HotelDetailTitle({ hotel }) {
  const isLgOrBigger = useIsDesktopDisplay();

  return (
    <div
      style={{
        marginTop: '16px',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
      }}
    >
      <img
        src={turkeyImage}
        alt={hotel.slug}
        style={{ width: '48px', height: '48px', borderRadius: '100%' }}
      ></img>
      <div>
        <div
          style={{
            fontSize: '22px',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {hotel.name}
          {isLgOrBigger && (
            <StyledRating
              value={hotel.stars}
              max={hotel.stars}
              readOnly
              icon={<StarIconFilled />}
            />
          )}
        </div>
        <div
          style={{
            color: 'rgb(113, 113, 122)',
            marginTop: '10px',
            fontSize: '15px',
          }}
        >
          ترکیه استانبول
        </div>
        {!isLgOrBigger && (
          <StyledRating
            value={hotel.stars}
            max={hotel.stars}
            readOnly
            icon={<StarIconFilled />}
          />
        )}
      </div>
    </div>
  );
}

const StyledRating = MuiStyled(Rating)({
  flexDirection: 'row-reverse',
  gap: '8px',

  '& .MuiRating-icon': {
    color: '#EDE059',
  },
});
