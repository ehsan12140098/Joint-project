import turkeyImage from 'Assets/images/rectangleturkey.png';

export default function HotelsCountryFlag() {
  return (
    <div
      style={{
        // border: '1px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '32px',
        marginBottom: '22px',
      }}
    >
      <img alt="turkey" src={turkeyImage} style={{ borderRadius: '100%' }} />
      <div style={{ fontWeight: '700', fontSize: '24px' }}>ترکیه</div>
    </div>
  );
}
