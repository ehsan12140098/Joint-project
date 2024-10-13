import styled from "styled-components";
import { Navbar3 } from "../Components/Common/Navbar3";
import { BreadcrumbHolder } from "../Components/Common/BreadcrumbHolder";
import nav1background from "../Assets/images/nav1background.png";
import phonenavbarbackground from "../Assets/images/phonenavbarbackground.png";
import { Consultation } from "../Components/Common/Consultation";
import { PageGuide } from "../Components/Tour/PageGuide";
import { SchengenPic } from "../Components/SchengenVisa/SchengenPic";
import { HistorySchengen } from "../Components/SchengenVisa/HistorySchengen";
import { SchengenCountries } from "../Components/SchengenVisa/SchengenCountries";
import { DocumentSchengen } from "../Components/SchengenVisa/DocumentSchengen";
import Frame from "../Assets/images/Frame.png";
import { ImportantNote } from "../Components/SchengenVisa/ImportantNote";
import FrameTwo from "../Assets/images/FrameTwo.png";
import { DifferentVisa } from "../Components/SchengenVisa/DifferentVisa";

export const SchengenVisa = () => {
  return (
    <TotalHotelPageHolder>
      <MainHotelPageHolder>
        <Navbar3Holder>
          <Navbar3 />
        </Navbar3Holder>
        <BreadcrumbAndAboutUsTitleHolder>
          <BreadcrumbHolder />
        </BreadcrumbAndAboutUsTitleHolder>
        <SubMainSchengenVisaHolder>
          <LeftSideSubMain>
            <PageGuide />
            <Consultation />
            <VisaFormContainer>
              <VisaText>فرم ویزا</VisaText>
            </VisaFormContainer>
            <DocumentContainer>
              <DocumentText>مدارک مورد نیاز</DocumentText>
            </DocumentContainer>
          </LeftSideSubMain>
          <RightSideSubMain>
            <SchengenPic />
            <QuestionHolder>
              <ShortQuestionHolder>ویزا شنگن چیست؟</ShortQuestionHolder>
              <LongQuestionHolder>
                مسافران خارج از منطقه‌ شینگن می‌توانند با در اختیار داشتن ویزای
                شینگن، تحت زمان و شرایط مشخصی، به هر یک از کشورهای عضو این پیمان
                سفر کنند و در آن اقامت داشته باشند. این ویزا بر اساس هدف سفر و
                مدت زمان اقامت دارای انواع مختلفی است و برای هر یک از انواع آن
                نیز مدارک خاصی باید ارائه شوند
              </LongQuestionHolder>
            </QuestionHolder>
            <HistorySchengen />
            <SchengenCountries />
            <FrameIcon />
            <DocumentSchengen />
            <ImportantNote />
            <FrameTwoIcon />
            <DifferentVisa />
          </RightSideSubMain>
        </SubMainSchengenVisaHolder>
      </MainHotelPageHolder>
      <MainHotelPageHolderPhone>
        <Navbar3Holder>
          <Navbar3 />
        </Navbar3Holder>
        <BreadcrumbAndAboutUsTitleHolder>
          <BreadcrumbHolder />
        </BreadcrumbAndAboutUsTitleHolder>
        <SubMainSchengenVisaHolder>
          <SchengenPic />
          <FormAndDocumentHolder>
            <VisaFormContainer>
              <VisaText>فرم ویزا</VisaText>
            </VisaFormContainer>
            <DocumentContainer>
              <DocumentText>مدارک مورد نیاز</DocumentText>
            </DocumentContainer>
          </FormAndDocumentHolder>
          <QuestionHolder>
            <ShortQuestionHolder>ویزا شنگن چیست؟</ShortQuestionHolder>
            <LongQuestionHolder>
              مسافران خارج از منطقه‌ شینگن می‌توانند با در اختیار داشتن ویزای
              شینگن، تحت زمان و شرایط مشخصی، به هر یک از کشورهای عضو این پیمان
              سفر کنند و در آن اقامت داشته باشند. این ویزا بر اساس هدف سفر و مدت
              زمان اقامت دارای انواع مختلفی است و برای هر یک از انواع آن نیز
              مدارک خاصی باید ارائه شوند
            </LongQuestionHolder>
          </QuestionHolder>
          <HistorySchengen />
          <SchengenCountries />
          <FrameIcon />
          <DocumentSchengen />
          <ImportantNote />
          <FrameTwoIcon />
          <DifferentVisa />
        </SubMainSchengenVisaHolder>
      </MainHotelPageHolderPhone>
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
  @media (max-width: 1024px) {
    display: none;
  }
`;
const MainHotelPageHolderPhone = styled.div`
  width: 90%;
  margin: auto;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  z-index: 2;
  @media (max-width: 1024px) {
    display: flex;
  }
`;

const Navbar3Holder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BreadcrumbAndAboutUsTitleHolder = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SubMainSchengenVisaHolder = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const LeftSideSubMain = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  gap: 16px;
`;

const VisaFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background: #5a623a;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 8px 16px;
  gap: 10px;
  width: 100%;
  @media (min-width: 200px) and (max-width: 760px) {
    width: 60%;
  }

  @media (min-width: 760px) and (max-width: 1024px) {
    width: 30%;
  }
`;
const VisaText = styled.div`
  color: #ede059;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const DocumentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background: #5a623a;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 8px 16px;
  gap: 10px;
  width: 100%;
  @media (min-width: 200px) and (max-width: 760px) {
    width: 60%;
  }

  @media (min-width: 760px) and (max-width: 1024px) {
    width: 30%;
  }
`;

const DocumentText = styled.div`
  color: #ede059;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const RightSideSubMain = styled.div`
  width: 74%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 48px;
`;
const QuestionHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 15px;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 16px;
`;
const ShortQuestionHolder = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const LongQuestionHolder = styled.div`
  color: #4d4d4d;
  text-align: justify;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
  direction: rtl;
`;
const FlagOneHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 22px;
`;
const TurkeyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 30px;
  background: var(--White, #fff);

  /* Main */
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
`;
const TextContainer = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const FrameIcon = styled.div`
  background-image: url(${Frame});
  width: 322px;
  height: 316px;
  background-size: cover;
  background-position: center;
  /* margin: 70px 377px 70px 460px; */
`;
const FrameTwoIcon = styled.div`
  background-image: url(${FrameTwo});
  width: 337px;
  height: 345px;
  background-size: cover;
  background-position: center;
`;
const FormAndDocumentHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
  width: 100%;
  @media (max-width: 760px) {
    flex-direction: column;
  }
`;
