import React from "react";
import styled from "styled-components";
import { PhoneConsultation } from "../../Assets/Svgs/PhoneConsultation";

export const MapHolder = () => {
  return (
    <MapLocationHolder>
      <MapLocationTitle>مکان</MapLocationTitle>
      <MapLocationcontainer>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1721355.4543611193!2d28.40884116243072!3d41.11249106043048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab98730bf51d1%3A0x43c4cb888ed31b7e!2sGrand%20Hilarium%20Hotel!5e0!3m2!1sen!2snl!4v1700292552303!5m2!1sen!2snl"
          width="300"
          height="115"
          style={{ borderRadius: 35 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <StyledIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1721355.4543611193!2d28.40884116243072!3d41.11249106043048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab98730bf51d1%3A0x43c4cb888ed31b7e!2sGrand%20Hilarium%20Hotel!5e0!3m2!1sen!2snl!4v1700292552303!5m2!1sen!2snl"
          style={{ borderRadius: 35 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></StyledIframe>
      </MapLocationcontainer>
    </MapLocationHolder>
  );
};

const MapLocationHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
`;

const MapLocationTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const MapLocationcontainer = styled.div`
  width: 100%;
`;
const StyledIframe = styled.iframe`
  width: 100%;
  height: 115px;
`;
