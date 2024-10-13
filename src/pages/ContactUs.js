import styled from "styled-components";
import Navbar1 from "../Components/Common/Navbar1";
import { Navbar3 } from "../Components/Common/Navbar3";
import { BreadcrumbHolder } from "../Components/Common/BreadcrumbHolder";
import { LocationPhoneEmail } from "../Components/Common/LocationPhoneEmail";
import nav1background from "../Assets/images/nav1background.png";
import phonenavbarbackground from "../Assets/images/phonenavbarbackground.png";

export const ContactUs = () => {
  return (
    <TotalHotelPageHolder>
      <MainHotelPageHolder>
        <Navbar3Holder>
          <Navbar3 />
        </Navbar3Holder>
        <BreadcrumbAndSelectedHotelHolder>
          <BreadcrumbHolder />
          <ContactUsPageTitle>ارتباط با ما</ContactUsPageTitle>
        </BreadcrumbAndSelectedHotelHolder>
        <SubMainHotelPageHolder>
          <LeftSideSubMainHotelPageHolder>
            <MapHolder></MapHolder>
            <LocationPhoneEmail />
          </LeftSideSubMainHotelPageHolder>
          <RightSideSubMainHotelPageHolder>
            <NameAndEmailHolder>
              <NameOrEmailFormHolder>
                <FormText>خانوادگی</FormText>
                <NameOrEmailInput type="text" placeholder="احمدی" />
              </NameOrEmailFormHolder>
              <NameOrEmailFormHolder>
                <FormText>نام </FormText>
                <NameOrEmailInput type="text" placeholder="محمد" />
              </NameOrEmailFormHolder>
            </NameAndEmailHolder>
            <TitleHolder>
              <FormText>عنوان</FormText>
              <TitleInput type="text" placeholder="خرید" />
            </TitleHolder>
            <MessageHolder>
              <FormText>پیام</FormText>
              <TextareaHolder />
            </MessageHolder>
            <SendButtonDivHolder>
              <SendButtonHolder> ارسال پیام</SendButtonHolder>
            </SendButtonDivHolder>
          </RightSideSubMainHotelPageHolder>
        </SubMainHotelPageHolder>
        <Devider />
        <TextHolder>
          تیم ﭘﺸﺘﯿﺒﺎﻧﯽ ﺑﯿﺴﺎن ﺳﯿﺮ در ﺗﻤﺎم ﻃﻮل ﻫﻔﺘﻪ، ﺑﻪ ﺻﻮرت 24 ﺳﺎﻋﺘﻪ ﭘﺎﺳﺨﮕوی ﺷﻤﺎ
          در زﻣﯿﻨﻪ‌ﻫﺎی ﻣﺨﺘﻠﻒ از ﺟﻤﻠﻪ: وﯾزای ﺗﮏ و ﮔﺮوﻫﯽ، ﺑﻠﯿﻂ ﻫﻮاﭘﯿﻤﺎ، رزرو ﻫﺘﻞ و
          ﺗﻮر و... ﻣﯽ‌ﺑﺎﺷﺪ.
        </TextHolder>
        <TextHolder>
          ﺑﯿﺴﺎن ‌ﺳﯿﺮ ﯾﮑﯽ از ﻣﻤﺘﺎزﺗﺮﯾﻦ ﺷﺮﮐﺖ‌ﻫﺎی اراﺋﻪ ﺧﺪﻣﺎت ﮔﺮدﺷﮕﺮی ﻣﯽ‌ﺑﺎﺷﺪ و ﺑﻪ
          ‌ﺧﻮد ﻣﯽ‌ﺑﺎﻟﯿﻢ ﮐﻪ ﻫﻤﻪ روﺰه ﺑر ﺗﻌﺪاد ﻣﺸﺘﺮﯾﺎن وﻓﺎدارﻣﺎن اﻓﺰوﺪه ﻣﯽ‌ﺷﻮد.
        </TextHolder>
      </MainHotelPageHolder>
    </TotalHotelPageHolder>
  );
};

const TotalHotelPageHolder = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background-image: url(${nav1background});
    z-index: 2;
  }
  @media (max-width: 640px) {
    &:before {
      background-image: url(${phonenavbarbackground});
      background-size: cover;
      height: 300px;
      z-index: 1;
    }
  }
`;

const MainHotelPageHolder = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  z-index: 2;
`;

const Navbar3Holder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BreadcrumbAndSelectedHotelHolder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ContactUsPageTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const SubMainHotelPageHolder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;
const LeftSideSubMainHotelPageHolder = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const MapHolder = styled.div`
  width: 100%;
  height: 265px;
  border: 1px solid lightgray;
  border-radius: 28px;
`;

const RightSideSubMainHotelPageHolder = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const NameAndEmailHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;
const NameOrEmailFormHolder = styled.div`
  position: relative;
  width: 48%;
  height: 50px;
  border-radius: 28px;
  border: 1px solid var(--30, #b3b3b3);
  background: var(--White, #fff);
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const TitleHolder = styled.div`
  width: 100%;
  position: relative;
  height: 50px;
  border-radius: 28px;
  border: 1px solid var(--30, #b3b3b3);
  background: var(--White, #fff);
`;

const FormText = styled.div`
  position: absolute;
  top: -12px;
  right: 36px;
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  background-color: white;
`;
const NameOrEmailInput = styled.input`
  position: absolute;
  width: 80%;
  right: 36px;
  top: 12px;
  height: 30px;
  border: none;
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  outline: none;
  ::placeholder {
    color: rgba(0, 0, 0, 0.45);
    text-align: right;
    font-family: IRANSans;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const TitleInput = styled.input`
  position: absolute;
  width: 80%;
  right: 36px;
  top: 12px;
  height: 30px;
  border: none;
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  outline: none;
  ::placeholder {
    color: rgba(0, 0, 0, 0.45);
    text-align: right;
    font-family: IRANSans;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const MessageHolder = styled.div`
  position: relative;
`;

const TextareaHolder = styled.textarea`
  padding: 8px 24px;
  width: 100%;
  height: 195px;
  border-radius: 28px;
  border: 1px solid var(--30, #b3b3b3);
  background: var(--White, #fff);
  outline: none;
`;
const SendButtonDivHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  width: 100%;
`;
const SendButtonHolder = styled.div`
  width: 25%;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background: var(--Primery-Light-Color, #ede059);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 640px) {
    font-size: 12px;
    width: 30%;
  }
`;
const Devider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
`;
const TextHolder = styled.div`
  color: var(--50, #808080);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
