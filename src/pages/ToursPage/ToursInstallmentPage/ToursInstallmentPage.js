import { Grid } from '@mui/material';
import BreadCrumbs from 'Components/shared/BreadCrumbs/BreadCrumbs';
import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import ToursInstallmentMain from 'Components/Tours/ToursInstallmentPage/ToursInstallmentMain/ToursInstallmentMain';
import ToursInstallmentSide from 'Components/Tours/ToursInstallmentPage/ToursInstallmentSide/ToursInstallmentSide';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const links = [
  { href: '/', text: 'بیسان' },
  { href: '/tours/installment_tours', text: 'تور های اقساطی' },
];

export default function ToursInstallmentPage() {
  const isSmOrBigger = useIsDesktopDisplay('sm');
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: isSmOrBigger ? 'flex-start' : 'center',
        }}
      >
        <BreadCrumbs links={links} />
      </div>
      <SectionTitle isBig style={{ marginTop: '20px' }}>
        تور های اقساطی
      </SectionTitle>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={7.7}>
          <ToursInstallmentMain />
        </Grid>
        <Grid item xs={12} lg={4.3}>
          <div
            style={{
              position: 'relative',
              // border: '1px solid blue',
              height: '100%',
            }}
          >
            <ToursInstallmentSide />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
