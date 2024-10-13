import { useRef } from 'react';

import HotelsMainNavbarItem from './HotelsMainNavbarItem';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';
import { ChevronLeft } from 'Assets/Svgs/ChevronLeft';
import { ChevronRight } from 'Assets/Svgs/ChevronRight';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const navItems = [
  { id: 1, name: 'استانبول', image: 'https://picsum.photos/id/16/100/100' },
  { id: 2, name: 'آنتالیا', image: 'https://picsum.photos/id/17/100/100' },
  { id: 3, name: 'آنکارا', image: 'https://picsum.photos/id/18/100/100' },
  { id: 4, name: 'کوشی آداسی', image: 'https://picsum.photos/id/19/100/100' },
  { id: 5, name: 'مارماریس', image: 'https://picsum.photos/id/20/100/100' },
  { id: 6, name: 'بدروم', image: 'https://picsum.photos/id/21/100/100' },
  { id: 7, name: 'آلانیا', image: 'https://picsum.photos/id/22/100/100' },
  { id: 8, name: 'دیدیم', image: 'https://picsum.photos/id/23/100/100' },
  { id: 9, name: 'ازمیر', image: 'https://picsum.photos/id/24/100/100' },
  // {id: 10,name: '', image: 'https://picsum.photos/id/16/100/100' },
  // {id: 11,name: '', image: 'https://picsum.photos/id/16/100/100' },
  // {id: 12,name: '', image: 'https://picsum.photos/id/16/100/100' },
  // {id: 13,name: '', image: 'https://picsum.photos/id/16/100/100' },
  // {id: 14,name: '', image: 'https://picsum.photos/id/16/100/100' },
  // {id: 15,name: '', image: 'https://picsum.photos/id/16/100/100' },
  // {id: 16,name: '', image: 'https://picsum.photos/id/16/100/100' },
  // {id: 17,name: '', image: 'https://picsum.photos/id/16/100/100' },
  // {id: 18,name: '', image: 'https://picsum.photos/id/16/100/100' },
];

export default function HotelsMainNavbar() {
  const isLgOrBigger = useIsDesktopDisplay();
  const isMdOrBigger = useIsDesktopDisplay('md');
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div>
      <SliderContainer
        slidesPerView={isLgOrBigger ? 6 : isMdOrBigger ? 3 : 2}
        spaceBetween={12}
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
        modules={[Navigation]}
      >
        {navItems.map(item => (
          <SwiperSlide key={item.id}>
            <HotelsMainNavbarItem navItem={item} />
          </SwiperSlide>
        ))}
        {/* <SwiperRightCloud />
        <SwiperLeftCloud /> */}
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
  /* height: 80px; */
  padding: 20px 10px;
  /* border: 1px solid red; */

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

const SwiperNavigationButton = styled.div`
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  position: absolute;
  top: 50%;
  /* border: 1px solid yellow; */
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
