import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundSvg from '../Assets/Svgs/Background.svg';
import Navbar from './shared/Navbar/Navbar';
import Footer from './shared/Footer/Footer';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

export default function Layout() {
  const isDesktop = useIsDesktopDisplay();
  return (
    <div style={{ position: 'relative' }}>
      <LayoutWithBackground></LayoutWithBackground>

      {/* <div style={{ maxWidth: '1440px', margin: 'auto' }}> */}
      <LayoutPadding>
        {/* <div
          style={{
           
          }}
        > */}
        {/* <Navbar3 /> */}
        {isDesktop && <Navbar />}
        <Outlet />
        {/* </div> */}
      </LayoutPadding>
      <Footer />
      {/* </div> */}
    </div>
  );
}

const LayoutWithBackground = styled.div`
  background: url(${BackgroundSvg}) center center / cover;
  background-color: #f0f0f0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 320px;

  &::before {
    background-image: linear-gradient(to top, var(--tw-gradient-stops));
    --tw-gradient-from: #fff;
    --tw-gradient-stops: var(--tw-gradient-from),
      var(--tw-gradient-to, rgb(255 255 255 / 0));
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    --tw-gradient-to: transparent;
  }
`;

const LayoutPadding = styled.div`
  /* border: 1px solid red; */
  max-width: 100%;
  margin: auto;
  position: relative;
  padding: 50px 2.5% 0 2.5%;

  @media (min-width: 640px) and (max-width: 768) {
    max-width: 608px;
    padding: 50px 0 0 0;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 736px;
    padding: 50px 0 0 0;
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    max-width: 992px;
    padding: 50px 0 0 0;
  }

  @media (min-width: 1440px) {
    max-width: 1280px;
    padding: 50px 0 0 0;
  }
`;
