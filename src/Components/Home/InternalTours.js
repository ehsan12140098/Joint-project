import styled from "styled-components";
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
import qishm from "../../Assets/images/qishm.png";
import kish from "../../Assets/images/kish.png";
import mashhad from "../../Assets/images/mashhad.png";
import shiraz from "../../Assets/images/shiraz.png";

export const InternalTours = () => {
  return (
    <MainInternalTours>
      <DescriptionInternalTours>
        <TitleInternalTours>تورهای داخلی</TitleInternalTours>
        <SubtitleInternalTours>
          انتخاب شما از بین مقاصد محبوب سایر مسافران کدام است؟
        </SubtitleInternalTours>
      </DescriptionInternalTours>
      <DestinationsHolderInternalTours>
        <FirstDestinationInternalTours>
          <TextInternalTours>هرمزگان، قشم</TextInternalTours>
        </FirstDestinationInternalTours>
        <SecondDestinationInternalTours>
          <TextInternalTours>هرمزگان، کیش</TextInternalTours>
        </SecondDestinationInternalTours>
        <ThirdDestinationInternalTours>
          <TextInternalTours>خراسان رضوی، مشهد</TextInternalTours>
        </ThirdDestinationInternalTours>
        <FourthDestinationInternalTours>
          <TextInternalTours>فارس، شیراز</TextInternalTours>
        </FourthDestinationInternalTours>
      </DestinationsHolderInternalTours>
    </MainInternalTours>
  );
};

const MainInternalTours = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 80%;
  /* border: 1px solid green; */
  @media (max-width: 1024px) {
    width: 90%;
  }
`;
const DescriptionInternalTours = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleInternalTours = styled.div`
  color: #000;
  text-align: center;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;
const SubtitleInternalTours = styled.div`
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
const DestinationsHolderInternalTours = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const FirstDestinationInternalTours = styled.div`
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

  background-image: url(${qishm});
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
    border-radius: 16px;
    height: 80px;
    &:before {
      border-radius: 16px;
    }
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    height: 180px;
  }
`;
const SecondDestinationInternalTours = styled.div`
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

  background-image: url(${kish});
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
    border-radius: 16px;
    height: 80px;
    &:before {
      border-radius: 16px;
    }
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    height: 180px;
  }
`;
const ThirdDestinationInternalTours = styled.div`
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

  background-image: url(${mashhad});
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
    border-radius: 16px;
    height: 80px;
    &:before {
      border-radius: 16px;
    }
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    height: 180px;
  }
`;
const FourthDestinationInternalTours = styled.div`
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

  background-image: url(${shiraz});
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
    border-radius: 16px;
    height: 80px;
    &:before {
      border-radius: 16px;
    }
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    height: 180px;
  }
`;

const TextInternalTours = styled.div`
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
