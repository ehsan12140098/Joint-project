import React, { useRef, useState } from "react";
import styled from "styled-components";
import "./BlogSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { ChevronRight } from "../../Assets/Svgs/ChevronRight";
import { ChevronLeft } from "../../Assets/Svgs/ChevronLeft";
import firstdubaiblogswiper from "../../Assets/images/firstdubaiblogswiper.png";
import horizentallinearbackground from "../../Assets/images/horizentallinearbackground.png";

export const BlogSwiperComponent = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const pRef = React.useRef(null);

  return (
    <BlogSwiperHolder>
      <BlogSwiperContainer>
        <SwiperButtonPrev ref={navigationPrevRef}>
          <ChevronLeft />
        </SwiperButtonPrev>
        <BlogSwiper
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // swiper.params.pagination.el = pRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            // swiper.pagination.init();
            // swiper.pagination.update();
          }}
          pagination={{
            el: pRef.current,
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
        >
          <BlogSwiperSlide>
            <BlogSwiperText> دانستنی های دبی</BlogSwiperText>
          </BlogSwiperSlide>
          <BlogSwiperSlide>
            <BlogSwiperText> دانستنی های دبی</BlogSwiperText>
          </BlogSwiperSlide>
          <BlogSwiperSlide>
            <BlogSwiperText> دانستنی های دبی</BlogSwiperText>
          </BlogSwiperSlide>
        </BlogSwiper>
        <SwiperButtonNext ref={navigationNextRef}>
          <ChevronRight />
        </SwiperButtonNext>
        <BlogSwiperPagination ref={pRef}></BlogSwiperPagination>
      </BlogSwiperContainer>
    </BlogSwiperHolder>
  );
};

const BlogSwiperHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 18px;
`;

const BlogSwiperContainer = styled.div`
  position: relative !important;
  margin-left: 15px;
  width: 100%;
`;

const BlogSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  height: 350px;
  background-image: url(${firstdubaiblogswiper});
  background-size: cover;
  border-radius: 35px;
  display: flex !important;
  flex-direction: column;
  justify-content: flex-end !important;
  align-items: center;
  @media (max-width: 640px) {
    height: 290px;
  }
  &:before {
    content: "";
    position: absolute;
    border-radius: 35px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 35px;
    background-image: url(${horizentallinearbackground});
    background-size: cover;
    z-index: 1;
  }
`;

const BlogSwiper = styled(Swiper)`
  /* .swiper-pagination-blog {
    width: 100%;
    height: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }

  .swiper-pagination-bullet-active {
    background-color: black !important;
  } */
`;

const BlogSwiperText = styled.div`
  color: #fff;
  text-align: center;
  font-family: IRANSans;
  font-size: 31.25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 2;
  margin-bottom: 20px;
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
    right: 5px;
  }
`;

const SwiperButtonPrev = styled(SwiperButton)`
  left: 40px;
  top: 45%;
  @media (max-width: 640px) {
    left: 5px;
  }
`;

const BlogSwiperPagination = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

/* <BlogSwiperPagination />   */
