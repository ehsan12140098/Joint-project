import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Grid } from '@mui/material';
import VisaSlugMain from 'Components/VisaPage/VisaSlug/VisaSlugMain/VisaSlugMain';
import VisaSlugSide from 'Components/VisaPage/VisaSlug/VisaSlugSide/VisaSlugSide';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

export default function VisaSlugPage() {
  const isLgOrBigger = useIsDesktopDisplay();
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [visa, setVisa] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/api/visa/${slug}`)
      .then(res => {
        setVisa(res.data);
      })
      .catch(err => {})
      .finally(() => setIsLoading(false));
  }, [slug]);

  const contentWithId =
    visa?.visa_discretion
      ?.sort((a, b) => a.sort - b.sort)
      .map(item => ({
        ...item,
        label: item.title,
        hash: '#' + item.title.split(' ').join('-'),
      })) || [];

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={9}>
          <VisaSlugMain visa={visa} content={contentWithId} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <div style={{ display: isLgOrBigger ? 'block' : 'none' }}>
            <VisaSlugSide steps={contentWithId} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
