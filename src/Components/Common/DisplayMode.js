import React from 'react';
import styled from 'styled-components';
import { SummaryIcon } from '../../Assets/Svgs/SummaryIcon';
import { TableIcon } from '../../Assets/Svgs/TableIcon';
import { CardIcon } from '../../Assets/Svgs/CardIcon';

export const DisplayMode = () => {
  return (
    <DisplayModeHolder>
      <DisplayModeContainer>
        <DisplayModeKeeper>
          <SummaryHolder>
            <SummaryTextHolder>خلاصه</SummaryTextHolder>
            <SummaryIcon />
          </SummaryHolder>
          <TableHolder>
            <TableTextHolder>جدول</TableTextHolder>
            <TableIcon />
          </TableHolder>
          <CardHolder>
            <CardTextHolder>کارت</CardTextHolder>
            <CardIcon />
          </CardHolder>
        </DisplayModeKeeper>
        <DisplayModeContainerTitle>نوع نمایش</DisplayModeContainerTitle>
      </DisplayModeContainer>
      <DisplayModeHolderTitle>تورهای اروپایی</DisplayModeHolderTitle>
    </DisplayModeHolder>
  );
};

const DisplayModeHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 640px) {
    flex-direction: column;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    margin: 20px 0px;
  }
`;

const DisplayModeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  @media (max-width: 640px) {
    display: none;
  }
`;
const DisplayModeKeeper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SummaryHolder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  padding: 12px;
  border-radius: 25px 0px 0px 25px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
`;
const TableHolder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  padding: 12px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
`;
const CardHolder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  padding: 12px;
  border-radius: 0px 25px 25px 0px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  background: #e3ebed;
`;

const SummaryTextHolder = styled.div`
  color: #697a80;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const TableTextHolder = styled.div`
  color: #697a80;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const CardTextHolder = styled.div`
  color: #697a80;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DisplayModeContainerTitle = styled.div`
  color: #697a80;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DisplayModeHolderTitle = styled.div`
  color: #5a623a;
  font-family: IRANSans;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
