import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Grid } from '@mui/material';

import BreadCrumbs from 'Components/shared/BreadCrumbs/BreadCrumbs';
import HotelDetailMain from 'Components/Hotels/HotelDetail/HotelDetailMain/HotelDetailMain';
import HotelDetailTitle from 'Components/Hotels/HotelDetail/HotelDetailTitle';
import HotelDetailSide from 'Components/Hotels/HotelDetail/HotelDetailSide/HotelDetailSide';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const links = [
  { href: '/', text: 'بیسان' },
  { href: '/hotel', text: 'هتل' },
  { href: '/hotel/ترکیه', text: 'ترکیه' },
  { href: '/hotel/استانبول', text: 'استانبول' },
];

export default function HotelDetailPage() {
  const isSmOrBigger = useIsDesktopDisplay('sm');
  const [hotel, setHotel] = useState(null);
  const { slug } = useParams();

  const breadCrumbs = useMemo(() => {
    return [...links, { href: '#', text: slug }];
  }, [slug]);

  useEffect(() => {
    axios
      .get(`/api/hotels/${slug}`)
      .then(res => {
        setHotel(res.data);
      })
      .catch(err => {});
  }, [slug]);

  if (!hotel) return <div>Loding.... </div>;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: isSmOrBigger ? 'flex-start' : 'center',
        }}
      >
        <BreadCrumbs links={breadCrumbs} />
      </div>
      <HotelDetailTitle hotel={hotel} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={9}>
          <HotelDetailMain hotel={hotel} />
        </Grid>
        <Grid item xs={12} md={3}>
          <HotelDetailSide hotel={hotel} />
        </Grid>
      </Grid>
    </div>
  );
}
