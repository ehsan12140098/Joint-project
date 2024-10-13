import { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import { styled } from '@mui/material';
import { width } from '@mui/system';
// import styled from 'styled-components';

const createLottieAnimation = (animationData, container) => {
  return Lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    animationData,
  });
};

export default function HomePageServicesItem({ item }) {
  const containerRef = useRef(null);
  const animation = useRef({ current: null });

  useEffect(() => {
    animation.current = createLottieAnimation(
      item.animation,
      containerRef.current
    );
    return () => {
      animation.current.destroy();
    };
  }, []);

  return (
    <StyledServiceHolder
    // style={{  }}
    >
      <div
        ref={containerRef}
        onMouseEnter={() => animation.current.play()}
        onMouseLeave={() => animation.current.stop()}
        style={{
          // border: '1px solid red',
          height: '13rem',
          width: '100%',
        }}
      >
        {/* <img
          src={item.img}
          alt={item.title}
          style={{ margin: '0 auto', height: '100%', width: '100%' }}
        /> */}
      </div>

      <h2
        style={{
          marginTop: '2.5rem',
          fontSize: '1.125rem',
          fontWeight: '700',
          textAlign: 'center',
          lineHeight: '28px',
          direction: 'ltr',
        }}
      >
        {item.title}
      </h2>
      <p
        style={{
          marginTop: '12px',
          padding: '0 2.5rem',
          lineHeight: '20px',
          fontSize: '14px',
          color: 'rgb(107, 114, 128)',
          textAlign: 'center',
        }}
      >
        {item.description}
      </p>
    </StyledServiceHolder>
  );
}

// const StyledServiceHolder = styled.div`
//   margin-top: 20px;
//   width: 50%;
//   padding: 12px;
// `;

const StyledServiceHolder = styled('div')(({ theme }) => ({
  marginTop: '20px',
  width: '50%',
  padding: '12px',
  [theme.breakpoints.up('sm')]: {
    width: 'calc(100%/3)',
  },
}));
