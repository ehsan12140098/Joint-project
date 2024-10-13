import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export default function GallerySliderItem({ image }) {
  return (
    <SliderItem>
      <img alt="slide" src={image}></img>
    </SliderItem>
  );
}

const SliderItem = styled.div`
  overflow: hidden;
  height: 160px;
  border-radius: 16px;
  width: 100%;
  /* transition: 0.3s; */

  &:hover > img {
    transform: scale(1.1);
  }

  > img {
    transition: 0.3s;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
