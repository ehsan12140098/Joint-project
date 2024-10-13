export default function VisaSideWhyUsItem({ item }) {
  const { icon, title, description } = item;

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <div
        style={{
          backgroundColor: 'rgb(227, 235, 237)',
          width: '64px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: '0',
          borderRadius: '9999px',
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ color: 'rgb(90, 98, 58)', fontWeight: '700' }}>
          {title}
        </div>
        <div
          style={{
            color: 'rgb(156, 163, 175)',
            fontSize: '14px',
            lineHeight: '24px',
            marginTop: '8px',
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
}
