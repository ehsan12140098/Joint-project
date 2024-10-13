export default function HomePageSectionTitle({ children, style = {} }) {
  return (
    <h2
      style={{
        margin: 'auto',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '32px',
        ...style,
      }}
    >
      {children}
    </h2>
  );
}
