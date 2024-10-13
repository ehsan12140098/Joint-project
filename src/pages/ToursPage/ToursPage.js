import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import axios from 'axios';
import { Grid, styled } from '@mui/material';

import ToursTable from 'Components/Tours/ToursTable/ToursTable';
import ToursSidebar from 'Components/Tours/ToursSidebar/ToursSidebar';
import BreadCrumbs from 'Components/shared/BreadCrumbs/BreadCrumbs';
import BlogLinksHolder from 'Components/shared/BlogLink/‌BlogLinksHolder';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const links = [
  { href: '/', text: 'بیسان' },
  { href: '/TurkeyTable', text: 'تور' },
  { href: '/tours', text: 'تور ترکیه' },
];

const blogs = [
  {
    id: '1',
    text: 'باید ها و نبایدهای سفر به ترکیه',
  },
  {
    id: '2',
    text: 'جاذبه های گردشگری شهر ترکیهس',
  },
];

const ToursPage = () => {
  const [tours, setTours] = useState([]);
  const { hash } = useLocation();
  const componentReference = useRef();
  const [selectedDisplayMode, setSelectedDisplayMode] = useState('کارت');
  const isDesktop = useIsDesktopDisplay();

  let element = null;
  if (hash) element = document.querySelector(hash);
  if (element) element.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    axios
      .get('/api/tours/')
      .then(res => {
        setTours(res.data);
      })
      .catch(err => {});
  }, []);

  function handleChangeDisplayMode(e) {
    setSelectedDisplayMode(e);
  }

  return (
    <div
      ref={componentReference}
      style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
    >
      <StyledBreadCrumbsHolder>
        <BreadCrumbs links={links} />
      </StyledBreadCrumbsHolder>

      <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
          <ToursSidebar />
        </Grid>
        <Grid item xs={12} lg={9}>
          <ToursTable
            tours={tours}
            selectedDisplayMode={selectedDisplayMode}
            // handleChangeDisplayMode={val => setSelectedDisplayMode(val)}
            handleChangeDisplayMode={handleChangeDisplayMode}
          />
          {!isDesktop && <BlogLinksHolder destination="ترکیه" blogs={blogs} />}
        </Grid>
      </Grid>
    </div>
  );
};

export default ToursPage;

const StyledBreadCrumbsHolder = styled('div')(({ theme }) => {
  return {
    // border: '1px solid red',
    display: 'flex',
    justifyContent: 'center',

    [theme.breakpoints.up('sm')]: {
      justifyContent: 'start',
    },
  };
});
