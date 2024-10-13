import React from "react";
import styled from "styled-components";
import { PhoneConsultation } from "../../Assets/Svgs/PhoneConsultation";

export const Consultation = () => {
  return (
    <ConsultationHolder>
      <ConsultationTextAndNumberHolder>
        <ConsultationTextHolder>نیاز به مشاوره دارید؟</ConsultationTextHolder>
        <ConsultationNumberHolder>021-43000030</ConsultationNumberHolder>
      </ConsultationTextAndNumberHolder>
      <ConsultationIconHolder>
        <PhoneConsultation />
      </ConsultationIconHolder>
    </ConsultationHolder>
  );
};

const ConsultationHolder = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 25px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 20px;
  background: #ede059;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
`;

const ConsultationIconHolder = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 50px;
  background: #f7f1b5;
`;
const ConsultationTextAndNumberHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const ConsultationTextHolder = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  opacity: 0.5;
`;
const ConsultationNumberHolder = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSansDNFaNum;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.2px;
`;
