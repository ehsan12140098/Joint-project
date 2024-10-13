import React from "react";
import styled from "styled-components";
import { BlackLocation } from "../../Assets/Svgs/BlackLocation";
import { BlackPhone } from "../../Assets/Svgs/BlackPhone";
import { BlackEmail } from "../../Assets/Svgs/BlackEmail";

export const LocationPhoneEmail = () => {
  return (
    <LocationPhoneEmailHolder>
      <EachOfLocationPhoneEmailHolder>
        <EachOfLocationPhoneEmailContainer>
          خيابان بهشتى، خيابان صابونچى، پلاك ٥٨، طبقه ٣، واحد ٥
        </EachOfLocationPhoneEmailContainer>
        <BlackLocation />
      </EachOfLocationPhoneEmailHolder>
      <EachOfLocationPhoneEmailHolder>
        <EachOfLocationPhoneEmailContainer>
          43000030
        </EachOfLocationPhoneEmailContainer>
        <BlackPhone />
      </EachOfLocationPhoneEmailHolder>
      <EachOfLocationPhoneEmailHolder>
        <EachOfLocationPhoneEmailContainer>
          {" "}
          info@bisanseir.com
        </EachOfLocationPhoneEmailContainer>
        <BlackEmail />
      </EachOfLocationPhoneEmailHolder>
    </LocationPhoneEmailHolder>
  );
};

const LocationPhoneEmailHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;
const EachOfLocationPhoneEmailHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
`;
const EachOfLocationPhoneEmailContainer = styled.div`
  color: var(--50, #808080);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
