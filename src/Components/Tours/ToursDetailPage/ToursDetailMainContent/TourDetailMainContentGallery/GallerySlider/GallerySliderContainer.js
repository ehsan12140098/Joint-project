import { useRef } from 'react';

import GallerySliderItem from './GallerySliderItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { ChevronLeft } from 'Assets/Svgs/ChevronLeft';
import { ChevronRight } from 'Assets/Svgs/ChevronRight';

export default function GallerySliderContainer({ gallery }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div>
      <SliderContainer
        slidesPerView={4}
        spaceBetween={18}
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
        pagination={{
          clickable: true,
          // renderBullet: function (index, className) {
          //   return (
          //     <RenderBullet index={index} className={className}></RenderBullet>
          //   );
          // },
        }}
        modules={[Pagination, Navigation]}
      >
        {gallery.map(({ id, image }) => (
          <SwiperSlide key={id}>
            <GallerySliderItem image={image} />
          </SwiperSlide>
        ))}
        <SwiperRightCloud />
        <SwiperLeftCloud />
        <NavigationRightButton ref={navigationNextRef}>
          <ChevronRight />
        </NavigationRightButton>
        <NavigationLeftButton ref={navigationPrevRef}>
          <ChevronLeft />
        </NavigationLeftButton>
      </SliderContainer>
    </div>
  );
}

const SliderContainer = styled(Swiper)`
  position: relative;

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background-color: rgb(204, 204, 204) !important;
      opacity: 0.8;

      &-active {
        width: 11px;
        height: 11px;
        background-color: #fff !important;
      }
    }
  }
`;

const SwiperLeftCloud = styled.div`
  width: 80px;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgb(255, 255, 255),
    rgb(255, 255, 255),
    rgba(0, 0, 0, 0)
  );
  position: absolute;
  top: 0;
  left: 0px;
  z-index: 2;
`;
const SwiperRightCloud = styled.div`
  width: 80px;
  height: 100%;
  background-image: linear-gradient(
    to left,
    rgb(255, 255, 255),
    rgb(255, 255, 255),
    rgba(0, 0, 0, 0)
  );
  position: absolute;
  top: 0;
  right: 0px;
  z-index: 2;
`;

const SwiperNavigationButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
`;

const NavigationRightButton = styled(SwiperNavigationButton)`
  right: 10px;
`;

const NavigationLeftButton = styled(SwiperNavigationButton)`
  left: 10px;
`;
