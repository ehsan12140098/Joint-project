export default function HotelDetailSideRatingItem({ rating }) {
  return (
    <div style={{ fontSize: '14px' }}>
      <div>{rating.text}</div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginTop: '10px',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '8px',
            borderRadius: '6px',
            backgroundColor: 'rgb(229, 231, 235)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: rating.rate * 10 + '%',
              height: '100%',
              position: 'absolute',
              top: '0',
              left: '0',
              backgroundColor: 'rgb(237, 224, 89)',
            }}
          ></div>
        </div>
        <div style={{ fontWeight: '600' }}>{rating.rate}</div>
      </div>
    </div>
  );
}
