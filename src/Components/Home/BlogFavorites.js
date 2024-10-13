import React from "react";
import styled from "styled-components";
import sophiamuseum from "../../Assets/images/sophiamuseum.jpg";
import dohadesert from "../../Assets/images/dohadesert.jpg";
import dubairecreation from "../../Assets/images/dubairecreation.jpg";
import baku from "../../Assets/images/baku.jpg";
import monaco from "../../Assets/images/monaco.jpg";
import khoni from "../../Assets/images/khoni.jpg";
import disneyland from "../../Assets/images/disneyland.jpg";

import footerbackground from "../../Assets/images/footerbackground.png";

export const BlogFavorites = () => {
  return (
    <MainBlogFavorites>
      <SubMainBlogFavorites>
        <TitleBlogFavorites>
          <TitleTextBlogFavorites>برگزیده های وبلاگ</TitleTextBlogFavorites>
          <SubtitleTextBlogFavorites>
            وبلاگ بیسان سیر را دنبال کنید
          </SubtitleTextBlogFavorites>
        </TitleBlogFavorites>
        <GridContainerBlogFavorites>
          <FirstdivBlogFavoritesHolder>
            <FirstdivBlogFavoritesImage />
            <FirstDivTextBlogFavorites>
              اطلاعات کلی درباره شهر آنتالیا
            </FirstDivTextBlogFavorites>
            <ReadMoreHolder>ادامه مطلب</ReadMoreHolder>
          </FirstdivBlogFavoritesHolder>
          <SeconddivBlogFavoritesHolder>
            <SeconddivBlogFavoritesImage />
            <SecondDivTextBlogFavorites>
              بایدها و نبایدهای سفر به شهر بارسلونا
            </SecondDivTextBlogFavorites>
            <ReadMoreHolder>ادامه مطلب</ReadMoreHolder>
          </SeconddivBlogFavoritesHolder>
          <ThirddivBlogFavoritesHolder>
            <ThirddivBlogFavoritesImage />
            <ThirdDivTextBlogFavorites>
              آداب غذایی سنگاپور
            </ThirdDivTextBlogFavorites>
            <ReadMoreHolder>ادامه مطلب</ReadMoreHolder>
          </ThirddivBlogFavoritesHolder>
          <FourthdivBlogFavoritesHolder>
            <FourthdivBlogFavoritesImage />
            <FourthDivTextBlogFavorites>
              اقامت در فرانسه
            </FourthDivTextBlogFavorites>
            <ReadMoreHolder>ادامه مطلب</ReadMoreHolder>
          </FourthdivBlogFavoritesHolder>
          <FifthdivBlogFavoritesHolder>
            <FifthdivBlogFavoritesImage />
            <FifthDivTextBlogFavorites>
              مواردی که هنگام سفر به بارسلونا باید بدانید
            </FifthDivTextBlogFavorites>
            <ReadMoreHolder>ادامه مطلب</ReadMoreHolder>
          </FifthdivBlogFavoritesHolder>
          <SixthdivBlogFavoritesHolder>
            <SixthdivBlogFavoritesImage />
            <SixthDivTextBlogFavorites>
              مواردی که هنگام سفر به بارسلونا باید بدانید
            </SixthDivTextBlogFavorites>
            <ReadMoreHolder>ادامه مطلب</ReadMoreHolder>
          </SixthdivBlogFavoritesHolder>
          <SeventhdivBlogFavoritesHolder>
            <SeventhdivBlogFavoritesImage />
            <SeventhDivTextBlogFavorites>
              مواردی که هنگام سفر به بارسلونا باید بدانید
            </SeventhDivTextBlogFavorites>
            <ReadMoreHolder>ادامه مطلب</ReadMoreHolder>
          </SeventhdivBlogFavoritesHolder>
        </GridContainerBlogFavorites>
        <MorePosts>
          <MorePostsText>پست های بیشتر</MorePostsText>
        </MorePosts>
      </SubMainBlogFavorites>
    </MainBlogFavorites>
  );
};

const MainBlogFavorites = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  width: 100%;
  position: relative;
  background-image: url(${footerbackground});
`;
const SubMainBlogFavorites = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 80%;
  position: relative;
`;

const TitleBlogFavorites = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleTextBlogFavorites = styled.div`
  color: #000;
  text-align: center;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const SubtitleTextBlogFavorites = styled.div`
  color: #808080;
  text-align: center;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const GridContainerBlogFavorites = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  width: 100%;
  /* border: 3px solid purple; */
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 1fr);
    grid-column-gap: 30px;
  }
`;
const DivBlogFavoritesHolder = styled.div`
  grid-area: ${(props) => props.gridArea};
  overflow: hidden;
  border-radius: 16px;
  position: relative;
  height: 240px;
  /* border: 3px solid green; */
  &:before {
    content: "";
    position: absolute;
    border-radius: 16px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 20%, #000 100%);
    z-index: 1;
  }
  &:hover {
    &:before {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.65) 20%, #000 100%);
    }
  }
`;

const FirstdivBlogFavoritesHolder = styled(DivBlogFavoritesHolder)`
  grid-area: 1 / 1 / 2 / 3;
  @media (max-width: 640px) {
    grid-area: 1 / 1 / 2 / 2;
  }
`;

const SeconddivBlogFavoritesHolder = styled(DivBlogFavoritesHolder)`
  grid-area: 1 / 3 / 2 / 4;
  @media (max-width: 640px) {
    grid-area: 2 / 1 / 3 / 2;
  }
`;
const ThirddivBlogFavoritesHolder = styled(DivBlogFavoritesHolder)`
  grid-area: 2 / 1 / 3 / 2;
  @media (max-width: 640px) {
    grid-area: 3 / 1 / 4 / 2;
  }
`;
const FourthdivBlogFavoritesHolder = styled(DivBlogFavoritesHolder)`
  grid-area: 2 / 2 / 3 / 3;
  @media (max-width: 640px) {
    grid-area: 4 / 1 / 5 / 2;
  }
`;
const FifthdivBlogFavoritesHolder = styled(DivBlogFavoritesHolder)`
  grid-area: 2 / 3 / 3 / 4;
  @media (max-width: 640px) {
    grid-area: 5 / 1 / 6 / 2;
  }
`;
const SixthdivBlogFavoritesHolder = styled(DivBlogFavoritesHolder)`
  grid-area: 3 / 1 / 4 / 2;
  @media (max-width: 640px) {
    grid-area: 6 / 1 / 7 / 2;
  }
`;
const SeventhdivBlogFavoritesHolder = styled(DivBlogFavoritesHolder)`
  grid-area: 3 / 2 / 4 / 4;
  @media (max-width: 640px) {
    grid-area: 7 / 1 / 8 / 2;
  }
`;
const BlogFavoritesImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 240px;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  transition: 0.5s all ease-in-out;
`;

const FirstdivBlogFavoritesImage = styled(BlogFavoritesImage)`
  background-image: url(${sophiamuseum});
  ${FirstdivBlogFavoritesHolder}:hover & {
    transform: scale(1.1);
  }
`;

const SeconddivBlogFavoritesImage = styled(BlogFavoritesImage)`
  background-image: url(${dohadesert});
  ${SeconddivBlogFavoritesHolder}:hover & {
    transform: scale(1.1);
  }
`;
const ThirddivBlogFavoritesImage = styled(BlogFavoritesImage)`
  background-image: url(${dubairecreation});
  ${ThirddivBlogFavoritesHolder}:hover & {
    transform: scale(1.1);
  }
`;
const FourthdivBlogFavoritesImage = styled(BlogFavoritesImage)`
  background-image: url(${baku});
  ${FourthdivBlogFavoritesHolder}:hover & {
    transform: scale(1.1);
  }
`;
const FifthdivBlogFavoritesImage = styled(BlogFavoritesImage)`
  background-image: url(${monaco});
  ${FifthdivBlogFavoritesHolder}:hover & {
    transform: scale(1.1);
  }
`;
const SixthdivBlogFavoritesImage = styled(BlogFavoritesImage)`
  background-image: url(${khoni});
  ${SixthdivBlogFavoritesHolder}:hover & {
    transform: scale(1.1);
  }
`;
const SeventhdivBlogFavoritesImage = styled(BlogFavoritesImage)`
  background-image: url(${disneyland});
  ${SeventhdivBlogFavoritesHolder}:hover & {
    transform: scale(1.1);
  }
`;

const BaseDivTextBlogFavorites = styled.div`
  position: absolute;
  width: 95%;
  bottom: 24px;
  color: #fff;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 2;
`;

const FirstDivTextBlogFavorites = styled(BaseDivTextBlogFavorites)`
  ${FirstdivBlogFavoritesHolder}:hover & {
    color: #7f7f7f;
  }
`;

const SecondDivTextBlogFavorites = styled(BaseDivTextBlogFavorites)`
  ${SeconddivBlogFavoritesHolder}:hover & {
    color: #7f7f7f;
  }
`;
const ThirdDivTextBlogFavorites = styled(BaseDivTextBlogFavorites)`
  ${ThirddivBlogFavoritesHolder}:hover & {
    color: #7f7f7f;
  }
`;
const FourthDivTextBlogFavorites = styled(BaseDivTextBlogFavorites)`
  ${FourthdivBlogFavoritesHolder}:hover & {
    color: #7f7f7f;
  }
`;
const FifthDivTextBlogFavorites = styled(BaseDivTextBlogFavorites)`
  ${FifthdivBlogFavoritesHolder}:hover & {
    color: #7f7f7f;
  }
`;
const SixthDivTextBlogFavorites = styled(BaseDivTextBlogFavorites)`
  ${SixthdivBlogFavoritesHolder}:hover & {
    color: #7f7f7f;
  }
`;
const SeventhDivTextBlogFavorites = styled(BaseDivTextBlogFavorites)`
  ${SeventhdivBlogFavoritesHolder}:hover & {
    color: #7f7f7f;
  }
`;
const ReadMoreHolder = styled.div`
  position: absolute;
  top: calc(50% - 24px);
  left: calc(50% - 48px);
  color: #ede059;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 3;
  border: 1px solid #ede059;
  padding: 12px;
  border-radius: 8px;
  opacity: 0;
  ${FirstdivBlogFavoritesHolder}:hover & {
    opacity: 1;
  }
  ${SeconddivBlogFavoritesHolder}:hover & {
    opacity: 1;
  }
  ${ThirddivBlogFavoritesHolder}:hover & {
    opacity: 1;
  }
  ${FourthdivBlogFavoritesHolder}:hover & {
    opacity: 1;
  }
  ${FifthdivBlogFavoritesHolder}:hover & {
    opacity: 1;
  }
  ${SixthdivBlogFavoritesHolder}:hover & {
    opacity: 1;
  }
  ${SeventhdivBlogFavoritesHolder}:hover & {
    opacity: 1;
  }
`;
// const SeconddivBlogFavorites = styled.div`
//   grid-area: 1 / 3 / 2 / 4;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
//   height: 240px;
//   border-radius: 16px;
//   background-image: url(${dohadesert});
//   background-size: cover;
//   background-position: center;
//   @media (max-width: 640px) {
//     grid-area: 2 / 1 / 3 / 2;
//   }
//   &:before {
//     content: "";
//     position: absolute;
//     border-radius: 16px;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 50%, #000 100%);
//     z-index: 1;
//   }
//   &:hover {
//     &:before {
//       background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 80%, #000 100%);
//       z-index: 3;
//     }
//   }
// `;
// const ThirddivBlogFavorites = styled.div`
//   grid-area: 2 / 1 / 3 / 2;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
//   height: 240px;
//   border-radius: 16px;
//   background-image: url(${dubairecreation});
//   background-size: cover;
//   background-position: center;
//   @media (max-width: 640px) {
//     grid-area: 3 / 1 / 4 / 2;
//   }
//   &:before {
//     content: "";
//     position: absolute;
//     border-radius: 16px;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 50%, #000 100%);
//     z-index: 1;
//   }
//   &:hover {
//     &:before {
//       background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 80%, #000 100%);
//       z-index: 3;
//     }
//   }
// `;
// const FourthdivBlogFavorites = styled.div`
//   grid-area: 2 / 2 / 3 / 3;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
//   height: 240px;
//   border-radius: 16px;
//   background-image: url(${baku});
//   background-size: cover;
//   background-position: center;
//   @media (max-width: 640px) {
//     grid-area: 4 / 1 / 5 / 2;
//   }
//   &:before {
//     content: "";
//     position: absolute;
//     border-radius: 16px;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 50%, #000 100%);
//     z-index: 1;
//   }
//   &:hover {
//     &:before {
//       background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 80%, #000 100%);
//       z-index: 3;
//     }
//   }
// `;
// const FifthdivBlogFavorites = styled.div`
//   grid-area: 2 / 3 / 3 / 4;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
//   height: 240px;
//   border-radius: 16px;
//   background-image: url(${monaco});
//   background-size: cover;
//   background-position: center;
//   @media (max-width: 640px) {
//     grid-area: 5 / 1 / 6 / 2;
//   }
//   &:before {
//     content: "";
//     position: absolute;
//     border-radius: 16px;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 50%, #000 100%);
//     z-index: 1;
//   }
//   &:hover {
//     &:before {
//       background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 80%, #000 100%);
//       z-index: 3;
//     }
//   }
// `;
// const SixthdivBlogFavorites = styled.div`
//   grid-area: 3 / 1 / 4 / 2;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
//   height: 240px;
//   border-radius: 16px;
//   background-image: url(${khoni});
//   background-size: cover;
//   background-position: center;
//   @media (max-width: 640px) {
//     grid-area: 5 / 1 / 6 / 2;
//   }
//   &:before {
//     content: "";
//     position: absolute;
//     border-radius: 16px;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 50%, #000 100%);
//     z-index: 1;
//   }
//   &:hover {
//     &:before {
//       background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 80%, #000 100%);
//       z-index: 3;
//     }
//   }
// `;
// const SeventhdivBlogFavorites = styled.div`
//   grid-area: 3 / 2 / 4 / 4;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
//   height: 240px;
//   border-radius: 16px;
//   background-image: url(${disneyland});
//   background-size: cover;
//   background-position: center;
//   @media (max-width: 640px) {
//     grid-area: 5 / 1 / 6 / 2;
//   }
//   &:before {
//     content: "";
//     position: absolute;
//     border-radius: 16px;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 50%, #000 100%);
//     z-index: 1;
//   }
//   &:hover {
//     &:before {
//       background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 80%, #000 100%);
//       z-index: 3;
//     }
//   }
// `;

const MorePosts = styled.div`
  display: flex;
  height: 42px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 35px;
  background: #ede059;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
`;
const MorePostsText = styled.div`
  color: #5a623a;
  text-align: center;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
