export default function SectionTitle({
  children,
  alireza,
  isBig = false,
  style = {},
}) {
  return (
    <div
      style={{
        color: 'rgb(90, 98, 58)',
        fontSize: isBig ? '22px' : '20px',
        fontWeight: '700',
        lineHeight: '28px',
        ...style,
      }}
    >
      {children}
      {/* {alireza} */}
    </div>
  );
}
