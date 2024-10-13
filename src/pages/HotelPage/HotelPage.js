import { useEffect, useState, useMemo } from 'react';

import axios from 'axios';

import { Grid } from '@mui/material';

import HotelsMain from 'Components/Hotels/HotelsMain/HotelsMain';
import HotelsSide from 'Components/Hotels/HotelsSide/HotelsSide';

export default function HotelPage() {
  const [hotels, setHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hotelsCount, setHotelsCount] = useState(0);

  const perPage = useMemo(() => 10, []); // Number of hotels per page

  useEffect(() => {
    axios
      .get('/api/hotels/', {
        params: {
          page: currentPage,
          limit: perPage,
        },
      })
      .then(res => {
        setHotels(res.data.results);
        setHotelsCount(res.data.count);
      })
      .catch(err => {
        console.log('🚀 ~ axios.get ~ err:', err);
      });
  }, [perPage, currentPage]);

  return (
    <div style={{ direction: 'ltr' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={9}>
          <div style={{ direction: 'rtl' }}>
            <HotelsMain
              hotels={hotels}
              itemsPerPage={perPage}
              itemsCount={hotelsCount}
              currentPage={currentPage}
              handlePageChange={page => setCurrentPage(page)}
            />
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <HotelsSide />
        </Grid>
      </Grid>
    </div>
  );
}
