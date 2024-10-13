import React from "react";
import styled from "styled-components";
import Portuguese from "../../Assets/images/Portuguese.png";

export const EachCountry = ({ ...props }) => {
  return (
    <EachCountryHolder {...props}>
      <EachCountryName>
        <EachCountryEnglishName>پرتغال</EachCountryEnglishName>
        {/* <EachCountryPersianName>Portuguese</EachCountryPersianName> */}
      </EachCountryName>
      <EachCountryFlag />
    </EachCountryHolder>
  );
};

const EachCountryHolder = styled.div`
  /* width: 29%; */
  height: 105px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  border-radius: 30px;
  padding: 24px;
  background: var(--White, #fff);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  gap: 32px;
`;
const EachCountryFlag = styled.div`
  width: 58px;
  height: 58px;
  background-image: url(${Portuguese});
  background-size: cover;
  background-position: center;
`;
const EachCountryName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 4px;
`;
const EachCountryEnglishName = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const EachCountryPersianName = styled.div`
  color: var(--50, #808080);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
