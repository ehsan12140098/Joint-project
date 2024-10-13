import styled from "styled-components";
import { Navbar3 } from "../Components/Common/Navbar3";
import { BreadcrumbHolder } from "../Components/Common/BreadcrumbHolder";
import { Question1 } from "../Components/Support/Question1";
import { Question2 } from "../Components/Support/Question2";
import { Question3 } from "../Components/Support/Question3";
import nav1background from "../Assets/images/nav1background.png";
import phonenavbarbackground from "../Assets/images/phonenavbarbackground.png";

export const Support = () => {
  return (
    <TotalHotelPageHolder>
      <MainHotelPageHolder>
        <Navbar3Holder>
          <Navbar3 />
        </Navbar3Holder>
        <BreadcrumbAndAboutUsTitleHolder>
          <BreadcrumbHolder />
          <AboutUsTitleHolder>پشتیبانی</AboutUsTitleHolder>
        </BreadcrumbAndAboutUsTitleHolder>
        <SubMainHotelPageHolder>
          <Question1 />
          <Question2 />
          <Question3 />
          <Question1 />
          <Question2 />
          <Question3 />
          <Question1 />
          <Question2 />
          <Question3 />
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
    z-index: 2;
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
  z-index: 2;
  /* @media (max-width: 1024px) {
    display: none;
  } */
`;

const Navbar3Holder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainHotelPageHolderPhone = styled.div`
  width: 80%;
  margin: auto;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  z-index: 2;
  @media (max-width: 1024px) {
    display: flex;
  }
`;

const BreadcrumbAndAboutUsTitleHolder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const AboutUsTitleHolder = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const SubMainHotelPageHolder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-start;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
`;
