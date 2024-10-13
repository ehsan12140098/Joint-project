import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import BreadCrumbs from 'Components/shared/BreadCrumbs/BreadCrumbs';
import VisaMain from 'Components/VisaPage/VisaMain/VisaMain';
import VisaSide from 'Components/VisaPage/VisaSide/VisaSide';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const links = [
  { href: '/', text: 'بیسان' },
  { href: '/visa', text: 'ویزا' },
];

export default function VisaPage() {
  const isSmOrBigger = useIsDesktopDisplay('sm');
  const [visaList, setVisaList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/api/visa/')
      .then(res => {
        setVisaList(res.data);
      })
      .catch(err => {})
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>loading...</div>;

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
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <VisaMain visaList={visaList} isLoading={isLoading} />
        </Grid>
        <Grid item xs={12} lg={4}>
          <VisaSide />
        </Grid>
      </Grid>
    </div>
  );
}
