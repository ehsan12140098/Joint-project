import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { ChevronRight } from "../../Assets/Svgs/ChevronRight";
import { ChevronLeft } from "../../Assets/Svgs/ChevronLeft";
import firstdubaiblogswiper from "../../Assets/images/firstdubaiblogswiper.png";

export const AboutUsSwiperComponent = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <AboutUsSwiperHolder>
      <AboutUsSwiperContainer>
        <SwiperButtonPrev ref={navigationPrevRef}>
          <ChevronLeft />
        </SwiperButtonPrev>
        <AboutSwiper
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Navigation]}
        >
          <AboutUsSwiperSlide></AboutUsSwiperSlide>
          <AboutUsSwiperSlide></AboutUsSwiperSlide>
          <AboutUsSwiperSlide></AboutUsSwiperSlide>
        </AboutSwiper>

        <SwiperButtonNext ref={navigationNextRef}>
          <ChevronRight />
        </SwiperButtonNext>
      </AboutUsSwiperContainer>
    </AboutUsSwiperHolder>
  );
};

const AboutUsSwiperHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 18px;
`;

const AboutUsSwiperContainer = styled.div`
  position: relative;
  margin-left: 15px;
  width: 100%;
`;
const SwiperButton = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.05));
  z-index: 3;
  cursor: pointer;
`;

const SwiperButtonNext = styled(SwiperButton)`
  right: 40px;
  top: 45%;
  @media (max-width: 640px) {
    right: -20px;
  }
`;

const SwiperButtonPrev = styled(SwiperButton)`
  left: 40px;
  top: 45%;
  @media (max-width: 640px) {
    left: -20px;
  }
`;
const AboutUsSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 350px;
  background-image: url(${firstdubaiblogswiper});
  background-size: cover;
  background-position: center;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const AboutSwiper = styled(Swiper)``;
