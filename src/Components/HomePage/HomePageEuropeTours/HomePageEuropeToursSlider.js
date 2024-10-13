import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';
import styled from 'styled-components';

function myPlugin({ swiper, extendParams, on }) {
  // console.log('🚀 ~ myPlugin ~ swiper:', swiper);
  // console.log('🚀 ~ myPlugin ~ swiper:', on);
  extendParams({
    debugger: false,
  });

  on('init', () => {
    const item = document.querySelector('.swiper-slide-active');
    console.log('🚀 ~ on ~ item:', item);
    // item.classList.add('little');
    // item.style.backgroundColor = 'white';
    // if (!swiper.params.debugger) return;
    console.log('init');
  });
  on('click', (swiper, e) => {
    // if (!swiper.params.debugger) return;
    console.log('click');
  });
  on('tap', (swiper, e) => {
    // if (!swiper.params.debugger) return;
    console.log('tap');
  });
  on('doubleTap', (swiper, e) => {
    // if (!swiper.params.debugger) return;
    console.log('doubleTap');
  });
  on('sliderMove', (swiper, e) => {
    // if (!swiper.params.debugger) return;
    console.log('sliderMove');
  });
  on('slideChange', () => {
    // if (!swiper.params.debugger) return;
    console.log('slideChange', swiper.previousIndex, '->', swiper.activeIndex);
  });
  on('slideChangeTransitionStart', () => {
    // if (!swiper.params.debugger) return;
    console.log('slideChangeTransitionStart');
  });
  on('slideChangeTransitionEnd', () => {
    // if (!swiper.params.debugger) return;
    console.log('slideChangeTransitionEnd');
  });
  on('transitionStart', () => {
    // if (!swiper.params.debugger) return;
    console.log('transitionStart');
  });
  on('transitionEnd', () => {
    // if (!swiper.params.debugger) return;
    console.log('transitionEnd');
  });
  on('fromEdge', () => {
    // if (!swiper.params.debugger) return;
    console.log('fromEdge');
  });
  on('reachBeginning', () => {
    // if (!swiper.params.debugger) return;
    console.log('reachBeginning');
  });
  on('reachEnd', () => {
    // if (!swiper.params.debugger) return;
    console.log('reachEnd');
  });
}

export default function HomePageEuropeToursSlider() {
  return (
    <StyledSwiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </StyledSwiper>
  );
}

const StyledSwiper = styled(Swiper)`
  border: 1px solid red;
  width: 240px;
  height: 320px;

  .swiper-slide {
    border: 1px solid blue;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    /* transform: rotate(0deg) !important; */

    &.swiper-slide-next {
      transform: scale(0.8) rotate(0) !important;
      position: absolute;
      left: 0;
    }

    &:nth-child(1n) {
      background-color: rgb(206, 17, 17);
    }

    &:nth-child(2n) {
      background-color: rgb(0, 140, 255);
    }

    &:nth-child(3n) {
      background-color: rgb(10, 184, 111);
    }

    &:nth-child(4n) {
      background-color: rgb(211, 122, 7);
    }

    &:nth-child(5n) {
      background-color: rgb(118, 163, 12);
    }

    &:nth-child(6n) {
      background-color: rgb(180, 10, 47);
    }

    &:nth-child(7n) {
      background-color: rgb(35, 99, 19);
    }

    &:nth-child(8n) {
      background-color: rgb(0, 68, 255);
    }

    &:nth-child(9n) {
      background-color: rgb(218, 12, 218);
    }

    &:nth-child(10n) {
      background-color: rgb(54, 94, 77);
    }
  }
`;
