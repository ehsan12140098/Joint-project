import styled from "styled-components";
import Navbar1 from "../Components/Common/Navbar1";
import { Navbar3 } from "../Components/Common/Navbar3";
import { BreadcrumbHolder } from "../Components/Common/BreadcrumbHolder";
import installmentimage from "../Assets/images/installment-image.png";
import { InstallmentTourPageDescrip } from "../Components/Installment/InstallmentTourPageDescrip";
import { InstallmentTourPagePurchaseCondition } from "../Components/Installment/InstallmentTourPagePurchaseCondition";
import { InstallmentTourPagePurchaseSteps } from "../Components/Installment/InstallmentTourPagePurchaseSteps";
import { InstallmentTourPageImportantPoints } from "../Components/Installment/InstallmentTourPageImportantPoints";
import { InstallmentTourPageExample } from "../Components/Installment/InstallmentTourPageExample";
import { InstallmentCalculation } from "../Components/Installment/InstallmentCalculation";
import nav1background from "../Assets/images/nav1background.png";
import phonenavbarbackground from "../Assets/images/phonenavbarbackground.png";

export const InstallmentTourPage = () => {
  return (
    <TotalInstallmentTourPageHolder>
      <MainInstallmentTourPageHolder>
        <Navbar3Holder>
          <Navbar3 />
        </Navbar3Holder>
        <BreadcrumbHolder />
        <SubMainInstallmentTourPageHolder>
          <LeftSideInstallmentTourPageHolder>
            <InstallmentCalculation />
          </LeftSideInstallmentTourPageHolder>
          <RightSideSubMainHotelPageHolder>
            <InstallmentTourTitle>تورهای قسطی</InstallmentTourTitle>
            <InstallmentTourPageImageHolder>
              <InstallmentTourPageImageContainer></InstallmentTourPageImageContainer>
            </InstallmentTourPageImageHolder>
            <InstallmentTourPageDescrip />
            <InstallmentTourPagePurchaseCondition />
            <InstallmentTourPagePurchaseSteps />
            <InstallmentTourPageImportantPoints />
            <InstallmentTourPageExample />
          </RightSideSubMainHotelPageHolder>
        </SubMainInstallmentTourPageHolder>
      </MainInstallmentTourPageHolder>
    </TotalInstallmentTourPageHolder>
  );
};

const TotalInstallmentTourPageHolder = styled.div`
  width: 100%;
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
      /* border: 1px solid red; */
      height: 300px;
      z-index: -1;
    }
  }
`;

const MainInstallmentTourPageHolder = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  z-index: 2;
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 90%;
  }
`;
const Navbar3Holder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubMainInstallmentTourPageHolder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 640px) {
    flex-direction: column-reverse;
  }
`;
const LeftSideInstallmentTourPageHolder = styled.div`
  width: 31%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  gap: 32px;
  @media (max-width: 640px) {
    width: 100%;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 48%;
  }
`;

const RightSideSubMainHotelPageHolder = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  @media (max-width: 640px) {
    width: 100%;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 50%;
  }
`;
const InstallmentTourTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const InstallmentTourPageImageHolder = styled.div`
  width: 100%;
  height: 375px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InstallmentTourPageImageContainer = styled.div`
  background-image: url(${installmentimage});
  background-size: cover;
  background-position: center;
  width: 365px;
  height: 270px;
`;
