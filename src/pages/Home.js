import styled from 'styled-components';
// import { SearchContext } from "../Contexts/SearchContext";
import { useContext } from 'react';
import { Navbar2 } from '../Components/Home/Navbar2';
// import Navbar from '../Components/Home/Navbar';
import { CoverFlowSliderComponent } from '../Components/Home/CoverFlowSliderComponent';
import { CoverFlowSwiperComponent } from '../Components/Home/CoverFlowSwiperComponent';
import { AccordionHolder } from '../Components/Home/AccordionHolder';
import { PopularTours } from '../Components/Home/PopularTours';
import { InternalTours } from '../Components/Home/InternalTours';
import { WhyBisan } from '../Components/Home/WhyBisan';
import { InstallmentTours } from '../Components/Home/InstallmentTours';
import { BlogFavorites } from '../Components/Home/BlogFavorites';
import { EuropeTour } from '../Components/Home/EuropeTour';
import { NavbarData } from '../Components/Home/NavbarData';
import { FirstNavbarSubstitute } from '../Components/Home/FirstNavbarSubstitute';
import { StickyFooter } from '../Components/Footer/StickyFooter';
import { Spinner } from '../Components/Delete/Spinner';
import { ROW_CENTER } from '../styles/FlexStyles';
import headerbackground from '../Assets/Imgs/header-background.webp';

import phonenavbarbackground from '../Assets/images/phonenavbarbackground.png';
import nav1background from '../Assets/images/nav1background.png';
import Navbar from 'Components/shared/Navbar/Navbar';

export const Home = () => {
  // const { isLoading } = useContext(SearchContext);

  return (
    <TotalHomeContainer>
      <MainHomeContainer>
        {/* <Navbar data={NavbarData} /> */}
        {/* <Navbar2 /> */}
        <div
          style={{
            position: 'relative',
            padding: '20px 0',
            width: '80%',
          }}
        >
          {/* <Navbar3 /> */}
          <Navbar />
        </div>
        <FirstNavbarSubstitute />
        <PopularTours />
        <CoverFlowSliderComponent />
        {/* <CoverFlowSwiperComponent /> */}
        <WhyBisan />
        <InternalTours />
        <InstallmentTours />
        <EuropeTour />
        <BlogFavorites />
        <AccordionHolder />

        {/* <SearchComponent />
      {isLoading ? (
        <SpinnerContainer>
        <Spinner />
        </SpinnerContainer>
        ) : (
          <ResultsList />
        )} */}
      </MainHomeContainer>
    </TotalHomeContainer>
  );
};

const MainHomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px;
  /* border: 3px solid green; */

  @media (max-width: 640px) {
    gap: 40px;
  }
`;

const TotalHomeContainer = styled.div`
  /* width: 100%; */
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* height: 500px; */
    height: 500px;
    background-image: url(${headerbackground});
    /* background-size: cover; */
    /* background-position: center center; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    z-index: 2;
  }
  @media (max-width: 640px) {
    &:before {
      background-image: url(${phonenavbarbackground});
      background-size: cover;
      background-repeat: unset;
      background-position: unset;
      height: 300px;
      z-index: 1;
    }
  }
`;
