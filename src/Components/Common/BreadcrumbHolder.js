import React, { useState } from "react";
import { ChevronleftSmall } from "../../Assets/Svgs/ChevronleftSmall";
import styled, { css } from "styled-components";

export const BreadcrumbHolder = () => {
  const [hoveredItem, setHoveredItem] = useState("");

  const handleHover = (item) => {
    setHoveredItem(item);
  };

  const resetHover = () => {
    setHoveredItem("");
  };

  return (
    <MainBreadcrumbHolder>
      <BreadcrumbContainer>
        <BreadItem
          onMouseEnter={() => handleHover("bread-item1")}
          onMouseLeave={resetHover}
        >
          استانبول
        </BreadItem>
        <Separator
          isHovered={
            hoveredItem === "bread-item2" ||
            hoveredItem === "bread-item3" ||
            hoveredItem === "bread-item4"
          }
        >
          <ChevronleftSmall className="chevron-left" />
        </Separator>
        <BreadItem
          onMouseEnter={() => handleHover("bread-item2")}
          onMouseLeave={resetHover}
        >
          ترکیه
        </BreadItem>
        <Separator
          isHovered={
            hoveredItem === "bread-item3" || hoveredItem === "bread-item4"
          }
        >
          <ChevronleftSmall className="chevron-left" />
        </Separator>
        <BreadItem
          onMouseEnter={() => handleHover("bread-item3")}
          onMouseLeave={resetHover}
        >
          تور
        </BreadItem>
        <Separator isHovered={hoveredItem === "bread-item4"}>
          <ChevronleftSmall className="chevron-left" />
        </Separator>
        <BreadItem
          onMouseEnter={() => handleHover("bread-item4")}
          onMouseLeave={resetHover}
        >
          بیسان سیر
        </BreadItem>
      </BreadcrumbContainer>
    </MainBreadcrumbHolder>
  );
};

const MainBreadcrumbHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
  @media (max-width: 640px) {
    justify-content: center;
    margin-top: 30px;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    margin-top: 30px;
  }
`;
const BreadcrumbContainer = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  background: white;
  border: 3px solid gray;
`;

const BreadItem = styled.div``;

const Separator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isHovered }) =>
    isHovered &&
    css`
      transform: rotate(180deg);
      transform-origin: center;
    `}
`;
