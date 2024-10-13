import React from "react";
import styled from "styled-components";

import europeflag from "../../Assets/images/europeflag.png";

export const CornerFlag = () => {
  return (
    <CornerHolder>
      <CornerFlagHolder></CornerFlagHolder>
      <CornerTextHolder>اروپا</CornerTextHolder>
    </CornerHolder>
  );
};

const CornerHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  z-index: 2;
`;
const CornerFlagHolder = styled.div`
  background-image: url(${europeflag});
  height: 147px;
  width: 151px;
`;
const CornerTextHolder = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 31.25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
