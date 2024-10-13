import styled, { keyframes } from "styled-components";
// import {
//   COLUMN,
//   ROW_ALIGN_CENTER__SPACE_B,
//   COLUMN_ALIGN_END__SPACE_B,
// } from "../../styles/FlexStyles";
// import {
//   H1_BOLD,
//   SMALL_TEXT,
//   MEDIUM_TEXT,
//   MEDIUM_TEXT_BOLD,
// } from "../../styles/globalTypography";
import installmentimage from "../../Assets/images/installment-image.png";
// import phuket from "../../Assets/Imgs/phuket.webp";

export const InstallmentTours = () => {
  return (
    <MainInstallmentTours>
      <InstallmentToursHolder>
        <InstallmentToursImage src={installmentimage}></InstallmentToursImage>
        <ContentInstallmentTours>
          <TextInstallmentTours>
            <TitleInstallmentTours>تورهای اقساطی</TitleInstallmentTours>
            <ParagraphInstallmentTours>
              با تور های اقساطی بیسان به راحتی به تمام نقاط دنیا سفر کنید
            </ParagraphInstallmentTours>
          </TextInstallmentTours>
          <ButtonInstallmentTours>
            <ButtonInstallmentToursText>
              شرایط و قوانین
            </ButtonInstallmentToursText>
          </ButtonInstallmentTours>
        </ContentInstallmentTours>
      </InstallmentToursHolder>
    </MainInstallmentTours>
  );
};

const MainInstallmentTours = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  /* border: 1px solid green; */
  @media (max-width: 1024px) {
    width: 90%;
  }
`;
const InstallmentToursHolder = styled.div`
  width: 1000px;
  padding: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.1);
  position: relative;
  &:before {
    content: "";
    position: absolute;
    border-radius: 25px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(94deg, #dfd6cd 2.38%, #fefefe 99.11%);
    z-index: 1;
  }
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    gap: 30px;
    &:before {
      background: #dfd6cd;
    }
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    padding: 12px;
  }
`;

const InstallmentToursImage = styled.img`
  width: 300px;
  height: 267px;
  z-index: 2;
  @media (max-width: 640px) {
    /* width: 100% !important; */
    height: 200px !important;
    background-size: cover;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    /* width: 100%; */
  }
`;
const ContentInstallmentTours = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 40px;
  @media (max-width: 640px) {
    gap: 20px;
    align-items: center;
  }
`;
const TextInstallmentTours = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 5px;
  @media (max-width: 640px) {
    align-items: center;
  }
`;
const heartbeat = keyframes`
 from {
            transform: scale(1);
            transform-origin: center center;
            animation-timing-function: ease-out;
  }
  10% {
            transform: scale(0.91);
            animation-timing-function: ease-in;
  }
  17% {
            transform: scale(0.98);
            animation-timing-function: ease-out;
  }
  33% {
            transform: scale(0.87);
            animation-timing-function: ease-in;
  }
  45% {
            transform: scale(1);
            animation-timing-function: ease-out;
  }
`;

const TitleInstallmentTours = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 48.83px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 2;
  animation: ${heartbeat} 1.5s ease-in-out infinite both;
  @media (max-width: 640px) {
    font-size: 36px;
    text-align: center;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    font-size: 24px;
  }
`;
const ParagraphInstallmentTours = styled.div`
  color: #000;
  text-align: right;
  /* H4 */
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  z-index: 2;
  @media (max-width: 640px) {
    font-size: 14px;
    text-align: center;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;
const ButtonInstallmentTours = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 35px;
  background: #ede059;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
  z-index: 2;
`;
const ButtonInstallmentToursText = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;
