export default function HotelDetailSideSectionTitle({ children, style = {} }) {
  return (
    <div
      style={{
        fontSize: '20px',
        fontWeight: '600',
        color: 'rgb(90, 98, 58)',
        marginBottom: '20px',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
