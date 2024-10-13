import { Rating, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HotelDetailSideSuggestionItem({ hotel }) {
  return (
    <Link to={hotel.href}>
      <div
        style={{
          width: '100%',
          aspectRatio: '1',
          // height: '296px',
          // border: '1px solid black',
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            backgroundImage:
              'linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0))',
          }}
        ></div>
        <img
          alt={hotel.title}
          src={hotel.image}
          style={{ width: '100%', height: '100%' }}
        />
        <div
          style={{
            position: 'absolute',
            width: 'max-content',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '16px 0',
            // border: '1px solid white',
            color: '#fff',
            fontSize: '14px',
            fontWeight: '300',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div>{hotel.title}</div>
          <StyledRating value={hotel.rate} max={5} readOnly />
        </div>
      </div>
    </Link>
  );
}

const StyledRating = styled(Rating)({
  display: 'flex',
  flexDirection: 'row-reverse',

  '& .MuiRating-icon': {
    color: '#fff',
    '& svg': {
      width: '16px',
      height: '16px',
    },
  },
});
