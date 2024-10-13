import React from "react";
import styled from "styled-components";
import barcelona1 from "../../Assets/images/barcelonablog1.png";

export const KnowMoreEurope = () => {
  return (
    <KnowMoreEuropeHolder>
      <KnowMoreEuropeText>در مورد اروپا بیشتر بدانید</KnowMoreEuropeText>
      <KnowMoreEuropeFirstImgContainer>
        <KnowMoreEuropeFirstImgText>
          بایدها و نبایدهای سفر به شهر بارسلونا
        </KnowMoreEuropeFirstImgText>
      </KnowMoreEuropeFirstImgContainer>
      <KnowMoreEuropeFirstImgContainer>
        <KnowMoreEuropeFirstImgText>
          بایدها و نبایدهای سفر به شهر بارسلونا
        </KnowMoreEuropeFirstImgText>
      </KnowMoreEuropeFirstImgContainer>
      <KnowMoreEuropeFirstImgContainer>
        <KnowMoreEuropeFirstImgText>
          بایدها و نبایدهای سفر به شهر بارسلونا
        </KnowMoreEuropeFirstImgText>
      </KnowMoreEuropeFirstImgContainer>
    </KnowMoreEuropeHolder>
  );
};

const KnowMoreEuropeHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
`;

const KnowMoreEuropeText = styled.div`
  color: #000;
  text-align: center;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const KnowMoreEuropeFirstImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 146px;
  border-radius: 35px;
  background-image: url(${barcelona1});
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 35px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 624px) {
    height: 75px;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    height: 100px;
  }
`;

const KnowMoreEuropeFirstImgText = styled.div`
  width: 70%;
  color: #fff;
  text-align: center;
  font-family: IRANSans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 2;
  @media (max-width: 640px) {
    width: 80%;
    font-size: 14px;
    font-weight: 500;
  }
`;
const KnowMoreEuropeSecondDiv = styled.div``;
const KnowMoreEuropeThirdDiv = styled.div``;
