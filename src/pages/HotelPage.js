import styled from "styled-components";
import Navbar1 from "../Components/Common/Navbar1";
import { Navbar3 } from "../Components/Common/Navbar3";
import { BreadcrumbHolder } from "../Components/Common/BreadcrumbHolder";
import { SelectedHotelHolder } from "../Components/Hotel/SelectedHotelHolder";
import { HotelSwiperComponent } from "../Components/Hotel/HotelSwiperComponent";
import { AverageTotalScore } from "../Components/Hotel/AverageTotalScore";
import { OptionsScore } from "../Components/Hotel/OptionsScore";
import { SimilarHotels } from "../Components/Hotel/SimilarHotels";
import { MapHolder } from "../Components/Hotel/MapHolder";
import { HotelPageGrayDivs } from "../Components/Hotel/HotelPageGrayDivs";
import { HotelPageDescrip } from "../Components/Common/HotelPageDescrip";
import { HotelPageFacility } from "../Components/Common/HotelPageFacility";
import { HotelPageLanguage } from "../Components/Hotel/HotelPageLanguage";
import nav1background from "../Assets/images/nav1background.png";
import phonenavbarbackground from "../Assets/images/phonenavbarbackground.png";

export const HotelPage = () => {
  return (
    <TotalHotelPageHolder>
      <MainHotelPageHolder>
        <Navbar3Holder>
          <Navbar3 />
        </Navbar3Holder>
        <BreadcrumbAndSelectedHotelHolder>
          <BreadcrumbHolder />
          <SelectedHotelHolder />
        </BreadcrumbAndSelectedHotelHolder>
        <SubMainHotelPageHolder>
          <LeftSideSubMainHotelPageHolder>
            <AverageTotalScore />
            <OptionsScore />
            <MapHolder />
            <SimilarHotels />
          </LeftSideSubMainHotelPageHolder>
          <RightSideSubMainHotelPageHolder>
            <HotelSwiperComponent />
            <HotelSwiperDevider></HotelSwiperDevider>
            <HotelPageGrayDivs />
            <HotelPageDescrip />
            <HotelPageFacility />
            <HotelPageLanguage />
            {/* <Thumbgallery /> */}
          </RightSideSubMainHotelPageHolder>
        </SubMainHotelPageHolder>
      </MainHotelPageHolder>
      <MainHotelPageHolderPhone>
        <BreadcrumbAndSelectedHotelHolder>
          <BreadcrumbHolder />
          <SelectedHotelHolder />
        </BreadcrumbAndSelectedHotelHolder>
        <HotelSwiperComponent />
        <AverageTotalScore />
        <OptionsScore />
        <MapHolder />
        <HotelSwiperDevider></HotelSwiperDevider>
        <HotelPageGrayDivs />
        <HotelPageDescrip />
        <HotelPageFacility />
        <SimilarHotels />
        {/* <Thumbgallery /> */}
      </MainHotelPageHolderPhone>
    </TotalHotelPageHolder>
  );
};

const TotalHotelPageHolder = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background-image: url(${nav1background});
    z-index: 1;
  }
  @media (max-width: 640px) {
    &:before {
      background-image: url(${phonenavbarbackground});
      background-size: cover;
      height: 300px;
      z-index: 1;
    }
  }
`;

const MainHotelPageHolder = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  @media (max-width: 640px) {
    display: none;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 90%;
  }
`;
const MainHotelPageHolderPhone = styled.div`
  width: 90%;
  margin: auto;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  @media (max-width: 640px) {
    display: flex;
  }
`;

const Navbar3Holder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BreadcrumbAndSelectedHotelHolder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const SubMainHotelPageHolder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const LeftSideSubMainHotelPageHolder = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  gap: 32px;
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 30%;
  }
`;

const RightSideSubMainHotelPageHolder = styled.div`
  width: 74%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 68%;
  }
`;
const HotelSwiperDevider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 12px;
`;
