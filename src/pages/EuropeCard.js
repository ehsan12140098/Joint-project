import styled from "styled-components";
import Navbar1 from "../Components/Common/Navbar1";
import { Navbar3 } from "../Components/Common/Navbar3";
import { BreadcrumbHolder } from "../Components/Common/BreadcrumbHolder";
import { DestinationSwiperComponent } from "../Components/Common/DestinationSwiperComponent";
import { DisplayMode } from "../Components/Common/DisplayMode";
import { CardsHolder } from "../Components/Card/CardsHolder";
import { TextsHolder } from "../Components/Common/TextsHolder";
import { CornerFlag } from "../Components/Common/CornerFlag";
import { Consultation } from "../Components/Common/Consultation";
import { KnowMoreEurope } from "../Components/Common/KnowMoreEurope";
import nav1background from "../Assets/images/nav1background.png";
import phonenavbarbackground from "../Assets/images/phonenavbarbackground.png";

export const EuropeCard = () => {
  return (
    <TotalEuropeCardContainer>
      <MainEuropeCardContainer>
        <Navbar3Holder>
          <Navbar3 />
        </Navbar3Holder>
        <BreadcrumbHolder />
        <SubMainEuropeCardContainer>
          <LeftSideMainEuropeCardContainer>
            <DestinationSwiperComponent />
            <DisplayMode />
            <CardsHolder />
            <TextsHolder />
          </LeftSideMainEuropeCardContainer>
          <RightSideMainEuropeCardContainer>
            <CornerFlag />
            <Consultation />
            <KnowMoreEurope />
          </RightSideMainEuropeCardContainer>
        </SubMainEuropeCardContainer>
      </MainEuropeCardContainer>
      <MainEuropeCardContainerIpad>
        <BreadcrumbHolder />
        <CornerFlag />
        {/* <SwiperComponent /> */}
        <DisplayMode />
        <CardsHolder />
        <TextsHolder />
        <Consultation />
        <KnowMoreEurope />
      </MainEuropeCardContainerIpad>
    </TotalEuropeCardContainer>
  );
};

const TotalEuropeCardContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* border: 3px solid green; */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background-image: url(${nav1background});
    z-index: 1;
    /* border: 1px solid purple; */
  }
  @media (max-width: 640px) {
    display: none;
  }
`;

const MainEuropeCardContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  @media (min-width: 640px) and (max-width: 1024px) {
    display: none;
  }
`;
const MainEuropeCardContainerIpad = styled.div`
  width: 90%;
  margin: auto;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  @media (min-width: 640px) and (max-width: 1024px) {
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

const SubMainEuropeCardContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LeftSideMainEuropeCardContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  gap: 40px;
  /* border: 3px solid green; */
`;
const RightSideMainEuropeCardContainer = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;
