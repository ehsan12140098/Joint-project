import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import styled from "styled-components";

import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { ChevronRight } from "../../Assets/Svgs/ChevronRight";
import { ChevronLeft } from "../../Assets/Svgs/ChevronLeft";

import eachtourswiperimage from "../../Assets/images/eachtourswiperimage.png";
import eachtourswiperleftcloud from "../../Assets/images/eachtourswiperleftcloud.png";
import eachtourswiperrightcloud from "../../Assets/images/eachtourswiperrightcloud.png";

export const EachTourSwiperComponent = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <EachTourSwiperHolder>
      <EachTourSwiperTitle>گالری تصاویر</EachTourSwiperTitle>
      <EachTourSwiperContainer>
        <SwiperButtonPrev ref={navigationPrevRef}>
          <ChevronLeft />
        </SwiperButtonPrev>
        <EachTourSwiper
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
          slidesPerView={4}
          spaceBetween={24}
        >
          <EachTourSwiperSlide></EachTourSwiperSlide>
          <EachTourSwiperSlide></EachTourSwiperSlide>
          <EachTourSwiperSlide></EachTourSwiperSlide>
          <EachTourSwiperSlide></EachTourSwiperSlide>
          <EachTourSwiperSlide></EachTourSwiperSlide>
          <EachTourSwiperSlide></EachTourSwiperSlide>
          <EachTourSwiperSlide></EachTourSwiperSlide>
          <EachTourSwiperSlide></EachTourSwiperSlide>
          <EachTourSwiperSlide></EachTourSwiperSlide>
        </EachTourSwiper>
        <SwiperButtonNext ref={navigationNextRef}>
          <ChevronRight />
        </SwiperButtonNext>
        <EachTourSwiperLeftCloud />
        <EachTourSwiperRightCloud />
      </EachTourSwiperContainer>
    </EachTourSwiperHolder>
  );
};

const EachTourSwiperHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;
  margin-top: 18px;
`;
const EachTourSwiperTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const EachTourSwiperContainer = styled.div`
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
  right: 5px;
  top: 40%;
`;

const SwiperButtonPrev = styled(SwiperButton)`
  left: 5px;
  top: 40%;
  z-index: 3;
`;

const EachTourSwiper = styled(Swiper)``;

const EachTourSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 190px;
  background-image: url(${eachtourswiperimage});
  background-size: cover;
  background-position: center;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const EachTourSwiperLeftCloud = styled.div`
  width: 20%;
  height: 190px;
  background-image: url(${eachtourswiperleftcloud});
  background-size: contain;
  position: absolute;
  top: 0;
  left: -10px;
  z-index: 2;
`;
const EachTourSwiperRightCloud = styled.div`
  width: 20%;
  height: 190px;
  background-image: url(${eachtourswiperrightcloud});
  background-size: contain;
  position: absolute;
  top: 0;
  right: -10px;
  z-index: 2;
`;
