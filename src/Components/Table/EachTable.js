import React from 'react';
import styled from 'styled-components';
import tableimage from '../../Assets/images/tableimage.png';
import Qeshmair from '../../Assets/images/Qeshmair.png';
import eachtablebottomcloud from '../../Assets/images/eachtablebottomcloud.png';
import { DottedLine } from '../../Assets/Svgs/DottedLine';
import usePersianNumber from '../../hooks/usePersianNumber';

export const EachTable = () => {
  const convertToPersianNumber = usePersianNumber();

  return (
    <EachTableHolder>
      <TableImageHolder>
        <TableImageContent>
          <AirlineAndDurationHolder>
            <DurationHolder>
              {/* <DurationText>4 روز و3 شب</DurationText> */}
              <DurationText>
                {`${convertToPersianNumber(4)} روز و ${convertToPersianNumber(
                  3
                )} شب`}
              </DurationText>
            </DurationHolder>
            <AirlineHolder>
              <AirlineName>قشم ایر</AirlineName>
              <QeshmairIcon />
            </AirlineHolder>
          </AirlineAndDurationHolder>
          <TableTitle>تور فرانسه</TableTitle>
        </TableImageContent>
        <TableBottomCloud />
      </TableImageHolder>
      <TableDetailsHolder>
        <TableDetailsContainer>
          <OriginAndDestinationHolder>
            <OriginAndDestinationContainer>
              <OriginContainer>
                <OriginName>تهران</OriginName>
                <DepartureContainer>
                  <DepartureDate>1400/10/04</DepartureDate>
                  <DepartureText>پرواز رفت</DepartureText>
                </DepartureContainer>
              </OriginContainer>
              <DestinationContainer>
                <DestinationName>پاریس</DestinationName>
                <ReturnContainer>
                  <ReturnDate>1400/10/04</ReturnDate>
                  <ReturnText>پرواز برگشت</ReturnText>
                </ReturnContainer>
              </DestinationContainer>
            </OriginAndDestinationContainer>
            <DottedLineHolder>
              <DottedLine />
            </DottedLineHolder>
          </OriginAndDestinationHolder>
          <PriceHolder>
            <PriceContainer>
              <TomanHolder>تومان</TomanHolder>
              <NumberHolder>4,000,000</NumberHolder>
            </PriceContainer>
          </PriceHolder>
        </TableDetailsContainer>
      </TableDetailsHolder>
    </EachTableHolder>
  );
};

const EachTableHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 360px;
  /* border: 1px solid pink; */
  width: 100%;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  border-radius: 35px;
  border: 1px solid lightgray;
  @media (max-width: 640px) {
    height: 425px;
  }
`;
const TableImageHolder = styled.div`
  position: relative;
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid pink; */
  background-image: url(${tableimage});
  background-size: cover;
  background-position: center;
  border-radius: 35px;

  /* &:before {
     content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 35px;
    background: linear-gradient(
      5deg,
      #fff 42.05%,
      rgba(255, 255, 255, 0) 96.01%
    );
  }  */
`;
const TableBottomCloud = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  bottom: 0;
  background-image: url(${eachtablebottomcloud});
  background-size: cover;
  z-index: 1;
`;
const TableImageContent = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  /* border: 1px solid pink; */
`;
const AirlineAndDurationHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const AirlineHolder = styled.div`
  width: 36%;
  display: flex;
  padding: 4px 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 45px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  border: 1px solid white;
`;
const AirlineName = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const QeshmairIcon = styled.div`
  background-image: url(${Qeshmair});
  background-size: cover;
  background-position: center;
  width: 25px;
  height: 25px;
  /* border: 3px solid red; */
  z-index: 2;
`;
const TableTitle = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 2;
`;
const DurationHolder = styled.div`
  height: 100%;
  display: flex;
  padding: 4px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 27px;
  background: #e6e6e6;
`;
const DurationText = styled.div`
  color: #000;
  text-align: center;
  font-family: IRANSans(FaNum);
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const TableDetailsHolder = styled.div`
  /* border: 2px solid blue; */
  height: 55%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TableDetailsContainer = styled.div`
  /* border: 2px solid blue; */
  height: 90%;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 45px;
`;
const PriceHolder = styled.div`
  display: flex;
  width: 100%;
  height: 26%;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 44px;
  background: #e6e6e6;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
`;
const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const TomanHolder = styled.div`
  color: #5a623a;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const NumberHolder = styled.div`
  color: #5a623a;
  font-family: IRANSans(FaNum);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const OriginAndDestinationHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  height: 50%;
  width: 100%;

  /* border: 3px solid red; */
`;
const OriginAndDestinationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  height: 90%;
  width: 75%;
  /* border: 3px solid gray; */
`;
const OriginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 5px;
  width: 100%;
  /* border: 1px solid pink; */
`;
const OriginName = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* border: 1px solid purple; */
`;
const DepartureContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* border: 1px solid green; */
`;
const DepartureText = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* border: 1px solid blue; */
`;
const DepartureDate = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans(FaNum);
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* border: 1px solid red; */
`;

const DestinationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 5px;
  width: 100%;
  /* border: 1px solid pink; */
`;
const DestinationName = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* border: 1px solid purple; */
`;
const ReturnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* border: 1px solid green; */
`;
const ReturnText = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* border: 1px solid blue; */
`;
const ReturnDate = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans(FaNum);
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* border: 1px solid red; */
`;

const DottedLineHolder = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  /* border: 3px solid pink; */
  margin-top: 15px;
`;
