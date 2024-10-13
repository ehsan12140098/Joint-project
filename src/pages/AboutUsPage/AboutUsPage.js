import { Grid } from '@mui/material';
import AboutUsMain from 'Components/AboutUs/AboutUsMain/AboutUsMain';
import AboutUsSide from 'Components/AboutUs/AboutUsSide/AboutUsSide';
import BreadCrumbs from 'Components/shared/BreadCrumbs/BreadCrumbs';
import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const links = [
  { href: '/', text: 'بیسان' },
  { href: '/about-us', text: 'درباره ما' },
];

export default function AboutUsPage() {
  const isSmOrBigger = useIsDesktopDisplay('sm');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: isSmOrBigger ? 'flex-start' : 'center',
        }}
      >
        <BreadCrumbs links={links} />
      </div>
      <SectionTitle isBig>درباره ما</SectionTitle>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={9}>
          <AboutUsMain />
        </Grid>
        <Grid item xs={12} lg={3}>
          <AboutUsSide />
        </Grid>
      </Grid>
    </div>
  );
}
