import HomePageSectionSubtitle from '../HomePageSectionSubtitile';
import HomePageSectionTitle from '../HomePageSectionTitle';
import HomePageImageLink from '../HomePageImageLink';
import HomePageContainer from '../HomePageContainer';
// import Swiper from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const destinations = [
  {
    id: 1,
    href: 'tours/تور-کوش-آداسی',
    image:
      'https://bisanseir.com/media/cache/78/a2/78a28231f1cc51e6948208559d67ebc6.jpg',
    title: 'کوش آداسی',
  },
  {
    id: 2,
    href: 'tours/تور-کوش-آداسی',
    image:
      '	https://bisanseir.com/media/cache/e2/69/e26973711f678c83aa34ff904cb794b2.jpg',
    title: 'استانبول',
  },
  {
    id: 3,
    href: 'tours/تور-کوش-آداسی',
    image:
      'https://bisanseir.com/media/cache/64/dc/64dc6c17e4cce9c7a6ee326d20fdb727.jpg',
    title: 'آنتالیا',
  },
  {
    id: 4,
    href: 'tours/تور-کوش-آداسی',
    image:
      'https://bisanseir.com/media/cache/5b/65/5b654344a637ec343546fb280ea6dfb3.jpg',
    title: 'دبی',
  },
];

export default function HomePagePopularDestinations() {
  const isDesktop = useIsDesktopDisplay();

  return (
    <HomePageContainer>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          position: 'relative',
        }}
      >
        <div>
          <HomePageSectionTitle style={{ marginBottom: '20px' }}>
            مقاصد پرطرفدار
          </HomePageSectionTitle>
          <HomePageSectionSubtitle>
            انتخاب شما از بین مقاصد محبوب سایر مسافران کدام است؟
          </HomePageSectionSubtitle>
        </div>

        {isDesktop ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0,1fr)',
              gap: '3.5rem',
            }}
          >
            {destinations.map(des => (
              <HomePageImageLink key={des.id} item={des} />
            ))}
          </div>
        ) : (
          <StyledSliderHolder>
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              centeredSlides={true}
              loop
              className="mySwiper"
            >
              {destinations.map(des => (
                <SwiperSlide key={des.id}>
                  <HomePageImageLink item={des} />
                </SwiperSlide>
              ))}
              {destinations.map(des => (
                <SwiperSlide key={des.id}>
                  <HomePageImageLink item={des} />
                </SwiperSlide>
              ))}
              {destinations.map(des => (
                <SwiperSlide key={des.id}>
                  <HomePageImageLink item={des} />
                </SwiperSlide>
              ))}
              {destinations.map(des => (
                <SwiperSlide key={des.id}>
                  <HomePageImageLink item={des} />
                </SwiperSlide>
              ))}
            </Swiper>
          </StyledSliderHolder>
        )}
      </section>
    </HomePageContainer>
  );
}

const StyledSliderHolder = styled.div`
  width: 100%;
  /* height: 100px; */
  /* border: 3px solid red; */

  .mySwiper {
    width: 100%;
    /* height: 100%; */
  }
`;
