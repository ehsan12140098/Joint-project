// import styled from 'styled-components';

import { useEffect, useState } from 'react';
import HomePageButtonLink from '../HomePageButtonLink';
import HomePageContainer from '../HomePageContainer';
import BisanSlider from '../Slider/BisanSlider';
import HomePageEuropeToursSlider from './HomePageEuropeToursSlider';
import { styled, useMediaQuery } from '@mui/material';
import TourGridItem from 'Components/Tours/ToursTable/ToursTableItems/ToursGridItem';
import axios from 'axios';

export default function HomePageEuropeTours() {
  const [tours, setTours] = useState([]);
  const isSmAndBigger = useMediaQuery(theme => theme.breakpoints.up('sm'));

  useEffect(() => {
    axios
      .get('/api/tours/')
      .then(res => {
        setTours(res.data);
      })
      .catch(err => {});
  }, []);

  return (
    <HomePageContainer>
      <StyledSectionHolder>
        <div
          className="text-holder"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            flexShrink: '0',
          }}
        >
          <h1
            style={{
              fontSize: isSmAndBigger ? '36px' : '24px',
              fontWeight: '700',
              lineHeight: '40px',
            }}
          >
            تور اروپا
          </h1>
          <StyledParagraph>تور های امسال با بیسان سیر</StyledParagraph>
          <StyledParagraph>
            تور اروپا از محبوبیت بسیار بالایی در میان گردشگران برخوردار است و هر
            ساله مسافران زیادی از سراسر دنیا راهی قاره سبز می‌شوند تا از کشورهای
            مختلف این قاره زیبا و دیدنی مانند اسپانیا، فرانسه، ایتالیا و ...
            بازدید کنند.
          </StyledParagraph>
          <HomePageButtonLink
            style={{
              marginTop: isSmAndBigger ? '32px' : '0',
              width: isSmAndBigger ? 'max-content' : '100%',
              textAlign: 'center',
            }}
          >
            شرایط و قوانین
          </HomePageButtonLink>
        </div>
        <BisanSlider
          items={tours}
          component={TourGridItem}
          componentItemPropName="tour"
        />
        {/* <HomePageEuropeToursSlider /> */}
      </StyledSectionHolder>
    </HomePageContainer>
  );
}

// const StyledParagraph = styled.p`
//   line-height: 24px;
//   color: rgb(113, 113, 122);
// `;

const StyledParagraph = styled('p')(({ theme }) => ({
  lineHeight: '24px',
  color: 'rgb(113,113,122)',
  fontSize: '14px',
  [theme.breakpoints.up('sm')]: {
    fontSize: '16px',
  },
}));

const StyledSectionHolder = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '.text-holder': { width: '100%', textAlign: 'center', paddingBottom: '20px' },

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    '.text-holder': { width: '50%', textAlign: 'left' },
  },
}));
