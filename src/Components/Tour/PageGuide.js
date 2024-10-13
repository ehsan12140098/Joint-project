import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { GuideColumn } from "../../Assets/Svgs/GuideColumn";
import { DoubleChevron } from "../../Assets/Svgs/DoubleChevron";
import dashedline from "../../Assets/images/dashedline.png";
import yellowline from "../../Assets/images/yellowline.png";

// export const PageGuide = ({ visibleComponentId, ...props }) => {
export const PageGuide = ({
  visibleComponentId,
  scrollToSection,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState("");

  useEffect(() => {
    setActiveIndex(visibleComponentId);
  }, [visibleComponentId]);

  return (
    <PageGuideHolder {...props}>
      <GuideTitlesHolder>
        <EachTitleHolder onClick={() => scrollToSection("HotelDescription")}>
          <EachTitleContainer
            className={activeIndex === "HotelDescription" ? "active" : ""}
          >
            هتل
          </EachTitleContainer>
          <DoubleChevronSvG active={activeIndex === "HotelDescription"} />
          <Rounded
            active={
              activeIndex === "HotelDescription" ||
              activeIndex === "HotelPageDescrip" ||
              activeIndex === "HotelPageFacility"
            }
          />
        </EachTitleHolder>
        <EachTitleHolder
          onClick={() => scrollToSection("HotelPageDescrip")}
          // className={activeIndex === "HotelDescription" ? "active" : ""}
        >
          <EachTitleContainer
            className={activeIndex === "HotelPageDescrip" ? "active" : ""}
          >
            اطلاعات تور
          </EachTitleContainer>
          <DoubleChevronSvG active={activeIndex === "HotelPageDescrip"} />
          <Rounded
            active={
              activeIndex === "HotelPageDescrip" ||
              activeIndex === "HotelPageFacility"
            }
          />
        </EachTitleHolder>
        <EachTitleHolder
          onClick={() => scrollToSection("HotelPageFacility")}
          // className={activeIndex === "HotelDescription" ? "active" : ""}
        >
          <EachTitleContainer
            className={activeIndex === "HotelPageFacility" ? "active" : ""}
          >
            خدمات تور
          </EachTitleContainer>
          <DoubleChevronSvG active={activeIndex === "HotelPageFacility"} />
          <Rounded active={activeIndex === "HotelPageFacility"} />
        </EachTitleHolder>
        <EachTitleHolder
        // onClick={() => scrollToSection("HotelPageLanguage")}
        // className={activeIndex === "HotelDescription" ? "active" : ""}
        >
          <EachTitleContainer>توضیحات</EachTitleContainer>
          <Rounded />
        </EachTitleHolder>
        <EachTitleHolder>
          <EachTitleContainer>گالری تصویر</EachTitleContainer>
          <Rounded />
        </EachTitleHolder>
        <EachTitleHolder>
          <EachTitleContainer>تورهای پیشنهادی</EachTitleContainer>
          <Rounded />
        </EachTitleHolder>
      </GuideTitlesHolder>
      <DashedLine />
      <FirstYellowLine
        active={
          activeIndex === "HotelPageDescrip" ||
          activeIndex === "HotelPageFacility"
        }
      />
      <SecondYellowLine active={activeIndex === "HotelPageFacility"} />
      <ThirdYellowLine />
      <FourthYellowLine />
      <FifthYellowLine />
    </PageGuideHolder>
  );
};

const PageGuideHolder = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  position: relative;

  /* border: 3px solid red; */
`;

const GuideTitlesHolder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
`;

const EachTitleHolder = styled.div`
  display: flex;
  padding: 8px 0px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 47px;
  background: #fff;
`;
const EachTitleContainer = styled.div`
  color: #697a80;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: relative;
`;
const DoubleChevronSvG = styled(DoubleChevron)`
  display: ${({ active }) => (active ? "inline-block" : "none")};
`;

const ConsultationTextHolder = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  opacity: 0.5;
`;
const Rounded = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 11px;
  background: #c9c9c9;
  background: ${({ active }) => (active ? "#EDE059" : "#c9c9c9")};
  z-index: 2;
`;
const DashedLine = styled.div`
  background-image: url(${dashedline});
  width: 1px;
  height: 235px;
  position: absolute;
  right: 21px;
  z-index: 1;
`;
const FirstYellowLine = styled.div`
  display: ${({ active }) => (active ? "inline-block" : "none")};
  background-image: url(${yellowline});
  width: 3px;
  height: 50px;
  position: absolute;
  right: 20px;
  top: 30px;
  z-index: 1;
`;
const SecondYellowLine = styled.div`
  display: ${({ active }) => (active ? "inline-block" : "none")};
  background-image: url(${yellowline});
  width: 3px;
  height: 50px;
  position: absolute;
  right: 20px;
  top: 80px;
  z-index: 1;
  border: 1px solid red;
`;
const ThirdYellowLine = styled.div`
  display: ${({ active }) => (active ? "inline-block" : "none")};
  background-image: url(${yellowline});
  width: 3px;
  height: 50px;
  position: absolute;
  right: 20px;
  top: 130px;
  z-index: 1;
`;
const FourthYellowLine = styled.div`
  display: ${({ active }) => (active ? "inline-block" : "none")};
  background-image: url(${yellowline});
  width: 3px;
  height: 50px;
  position: absolute;
  right: 20px;
  top: 180px;
  z-index: 1;
`;
const FifthYellowLine = styled.div`
  display: ${({ active }) => (active ? "inline-block" : "none")};
  background-image: url(${yellowline});
  width: 3px;
  height: 50px;
  position: absolute;
  right: 20px;
  top: 220px;
  z-index: 1;
`;
