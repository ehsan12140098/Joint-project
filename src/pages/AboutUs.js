import styled from "styled-components";
import Navbar1 from "../Components/Common/Navbar1";
import { Navbar3 } from "../Components/Common/Navbar3";
import { BreadcrumbHolder } from "../Components/Common/BreadcrumbHolder";
import { AboutUsMainText } from "../Components/About/AboutUsMainText";
import { AboutUsSupport } from "../Components/About/AboutUsSupport";
import { BisanServices } from "../Components/About/BisanServices";
import { AboutUsSwiperComponent } from "../Components/About/AboutUsSwiperComponent";
import { LocationPhoneEmail } from "../Components/Common/LocationPhoneEmail";
import nav1background from "../Assets/images/nav1background.png";
import phonenavbarbackground from "../Assets/images/phonenavbarbackground.png";

export const AboutUs = () => {
  return (
    <TotalHotelPageHolder>
      <MainHotelPageHolder>
        <Navbar3Holder>
          <Navbar3 />
        </Navbar3Holder>
        <BreadcrumbAndAboutUsTitleHolder>
          <BreadcrumbHolder />
          <AboutUsTitleHolder>درباره ما</AboutUsTitleHolder>
        </BreadcrumbAndAboutUsTitleHolder>
        <SubMainHotelPageHolder>
          <LeftSideSubMainHotelPageHolder>
            <BisanServices />
          </LeftSideSubMainHotelPageHolder>
          <RightSideSubMainHotelPageHolder>
            <AboutUsSwiperComponent />
            <AboutUsMainText />
            <AboutUsSupport />
            <AboutUsText>
              ما در حوزه گردشگری حرف‌های زیادی برای گفتن داریم و به خود می‌بالیم
              که همه روزه برتعداد مشتریان وفادارمان افزوده می‌شود.{" "}
            </AboutUsText>
            <LocationPhoneEmail />
          </RightSideSubMainHotelPageHolder>
        </SubMainHotelPageHolder>
      </MainHotelPageHolder>
      <MainHotelPageHolderPhone>
        <BreadcrumbAndAboutUsTitleHolder>
          <BreadcrumbHolder />
          <AboutUsTitleHolder>درباره ما</AboutUsTitleHolder>
        </BreadcrumbAndAboutUsTitleHolder>
        <SubMainHotelPageHolder>
          <AboutUsSwiperComponent />
          <BisanServicesAndAboutUsMainTextHolder>
            <BisanServices />
            <AboutUsMainText />
          </BisanServicesAndAboutUsMainTextHolder>
          <AboutUsSupport />
          <AboutUsText>
            ما در حوزه گردشگری حرف‌های زیادی برای گفتن داریم و به خود می‌بالیم
            که همه روزه برتعداد مشتریان وفادارمان افزوده می‌شود.{" "}
          </AboutUsText>
          <LocationPhoneEmail />
        </SubMainHotelPageHolder>
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
    z-index: 2;
  }
  @media (max-width: 640px) {
    &:before {
      background-image: url(${phonenavbarbackground});
      background-size: cover;
      height: 300px;
      z-index: 1;
      border: 1px solid red;
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
  @media (max-width: 1024px) {
    display: none;
  }
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
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
`;
const LeftSideSubMainHotelPageHolder = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  gap: 32px;
`;

const RightSideSubMainHotelPageHolder = styled.div`
  width: 68%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
`;
const AboutUsText = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
`;
const BisanServicesAndAboutUsMainTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 640px) and (max-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
