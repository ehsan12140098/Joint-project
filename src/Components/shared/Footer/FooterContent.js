import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';
import FooterContentContactForm from './FooterContentContactForm';
import FooterContentLicenses from './FooterContentLicenses';
import FooterContentNavigation from './FooterContentNavigation';
import FooterContentSocialMedia from './FooterContentSocialMedia';
import { styled as MUIStyled } from '@mui/material';

export default function FooterContent() {
  const isDesktop = useIsDesktopDisplay();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isDesktop ? 'column' : 'column-reverse',
      }}
    >
      <FooterContentLicenses />
      {!isDesktop && (
        <StyledMobileNavigationHolder>
          <div style={{ gridArea: 'first' }}>
            <FooterContentNavigation column="first" />
          </div>

          <div className="contactHolder">
            <FooterContentContactForm />
          </div>

          <div style={{ gridArea: 'second' }}>
            <FooterContentNavigation column="second" />
          </div>
        </StyledMobileNavigationHolder>
      )}
      <div
        style={{
          marginTop: '48px',
          marginBottom: '40px',
          display: 'grid',
          gridTemplateColumns: isDesktop
            ? 'repeat(3, minmax(0, 1fr))'
            : 'repeat(1,minmax(0, 1fr)',
          gap: '16px',
          height: 'max-content',
          // border: '10px solid red',
        }}
      >
        {isDesktop && <FooterContentContactForm />}
        <div
          style={{
            gridColumn: isDesktop ? '2 / span 1' : '1 / span 1',
            // height: 'max-content',
            // border: '10px solid green',
          }}
        >
          <FooterContentSocialMedia />
        </div>
        {isDesktop && <FooterContentNavigation />}
      </div>
    </div>
  );
}

const StyledMobileNavigationHolder = MUIStyled('div')(({ theme }) => ({
  rowGap: '30px',
  columnGap: '20px',

  display: 'grid',

  marginBottom: '50px',
  gridTemplateAreas: '"contact contact" "first second"',

  '.contactHolder': {
    gridArea: 'contact',
  },

  [theme.breakpoints.up('sm')]: {
    gridTemplateAreas: '"first contact contact second" ',
    padding: '0 30px',
  },
}));
