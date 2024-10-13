import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';
import usePersianNumber from 'hooks/usePersianNumber';

export default function InformationCard({
  title,
  items,
  icon,
  hasBullets,
  bigTitle,
  html,
  ...props
}) {
  const converToPersian = usePersianNumber();

  return (
    <BisanCard
      sx={{ display: 'flex', gap: '8px', flexGrow: '1', marginTop: '24px' }}
      {...props}
    >
      <div
        style={{
          backgroundColor: 'rgb(237, 224, 89)',
          width: '42px',
          borderRadius: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            color: 'rgb(107, 114, 128)',
            fontSize: bigTitle ? '18px' : '14px',
            fontWeight: '700',
          }}
        >
          {title}
        </div>
        {items && items.length > 0 && (
          <ul
            style={{
              marginTop: '5px',
              display: 'flex',
              flexDirection: 'column',
              gap: hasBullets ? '15px' : '40px',
              padding: '20px',
              justifyContent: items.length > 0 ? 'center' : 'start',
              minHeight: bigTitle ? '60px' : '100px',
              listStyleType: hasBullets ? 'disc' : 'none',
            }}
          >
            {items.map(item => (
              <li
                key={item}
                style={{ color: 'rgb(113, 113, 122)', fontSize: '16px' }}
              >
                {converToPersian(item)}
              </li>
            ))}
          </ul>
        )}
        {html && (
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            style={{
              marginTop: '5px',
              padding: '20px',
              minHeight: '100px',
              color: 'rgb(113, 113, 122)',
              fontSize: '16px',
              lineHeight: '24px',
            }}
          ></div>
        )}
      </div>
    </BisanCard>
  );
}
