import React from "react";
import styled from "styled-components";
import { GuideColumn } from "../../Assets/Svgs/GuideColumn";
import { BlackTwitter } from "../../Assets/Svgs/BlackTwitter";
import { BlackLink } from "../../Assets/Svgs/BlackLink";
import { BlackFaceBook } from "../../Assets/Svgs/BlackFaceBook";
import { BlackInstagram } from "../../Assets/Svgs/BlackInstagram";

export const SocialMediaHolder = () => {
  return (
    <SocialMediaAndShareHolder>
      <SocialMediaContainer>
        <SocialMediaLittleContainer>
          <EachSocialMediaHolder>
            <BlackLink />
          </EachSocialMediaHolder>
          <EachSocialMediaHolder>
            <BlackTwitter />
          </EachSocialMediaHolder>
          <EachSocialMediaHolder>
            <BlackFaceBook />
          </EachSocialMediaHolder>
          <EachSocialMediaHolder>
            <BlackInstagram />
          </EachSocialMediaHolder>
        </SocialMediaLittleContainer>
      </SocialMediaContainer>
      <ShareHolder>اشتراک گذاری</ShareHolder>
    </SocialMediaAndShareHolder>
  );
};

const SocialMediaAndShareHolder = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* border: 3px solid red; */
`;

const SocialMediaContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 16px 16px 32px 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15) !important;
`;

const SocialMediaLittleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
const EachSocialMediaHolder = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 47px;
  background: #e3ebed;
`;
const ShareHolder = styled.div`
  position: absolute;
  top: 70px;
  left: 70px;
  display: flex;
  padding: 4px 16px;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  border-radius: 25px;
  background: #ede059;
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
