import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronRight } from "../../Assets/Svgs/ChevronRight";
import { ChevronLeft } from "../../Assets/Svgs/ChevronLeft";
import belgium from "../../Assets/images/belgium.png";

export const DestinationSwiperComponent = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <DestinationSwiperHolder>
      <SwiperTitleHolder>
        <SwiperTitleContainer>
          مقصد بعدی خود را انتخاب کنید
        </SwiperTitleContainer>
      </SwiperTitleHolder>

      <DestinationSwiperContainer>
        <SwiperButtonPrev ref={navigationPrevRef}>
          <ChevronLeft />
        </SwiperButtonPrev>
        <DestinationSwiper
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
          slidesPerView={6}
          spaceBetween={8}
          className="flagSwiper"
        >
          <DestinationSwiperSlide>
            <DestinationName>بلژیک</DestinationName>
            <FlagHolder></FlagHolder>
          </DestinationSwiperSlide>
          <DestinationSwiperSlide>
            <DestinationName>بلژیک</DestinationName>
            <FlagHolder></FlagHolder>
          </DestinationSwiperSlide>
          <DestinationSwiperSlide>
            <DestinationName>بلژیک</DestinationName>
            <FlagHolder></FlagHolder>
          </DestinationSwiperSlide>
          <DestinationSwiperSlide>
            <DestinationName>بلژیک</DestinationName>
            <FlagHolder></FlagHolder>
          </DestinationSwiperSlide>
          <DestinationSwiperSlide>
            <DestinationName>بلژیک</DestinationName>
            <FlagHolder></FlagHolder>
          </DestinationSwiperSlide>
          <DestinationSwiperSlide>
            <DestinationName>بلژیک</DestinationName>
            <FlagHolder></FlagHolder>
          </DestinationSwiperSlide>
          <DestinationSwiperSlide>
            <DestinationName>بلژیک</DestinationName>
            <FlagHolder></FlagHolder>
          </DestinationSwiperSlide>
          <DestinationSwiperSlide>
            <DestinationName>بلژیک</DestinationName>
            <FlagHolder></FlagHolder>
          </DestinationSwiperSlide>
          <DestinationSwiperSlide>
            <DestinationName>بلژیک</DestinationName>
            <FlagHolder></FlagHolder>
          </DestinationSwiperSlide>
        </DestinationSwiper>
        <SwiperButtonNext ref={navigationNextRef}>
          <ChevronRight />
        </SwiperButtonNext>
      </DestinationSwiperContainer>
    </DestinationSwiperHolder>
  );
};

const DestinationSwiperHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 18px;
  z-index: 3;
`;

const SwiperTitleHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5a623a;
  font-family: IRANSans;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SwiperTitleContainer = styled.div``;

const DestinationSwiperContainer = styled.div`
  position: relative;
  margin-left: 15px;
  width: 81%;
  /* border: 1px solid red; */
  background-color: white;
  padding-bottom: 30px;
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
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.3));
  z-index: 3;
  cursor: pointer;
`;

const SwiperButtonNext = styled(SwiperButton)`
  right: -65px;
  top: 0px;
`;

const SwiperButtonPrev = styled(SwiperButton)`
  left: -65px;
  top: 0px;
`;
const DestinationSwiperSlide = styled(SwiperSlide)`
  border-radius: 38px;
  display: flex;
  padding: 8px 6px 8px 6px;
  justify-content: flex-end !important;
  align-items: center;
  gap: 8px;
  /* border: 1px solid purple; */
  /* background-color: white; */
  /* box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2); */
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
`;

const DestinationSwiper = styled(Swiper)`
  /* border: 3px solid blue; */
  padding-bottom: 20px;
`;

const DestinationName = styled.div`
  color: black;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const FlagHolder = styled.div`
  background-image: url(${belgium});
  width: 32px;
  height: 32px;
`;
