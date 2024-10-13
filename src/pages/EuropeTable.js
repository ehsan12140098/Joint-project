import styled from "styled-components";
import Navbar1 from "../Components/Common/Navbar1";
import { Navbar3 } from "../Components/Common/Navbar3";
import { BreadcrumbHolder } from "../Components/Common/BreadcrumbHolder";
import { DestinationSwiperComponent } from "../Components/Common/DestinationSwiperComponent";
import { DisplayMode } from "../Components/Common/DisplayMode";
import { TablesHolder } from "../Components/Table/TablesHolder";
import { TextsHolder } from "../Components/Common/TextsHolder";
import { CornerFlag } from "../Components/Common/CornerFlag";
import { Consultation } from "../Components/Common/Consultation";
import { KnowMoreEurope } from "../Components/Common/KnowMoreEurope";
import nav1background from "../Assets/images/nav1background.png";
import phonenavbarbackground from "../Assets/images/phonenavbarbackground.png";

export const EuropeTable = () => {
  return (
    <MainEuropeTableHolder>
      <MainEuropeTableContainer>
        <Navbar3Holder>
          <Navbar3 />
        </Navbar3Holder>
        <BreadcrumbHolder />
        <SubMainEuropeCardContainer>
          <LeftSideMainEuropeCardContainer>
            <DestinationSwiperComponent />
            <DisplayMode />
            <TablesHolder />
            <TextsHolder />
          </LeftSideMainEuropeCardContainer>
          <RightSideMainEuropeCardContainer>
            <CornerFlag />
            <Consultation />
            <KnowMoreEurope />
          </RightSideMainEuropeCardContainer>
        </SubMainEuropeCardContainer>
      </MainEuropeTableContainer>
      <MainEuropeTableContainerPhoneAndIpad>
        <BreadcrumbHolder />
        <CornerFlag />
        <DisplayMode />
        <TablesHolder />
        <TextsHolder />
        <KnowMoreEurope />
      </MainEuropeTableContainerPhoneAndIpad>
    </MainEuropeTableHolder>
  );
};

const MainEuropeTableHolder = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  }
`;

const MainEuropeTableContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  /* border: 3px solid pink; */

  @media (max-width: 1024px) {
    display: none;
  }
  /* display: grid;
  grid-template-columns: repeat(13, minmax(100px, 100px));
  grid-template-rows: repeat(48, minmax(50px, 50px)); */
  /* border: 3px solid red; */
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
  gap: 60px;
`;
const RightSideMainEuropeCardContainer = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 25px;
`;

// const Navbar1Styled = styled.Navbar1`
//   grid-area: 1 / 1 / 3 / 14;
//   border: 3px solid green;
// `;
// const BreadcrumbHolderStyled = styled.BreadcrumbHolder`
//   grid-area: 3 / 11 / 4 / 14;
//   border: 3px solid green;
// `;

// const SwiperComponentStyled = styled(SwiperComponent)`
//   grid-area: 4 / 1 / 7 / 11;
//   border: 3px solid green;
// `;
// const DisplayModeStyled = styled(DisplayMode)`
//   grid-area: 7 / 1 / 8 / 11;
//   border: 3px solid green;
// `;
// const TablesHolderStyled = styled(TablesHolder)`
//   grid-area: 8 / 1 / 34 / 11;
//   border: 3px solid green;
// `;
// const TextsHolderStyled = styled(TextsHolder)`
//   grid-area: 35 / 1 / 49 / 11;
//   border: 3px solid green;
// `;
// const CornerFlagHolderStyled = styled(CornerFlag)`
//   grid-area: 4 / 11 / 8 / 14;
//   border: 3px solid green;
// `;
// const ConsultationStyled = styled(Consultation)`
//   grid-area: 8 / 11 / 10 / 14;
//   border: 3px solid green;
// `;
// const KnowMoreEuropeStyled = styled(KnowMoreEurope)`
//   grid-area: 10 / 11 / 20 / 14;
//   border: 3px solid green;
// `;

const MainEuropeTableContainerPhoneAndIpad = styled.div`
  width: 100%;
  margin: auto;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  z-index: 1;
  @media (max-width: 1024px) {
    display: flex;
  }
  /* display: grid;
  grid-template-columns: repeat(13, minmax(100px, 100px));
  grid-template-rows: repeat(48, minmax(50px, 50px)); */
  /* border: 3px solid red; */
`;
const StyledSwiperComponent = styled(DestinationSwiperComponent)`
  width: 100%;
  margin: auto;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  z-index: 1;
  @media (min-width: 640px) and (max-width: 1024px) {
    display: flex;
  }
`;
