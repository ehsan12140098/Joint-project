import React from "react";
import styled from "styled-components";
import tableimage from "../../Assets/images/tableimage.png";
import Qeshmair from "../../Assets/images/Qeshmair.png";
import { DottedLine } from "../../Assets/Svgs/DottedLine";
import { EachTable } from "../Table/EachTable";

export const SuggestedToursComponent = () => {
  return (
    <SuggestedToursHolder>
      <SuggestedToursTitle>تورهای پیشنهادی</SuggestedToursTitle>

      <SuggestedToursContainer>
        <EachTable />
        <EachTable />
        <EachTable />
      </SuggestedToursContainer>
    </SuggestedToursHolder>
  );
};

const SuggestedToursHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;
const SuggestedToursTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const SuggestedToursContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 20px;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;
