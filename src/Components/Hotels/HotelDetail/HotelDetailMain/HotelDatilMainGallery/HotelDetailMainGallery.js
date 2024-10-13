import React, { useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { ChevronRight } from 'Assets/Svgs/ChevronRight';
import { ChevronLeft } from 'Assets/Svgs/ChevronLeft';

export default function HotelDetailMainGallery({ hotel }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <>
      <HotelSwiperHolder>
        <HotelSwiperContainer>
          <SwiperButtonPrev ref={navigationPrevRef}>
            <ChevronLeft />
          </SwiperButtonPrev>
          <HotelSwiper
            dir="ltr"
            navigation={{
              nextEl: navigationNextRef.current,
              prevEl: navigationPrevRef.current,
            }}
            onInit={swiper => {
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {hotel.hotelGallery.map(image => (
              <HotelSwiperSlide key={image.image}>
                <img src={image.image} alt={hotel.name} />
              </HotelSwiperSlide>
            ))}
          </HotelSwiper>
          <HotelThumbSwiper
            dir="ltr"
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={15}
            slidesPerView={10}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {hotel.hotelGallery.map(image => (
              <SwiperSlide
                key={image.image}
                style={{
                  height: '78px',
                  borderRadius: '24px',
                  // border: '1px solid red',
                  overflow: 'hidden',
                }}
              >
                <img src={image.image} alt={hotel.name} />
              </SwiperSlide>
            ))}
          </HotelThumbSwiper>
          <SwiperButtonNext ref={navigationNextRef}>
            <ChevronRight />
          </SwiperButtonNext>
        </HotelSwiperContainer>
      </HotelSwiperHolder>
    </>
  );
}

const HotelSwiperHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  border-bottom: 2px solid rgb(229, 231, 235);
  padding-bottom: 20px;
  @media (min-width: 640px) and (max-width: 1024px) {
    margin-top: 0px;
  }
`;
const HotelSwiperContainer = styled.div`
  position: relative !important;
  width: 100%;
  border-radius: 35px;
`;

const HotelSwiper = styled(Swiper)`
  height: 80%;
  width: 100%;
`;
const HotelThumbSwiper = styled(Swiper)`
  width: 100%;
  margin-top: 32px;

  .swiper-slide {
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    height: 80px;
    object-fit: cover;
    @media (max-width: 640px) {
      height: 35px;
    }
    @media (min-width: 640px) and (max-width: 1024px) {
      height: 55px;
    }
  }
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
  top: 35%;
  @media (max-width: 640px) {
    right: 10px;
    top: 35%;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    right: 20px;
    top: 40%;
  }
`;

const SwiperButtonPrev = styled(SwiperButton)`
  left: 40px;
  top: 35%;
  @media (max-width: 640px) {
    left: 10px;
    top: 35%;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    left: 20px;
    top: 40%;
  }
`;

const HotelSwiperSlide = styled(SwiperSlide)`
  img {
    width: 100%;
    height: 378px;
    border-radius: 24px;
    object-fit: cover;

    @media (max-width: 640px) {
      height: 200px !important;
    }
  }
`;
