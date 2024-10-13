import React from 'react';
import styled from 'styled-components';
import BackgroundSvg from 'Assets/images/Footer/footerBg.png';

export default function StickyFooterMenu() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'white',
        position: 'sticky',
        top: '0',
        left: '0',
      }}
    >
      <StyledBackground />
    </div>
  );
}

const StyledBackground = styled.div`
  width: 100%;
  background: url(${BackgroundSvg}) center center / cover;
  background-color: #f0f0f0;
  height: 320px;
  position: absolute;
  top: 0;
  left: 0;

  &::before {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to top,
      rgb(255, 255, 255),
      rgba(0, 0, 0, 0)
    );
    /* border: 10px solid red; */
  }
`;
