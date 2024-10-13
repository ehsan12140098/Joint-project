import styled from "styled-components";
import Navbar1 from "../Components/Common/Navbar1";
import { Navbar3 } from "../Components/Common/Navbar3";
import { BreadcrumbHolder } from "../Components/Common/BreadcrumbHolder";
import { VisaReasons } from "../Components/Visa/VisaReasons";
import { Continents } from "../Components/Visa/Continents";
import { Countries } from "../Components/Visa/Countries";
import nav1background from "../Assets/images/nav1background.png";
import phonenavbarbackground from "../Assets/images/phonenavbarbackground.png";

export const VisaPage = () => {
  return (
    <TotalHotelPageHolder>
      <MainHotelPageHolder>
        <Navbar3Holder>
          <Navbar3 />
        </Navbar3Holder>
        <BreadcrumbHolder />
        <SubMainHotelPageHolder>
          <LeftSideSubMainHotelPageHolder>
            <VisaReasons />
          </LeftSideSubMainHotelPageHolder>
          <RightSideSubMainHotelPageHolder>
            <Continents />
          </RightSideSubMainHotelPageHolder>
        </SubMainHotelPageHolder>
      </MainHotelPageHolder>
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
  width: 87%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  z-index: 1;
`;

const Navbar3Holder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
  @media (min-width: 640px) and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;
const LeftSideSubMainHotelPageHolder = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  gap: 24px;
`;

const RightSideSubMainHotelPageHolder = styled.div`
  width: 67%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
`;
