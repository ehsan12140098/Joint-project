import styled, { keyframes } from 'styled-components';
import {
  ROW,
  COLUMN_ALIGN_END__JUSTIFY_START,
  COLUMN,
} from '../../styles/FlexStyles';
import { MAIN_TEXT } from '../../styles/globalTypography';
import melli from '../../Assets/Imgs/melli.webp';
import bisanlogo from '../../Assets/Imgs/bisanlogo.webp';
import corner from '../../Assets/Imgs/corner2.webp';
import instagram from '../../Assets/Imgs/instagram.png';
import { Envelope } from '../../Assets/Svgs/Envelope';
import { YellowCircle } from '../../Assets/Svgs/YellowCircle';
import { TwitterIcon } from '../../Assets/Svgs/TwitterIcon';
import { FacebookIcon } from '../../Assets/Svgs/FacebookIcon';
import { TelegramIcon } from '../../Assets/Svgs/TelegramIcon';
import { InstagramIcon } from '../../Assets/Svgs/InstagramIcon';
import { EmailFooter } from '../../Assets/Svgs/EmailFooter';
import { PhoneFooter } from '../../Assets/Svgs/PhoneFooter';
import { LocationFooter } from '../../Assets/Svgs/LocationFooter';
import airplanebackground from '../../Assets/images/airplanebackground.png';
import yellowairplane from '../../Assets/images/yellowairplane.png';
import bisanlogo1 from '../../Assets/images/bisanlogo1.png';
import footerbackground from '../../Assets/images/footerbackground.png';
import blackfooter from '../../Assets/images/blackfooter.png';
import blackfooterphone from '../../Assets/images/blackfooterphone.png';
import sazman from '../../Assets/images/sazman.png';
import rights from '../../Assets/images/rights.png';
import etemad from '../../Assets/images/etemad.png';
import media from '../../Assets/images/media.png';
import union from '../../Assets/images/union.png';
import domain from '../../Assets/images/domain.png';
import bisantext from '../../Assets/images/bisantext.png';

import { PersianNumberComponent } from '../Common/PersianNumberComponent';

import bisangif from '../../Assets/gifs/bisangif.gif';

export const Footer = () => {
  const phonenumber = '021-345648';
  return (
    <MainFooter>
      <AirplaneBackground>
        <AirplaneHolder></AirplaneHolder>
      </AirplaneBackground>
      <BisanLogoHolder src={bisangif} alt="bisan gif" />
      {/* <BisanLogoHolder src={bisanlogo1} alt="bisan gif" /> */}
      <BackgroundFooter></BackgroundFooter>
      <BlackFooter>
        <FooterHolder>
          <FooterGridContainer>
            <Leftnamads>
              <Sazman>
                <SazmanImage src={sazman}></SazmanImage>
              </Sazman>
              <Rights>
                <RightsImage src={rights}></RightsImage>
              </Rights>
              <Etemad>
                <EtemadImage src={etemad}></EtemadImage>
              </Etemad>
            </Leftnamads>
            <Rightnamads>
              <Media>
                <MediaImage src={media}></MediaImage>
              </Media>
              <Union>
                <UnionImage src={union}></UnionImage>
              </Union>
              <Domain>
                <DomainImage src={domain}></DomainImage>
              </Domain>
            </Rightnamads>

            <Leftlist>
              <TourListContainer>
                <div>تور ویژه </div>
                <YellowCircle></YellowCircle>
              </TourListContainer>
              <TourListContainer>
                <div>تور اروپا</div>
                <YellowCircle></YellowCircle>
              </TourListContainer>
              <TourListContainer>
                <div>درباره ما</div>
                <YellowCircle></YellowCircle>
              </TourListContainer>
              <TourListContainer>
                <div>تماس با ما</div>
                <YellowCircle></YellowCircle>
              </TourListContainer>
              <TourListContainer>
                <div>چرا بیسان سیر</div>
                <YellowCircle></YellowCircle>
              </TourListContainer>
            </Leftlist>
            <RightList>
              <TourListContainer>
                <div>تور دبی</div>
                <YellowCircle></YellowCircle>
              </TourListContainer>
              <TourListContainer>
                <div>تور آنتالیا</div>
                <YellowCircle></YellowCircle>
              </TourListContainer>
              <TourListContainer>
                <div>تور ایروان</div>
                <YellowCircle></YellowCircle>
              </TourListContainer>
              <TourListContainer>
                <div>تور تفلیس</div>
                <YellowCircle></YellowCircle>
              </TourListContainer>
              <TourListContainer>
                <div>تور استانبول</div>
                <YellowCircle></YellowCircle>
              </TourListContainer>
            </RightList>
            <SocialDreamsFooter>
              <BisanTextHolder></BisanTextHolder>
              <DreamsTextHolder> !!!رویاهات رو تور کن </DreamsTextHolder>
              <SocialMediumsHolder>
                <EachSocialMediasHolder>
                  <div>توییتر</div>
                  <TwitterIcon></TwitterIcon>
                </EachSocialMediasHolder>
                <EachSocialMediasHolder>
                  <div>فیسبوک</div>
                  <FacebookIcon></FacebookIcon>
                </EachSocialMediasHolder>
                <EachSocialMediasHolder>
                  <div>تلگرام</div>
                  <TelegramIcon></TelegramIcon>
                </EachSocialMediasHolder>
                <EachSocialMediasHolder>
                  <>اینستاگرام</>
                  <InstagramIcon></InstagramIcon>
                </EachSocialMediasHolder>
              </SocialMediumsHolder>
            </SocialDreamsFooter>
            <AddressMembershipFooter>
              <AddressFooter>
                <EmailPhoneFooter>
                  <EmailOrPhoneFooter>
                    <PhoneNumberHolder>
                      <PersianNumberComponent number={phonenumber} />
                    </PhoneNumberHolder>
                    <PhoneFooter></PhoneFooter>
                  </EmailOrPhoneFooter>
                  <EmailOrPhoneFooter>
                    <div> info@bisanseir.com</div>
                    <EmailFooter></EmailFooter>
                  </EmailOrPhoneFooter>
                </EmailPhoneFooter>
                <LocationFooterHolder>
                  <div>خيابان بهشتى، خيابان صابونچى، پلاك ٥٨، واحد5</div>
                  <LocationFooter></LocationFooter>
                </LocationFooterHolder>
              </AddressFooter>
              <MembershipDiv>
                <MembershipText>
                  با ثبت شماره موبایل خود از تورهای ویژه مورد علاقه خود با خبر
                  شوید
                </MembershipText>
                <MembershipButtonHolder>
                  <MembershipButtonContainer>
                    <div>عضویت</div>
                  </MembershipButtonContainer>
                  <EnterPhoneNumber>
                    شماره موبایلتان را وارد کنید
                  </EnterPhoneNumber>
                </MembershipButtonHolder>
              </MembershipDiv>
            </AddressMembershipFooter>
            <LastPartFooter>
              <BisanFooterDescription>
                بیسان‌سیر با مجموعه‌ای بی‌نظیر از خدمات گردشگری در تلاش است تا
                سفری آسوده و مطمئن را برای شما عزیزان فراهم سازد
              </BisanFooterDescription>
              <FooterLine></FooterLine>
              <LastFooterText>
                تمامی حقوق مادی و معنوی این وبسایت متعلق به آژانس مسافرتی{' '}
                <Yellowbisantext>بیسان سیر</Yellowbisantext> می باشد
              </LastFooterText>
            </LastPartFooter>
          </FooterGridContainer>
        </FooterHolder>
      </BlackFooter>
    </MainFooter>
  );
};

const MainFooter = styled.div`
  position: relative;
  background-color: #ffffff;
  margin-top: 100px;
  /* border: 3px solid green; */
`;
const AirplaneBackground = styled.div`
  width: 50px;
  height: 80px;
  border-radius: 25px;
  top: -60px;
  left: calc(50% - 27px);
  margin: auto;
  position: absolute;
  background-image: url(${airplanebackground});
  /* border: 3px solid green; */
`;
const upwarddownward = keyframes`
   0% {
            transform: translate(0);
  }
  50% {
            transform: translateY(25px);
  }
 
  100% {
            transform: translate(0);
  }
`;

const AirplaneHolder = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 25px;
  top: -10px;
  left: -14px;
  margin: auto;
  position: absolute;
  background-image: url(${yellowairplane});
  /* border: 1px solid red; */
  animation: ${upwarddownward} 3s linear infinite both;
`;
const BisanLogoHolder = styled.img`
  position: absolute;
  top: 150px;
  left: calc(50% - 50px);
  width: 136px;
  height: 129px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const BackgroundFooter = styled.div`
  width: 100%;
  height: 540px;
  top: 0px;
  left: 0px;
  margin: auto;
  position: absolute;
  background-image: url(${footerbackground});
  opacity: 75%;
  @media (max-width: 640px) {
    height: 880px;
  }
  @media (min-width: 640px) and (max-width: 820px) {
    height: 880px;
  }
`;
const BlackFooter = styled.div`
  height: 540px;
  background-image: url(${blackfooter});
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  /* border: 5px solid orange; */
  @media (max-width: 640px) {
    height: 880px;
    background-image: url(${blackfooterphone});
  }
  @media (min-width: 640px) and (max-width: 820px) {
    background-image: url(${blackfooter});
    height: 880px;
  }
  @media (min-width: 820px) and (max-width: 912px) {
    background-image: url(${blackfooter});
    height: 1200px !important;
  }
  @media (min-width: 912px) and (max-width: 1024px) {
    background-image: url(${blackfooter});
    height: 1480px;
  }
`;
const FooterHolder = styled.div`
  height: 95%;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 3px solid yellow; */
  margin-top: 30px;
`;
const FooterGridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  /* border: 3px solid red; */
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(33, 1fr);
  }
  @media (min-width: 640px) and (max-width: 820px) {
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(7, 1fr);
  }
  @media (min-width: 820px) and (max-width: 912px) {
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
  @media (min-width: 912px) and (max-width: 1024px) {
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }
`;

const Leftnamads = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  grid-area: 1 / 1 / 3 / 9;
  /* border: 3px solid green; */
  @media (max-width: 640px) {
    grid-area: 17 / 1 / 22 / 3;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    grid-area: 4 / 1 / 5/ 8;
  }
`;
const Sazman = styled.div`
  width: 95px;
  height: 95px;
  border-radius: 24px;
  border: 1px solid #e9e9e9;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SazmanImage = styled.img`
  width: 75px;
  height: 65px;
`;
const Rights = styled.div`
  width: 95px;
  height: 95px;
  border-radius: 24px;
  border: 1px solid #e9e9e9;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightsImage = styled.img`
  width: 80px;
  height: 80px;
`;
const Etemad = styled.div`
  width: 95px;
  height: 95px;
  border-radius: 24px;
  border: 1px solid #e9e9e9;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EtemadImage = styled.img`
  width: 80px;
  height: 80px;
`;

const Rightnamads = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  grid-area: 1 / 17 / 3 / 25;
  /* border: 3px solid green; */
  @media (max-width: 640px) {
    grid-area: 22 / 1 / 27 / 3;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    grid-area: 4 / 8 / 5 / 15;
  }
`;

const Media = styled.div`
  width: 95px;
  height: 95px;
  border-radius: 24px;
  border: 1px solid #e9e9e9;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MediaImage = styled.img`
  width: 80px;
  height: 80px;
`;
const Union = styled.div`
  width: 95px;
  height: 95px;
  border-radius: 24px;
  border: 1px solid #e9e9e9;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UnionImage = styled.img`
  width: 80px;
  height: 80px;
`;
const Domain = styled.div`
  width: 95px;
  height: 95px;
  border-radius: 24px;
  border: 1px solid #e9e9e9;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DomainImage = styled.img`
  width: 80px;
  height: 80px;
`;

const Leftlist = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  color: #fff;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  /* border: 3px solid green; */
  grid-area: 3 / 1 / 7 / 5;
  padding: 10px 0px;
  @media (max-width: 640px) {
    grid-area: 8 / 1 / 17 / 2;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    grid-area: 2 / 1 / 4 / 4;
  }
`;
const TourListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 16px;
`;

const RightList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  color: #fff;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  grid-area: 3 / 5 / 7 / 8;
  margin: 10px 0px;
  @media (max-width: 640px) {
    grid-area: 8 / 2 / 17 / 3;
    padding-right: 20px;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    grid-area: 2 / 12 / 4 / 15;
  }
`;
const SocialDreamsFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  gap: 24px;
  grid-area: 4 / 9 / 7 / 17;
  /* border: 3px solid green; */
  @media (max-width: 640px) {
    grid-area: 1 / 1 / 4 / 3;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    grid-area: 1 / 5 / 2 / 11;
  }
`;
const BisanTextHolder = styled.div`
  width: 25%;
  height: 18%;
  background-image: url(${bisantext});
  /* border: 1px solid blue; */
  @media (max-width: 1024px) {
    display: none;
  }
`;
const DreamsTextHolder = styled.div`
  height: 15%;
  color: #fff;
  text-align: center;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
`;
const SocialMediumsHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const EachSocialMediasHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;
const AddressMembershipFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  /* border: 3px solid green; */
  grid-area: 3 / 17 / 7 / 25;
  @media (max-width: 640px) {
    grid-area: 4 / 1 / 8 / 3;
  }
  @media (min-width: 640px) and (max-width: 820px) {
    grid-area: 2 / 5 / 4 / 11;
    gap: 10px;
  }
  @media (min-width: 820px) and (max-width: 1024px) {
    grid-area: 2 / 5 / 4 / 11;
    gap: 4px;
  }
`;
const AddressFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  /* border: 3px solid green; */
  grid-area: 3 / 17 / 7 / 25;
  @media (max-width: 640px) {
    grid-area: 4 / 1 / 8 / 3;
  }
  @media (min-width: 640px) and (max-width: 820px) {
    grid-area: 2 / 5 / 4 / 11;
    gap: 10px;
  }
  @media (min-width: 820px) and (max-width: 1024px) {
    grid-area: 2 / 5 / 4 / 11;
    gap: 4px;
  }
`;
const EmailPhoneFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const PhoneNumberHolder = styled.div`
  color: #fff;
  font-family: IRANSans(FaNum);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const EmailOrPhoneFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #fff;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.6px;
`;
const LocationFooterHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 8px;
  width: 100%;
  color: #fff;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  @media (max-width: 640px) {
    font-size: 13px;
  }
`;
const MembershipDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  @media (max-width: 640px) {
    display: none;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    gap: 8px;
  }
`;
const MembershipText = styled.div`
  color: #fff;
  text-align: right;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;
const MembershipButtonHolder = styled.div`
  width: 100%;
  border-radius: 28px;
  border: 1px solid #ccc;
  background: #131313;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;
const MembershipButtonContainer = styled.div`
  width: 30%;
  margin: 2px;
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background: #ede059;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);

  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const EnterPhoneNumber = styled.div`
  width: 60%;
  color: #fff;
  text-align: right;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;
const LastPartFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  grid-area: 7 / 1 / 9 / 25;
  @media (max-width: 640px) {
    grid-area: 27 / 1 / 34 / 3;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    grid-area: 5 / 1 / 6 / 15;
  }
`;
const BisanFooterDescription = styled.div`
  color: #fff;
  text-align: center;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;
const FooterLine = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 1.01%,
    #fff 26.27%,
    #fff 77.31%,
    rgba(255, 255, 255, 0) 100%
  );
`;
const LastFooterText = styled.div`
  color: #bebebe;
  text-align: center;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Yellowbisantext = styled.span`
  color: #ede059;
  text-align: center;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
