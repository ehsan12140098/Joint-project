export default function HomePageSectionSubtitle({ children, style = {} }) {
  return (
    <span
      style={{
        margin: 'auto',
        textAlign: 'center',
        fontSize: '12px',
        lineHeight: '16px',
        color: 'rgb(113, 113, 122)',
        display: 'block',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
