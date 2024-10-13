import styled, { keyframes } from "styled-components";
import {
  COLUMN,
  ROW_ALIGN_CENTER__SPACE_B,
  COLUMN_JUSTIFY_END__ALIGN_CENTER,
} from "../../styles/FlexStyles";
import {
  H1_BOLD,
  SMALL_TEXT,
  MEDIUM_TEXT,
} from "../../styles/globalTypography";
import dubai from "../../Assets/images/dubai.png";
import tblisi from "../../Assets/images/tblisi.png";
import istanbul from "../../Assets/images/istanbul.png";
import antalya from "../../Assets/images/antalya.png";

export const PopularTours = () => {
  return (
    <MainPopularDestinations>
      <DescriptionPopularDestinations>
        <Title>تورهای پرطرفدار</Title>
        <Subtitle>
          انتخاب شما از بین مقاصد محبوب سایر مسافران کدام است؟
        </Subtitle>
      </DescriptionPopularDestinations>
      <DestinationsHolder>
        <FirstDestination>
          <DestinationName>امارات، دبی</DestinationName>
        </FirstDestination>
        <SecondDestination>
          <DestinationName>گرجستان، تفلیس</DestinationName>
        </SecondDestination>
        <ThirdDestination>
          <DestinationName>ترکیه، استانبول</DestinationName>
        </ThirdDestination>
        <FourthDestination>
          <DestinationName>ترکیه، آنتالیا</DestinationName>
        </FourthDestination>
      </DestinationsHolder>
    </MainPopularDestinations>
  );
};

const MainPopularDestinations = styled.div`
  width: 80%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  /* border: 1px solid green; */
  z-index: 3;
  margin-top: 100px;
  @media (max-width: 640px) {
    width: 90%;
    margin-top: 100px;
    background: none;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 90%;
  }
`;
const DescriptionPopularDestinations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const bouncetop = keyframes`
  0%, 50%, 100% {
    opacity: 1;
  }
  25%, 75% {
    opacity: 0;
  }
`;

const Title = styled.div`
  color: #000;
  text-align: center;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  animation: ${bouncetop} 2s both;
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

const Subtitle = styled.div`
  color: #808080;
  text-align: center;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;
const DestinationsHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const FirstDestination = styled.div`
  width: 21%;
  height: 250px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: end;

  &:before {
    content: "";
    position: absolute;
    border-radius: 16px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 50%, #000 100%);
    z-index: 1; /* Set z-index to place it behind the image */
  }
  background-image: url(${dubai});
  background-size: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  &:hover {
    transform: translateY(-15px);
    &:before {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 50%, #000 100%);
    }
  }
  @media (max-width: 640px) {
    border-radius: 20px;
    height: 80px;
    &:before {
      border-radius: 20px;
    }
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    height: 180px;
  }
`;
const DestinationName = styled.div`
  color: #fff;
  text-align: center;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  z-index: 2;
  margin-bottom: 25px;
  @media (max-width: 640px) {
    font-size: 8px;
    margin-bottom: 10px;
  }
`;
const SecondDestination = styled.div`
  width: 21%;
  height: 250px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: end;

  &:before {
    content: "";
    position: absolute;
    border-radius: 16px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 50%, #000 100%);
    z-index: 1; /* Set z-index to place it behind the image */
  }
  background-image: url(${tblisi});
  background-size: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  &:hover {
    transform: translateY(-15px);
    &:before {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 50%, #000 100%);
    }
  }

  @media (max-width: 640px) {
    border-radius: 20px;
    height: 80px;
    &:before {
      border-radius: 20px;
    }
  }

  @media (min-width: 640px) and (max-width: 1024px) {
    height: 180px;
  }
`;
const ThirdDestination = styled.div`
  width: 21%;
  height: 250px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: end;

  &:before {
    content: "";
    position: absolute;
    border-radius: 16px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 50%, #000 100%);
    z-index: 1; /* Set z-index to place it behind the image */
  }
  background-image: url(${istanbul});
  background-size: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  &:hover {
    transform: translateY(-15px);
    &:before {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 50%, #000 100%);
    }
  }

  @media (max-width: 640px) {
    border-radius: 20px;
    height: 80px;
    &:before {
      border-radius: 20px;
    }
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    height: 180px;
  }
`;
const FourthDestination = styled.div`
  width: 21%;
  height: 250px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: end;

  &:before {
    content: "";
    position: absolute;
    border-radius: 16px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 50%, #000 100%);
    z-index: 1; /* Set z-index to place it behind the image */
  }
  background-image: url(${antalya});
  background-size: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  &:hover {
    transform: translateY(-15px);
    &:before {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 50%, #000 100%);
    }
  }

  @media (max-width: 640px) {
    border-radius: 20px;
    height: 80px;
    &:before {
      border-radius: 20px;
    }
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    height: 180px;
  }
`;
