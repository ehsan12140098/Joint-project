import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import Navbar1 from "../Components/Common/Navbar1";
import { Navbar3 } from "../Components/Common/Navbar3";
import { BreadcrumbHolder } from "../Components/Common/BreadcrumbHolder";
import { BlogPageSideCard } from "../Components/Common/BlogPageSideCard";
import firstdubaiblogswiper from "../Assets/images/firstdubaiblogswiper.png";
import minorblogpagesecondimage from "../Assets/images/minorblogpagesecondimage.png";
import minorblogpagethirdimage from "../Assets/images/minorblogpagethirdimage.png";
import { ChevronRight } from "../Assets/Svgs/ChevronRight";
import { ChevronLeft } from "../Assets/Svgs/ChevronLeft";
import { EachTable } from "../Components/Table/EachTable";
import nav1background from "../Assets/images/nav1background.png";
import phonenavbarbackground from "../Assets/images/phonenavbarbackground.png";

export const MinorBlogPage = () => {
  return (
    <TotalBolgHolder>
      <MainBlogHolder>
        <Navbar3Holder>
          <Navbar3 />
        </Navbar3Holder>
        <BreadcrumbHolder />
        <SubMainBlogPageContainer>
          <LeftSideBlogPageContainer>
            <MinorBlogPageFirstImageHolder>
              <MinorBlogPageFirstImageText>
                بزرگترین دیدنی های دبی
              </MinorBlogPageFirstImageText>
            </MinorBlogPageFirstImageHolder>
            <DateAndYellowTinyDivs>
              <DateHolder>20 اردیبهشت 1400</DateHolder>
              <YellowTinyDivsHolder>
                <YellowTinyDivContainer>دانستنی ها</YellowTinyDivContainer>
                <YellowTinyDivContainer>امارات</YellowTinyDivContainer>
                <YellowTinyDivContainer>دبی</YellowTinyDivContainer>
              </YellowTinyDivsHolder>
            </DateAndYellowTinyDivs>
            <MinorBlogPageText>
              کولوسئوم مشهورترین جاذبه‌ی تاریخی شهر رم است و به جرات می‌‍توان
              گفت که یکی از باشکوه‌ترین بناهایی خواهد بود که در رم بازدید
              می‌کنید. این بنای شگفت انگیز دارای یک تاریخ غنی و سبک معماری فوق
              العاده است که گردشگران زیادی را به خود جذب می‌کند.
            </MinorBlogPageText>
            <MinorBlogPageTitle>کولوسئوم</MinorBlogPageTitle>
            <MinorBlogPageText>
              کولوسئوم مشهورترین جاذبه‌ی تاریخی شهر رم است و به جرات می‌‍توان
              گفت که یکی از باشکوه‌ترین بناهایی خواهد بود که در رم بازدید
              می‌کنید. این بنای شگفت انگیز دارای یک تاریخ غنی و سبک معماری فوق
              العاده است که گردشگران زیادی را به خود جذب می‌کند. با نگاه کردن به
              این بنا در خاطرات سربازان رومی و نبردهای شدید بین انسان و حیوانات
              درنده، غرق می‌شوید.اگر قصد سفر و یا خرید تور رم را دارید، به یاد
              داشته باشید که حتما از آمفی‌تئاتر کولوسئوم دیدن کنید. در این قسمت
              هر چیزی که باید در مورد بازدید از محبوب‌ترین بنای شهر رم بدانید را
              به شما ارائه می‌کنیم.
            </MinorBlogPageText>
            <MinorBlogPageSecondImageHolder />
            <MinorBlogPageTitle>تاریخچه‌ی کولوسئوم</MinorBlogPageTitle>
            <MinorBlogPageText>
              کولوسئوم بزرگ‌ترین آمفی تئاتر تاریخی در جهان است که قدمت آن به 70
              سال قبل از میلاد باز می‌گردد و یکی از بهترین ویرانه‌های حفظ شده از
              امپراتوری روم است. افسانه‌های رومی می‌گویند که این سازه‌ی ماسه ای
              و سنگی 80،000 نفر ظرفیت دارد که رومیان برای تماشای نبرد
              گلادیاتورها به این محل می‌آمدند. همچنین ‌یک قسمت زیرزمینی به نام
              هیپوگمhypogeumدر این مکان وجود دارد که به گفته مورخان، این منطقه
              جایی بوده است که حیوانات، زندانیان و گلادیاتورها را در آن نگه
              می‌داشتند. ساخت و ساز كولوسئوم در حدود سال‌های 70 تا 72 بعد از
              میلاد توسط امپراتور وسپاسیان از سلسله فلاویا ساخته شد که بعد از
              ساخت، آن را به مردم رومی ‌هدیه داد. البته ساخت طبقات فوقانی توسط
              پسرش تیتوس در سال 80 به پایان رسید. بازی‌های مراسم افتتاحیه در سال
              80 یا 81 برگزار شد که 100 روز به طول انجامید. طولانی بودن مراسم
              افتتاحیه برای این مکان، یکی از ویژگی‌های این سازه‌‌ی رومی محسوب
              می‌شود. دیو کاسیوس، یکی از تاریخ نویسان رومی بازگو می‌کند که بیش
              از 9000 حیوان وحشی در جریان بازی‌های افتتاحیه در این آمفی تئاتر
              کشته شدند!!
            </MinorBlogPageText>
            <MinorBlogPageThirdImageHolder />
            <MinorBlogPageTitle> کولوسئوم</MinorBlogPageTitle>
            <MinorBlogPageText>
              کولوسئوم مشهورترین جاذبه‌ی تاریخی شهر رم است و به جرات می‌‍توان
              گفت که یکی از باشکوه‌ترین بناهایی خواهد بود که در رم بازدید
              می‌کنید. این بنای شگفت انگیز دارای یک تاریخ غنی و سبک معماری فوق
              العاده است که گردشگران زیادی را به خود جذب می‌کند. با نگاه کردن به
              این بنا در خاطرات سربازان رومی و نبردهای شدید بین انسان و حیوانات
              درنده، غرق می‌شوید.اگر قصد سفر و یا خرید تور رم را دارید، به یاد
              داشته باشید که حتما از آمفی‌تئاتر کولوسئوم دیدن کنید.
            </MinorBlogPageText>
            <HorizontalDevider />
            <NextAndPrevContentHolder>
              <PrevHolder>
                <PrevContentHolder>
                  <ChevronLeft />
                  <PrevContentContainer>
                    <PrevContentTitle>
                      بهترین مکان های برگزاری جشن در دبی
                    </PrevContentTitle>
                    <NextOrPrevContentSubTitle>
                      مطلب قبلی
                    </NextOrPrevContentSubTitle>
                  </PrevContentContainer>
                </PrevContentHolder>
              </PrevHolder>
              <NextHolder>
                <NextContentHolder>
                  <NextContentContainer>
                    <NextContentTitle>
                      بهترین تورهای تفریحی دبی
                    </NextContentTitle>
                    <NextOrPrevContentSubTitle>
                      مطلب بعدی
                    </NextOrPrevContentSubTitle>
                  </NextContentContainer>
                  <ChevronRight />
                </NextContentHolder>
              </NextHolder>
            </NextAndPrevContentHolder>
            <CommentsHolder>
              <CommentsNumbertext>28 نظر ثبت شده</CommentsNumbertext>
              <Commentstext>نظرات</Commentstext>
            </CommentsHolder>
            <HorizontalDevider />
            <NameAndEmailHolder>
              <NameOrEmailFormHolder>
                <FormText>ایمیل</FormText>
                <NameOrEmailInput
                  type="text"
                  placeholder="لطفا ایمیل خود را وارد نمایید"
                />
              </NameOrEmailFormHolder>
              <NameOrEmailFormHolder>
                <FormText>نام و نام خانوادگی</FormText>
                <NameOrEmailInput type="text" placeholder="محمد" />
              </NameOrEmailFormHolder>
            </NameAndEmailHolder>
            <MessageHolder>
              <FormText>پیام</FormText>
              <TextareaHolder />
            </MessageHolder>
            <SendButtonDivHolder>
              <SendButtonHolder>ارسال</SendButtonHolder>
            </SendButtonDivHolder>
          </LeftSideBlogPageContainer>
          <RightSideBlogPageContainer>
            <BlogPageSideCardsHolder>
              <BlogPageSideCardsHolderTitle>
                پربازدیدترین مطالب
              </BlogPageSideCardsHolderTitle>
              <BlogPageSideCard></BlogPageSideCard>
              <BlogPageSideCard></BlogPageSideCard>
              <BlogPageSideCard></BlogPageSideCard>
              <BlogPageSideCard></BlogPageSideCard>
            </BlogPageSideCardsHolder>
            <VisaHolder>ویزای امارات</VisaHolder>
            <EachTable />
            <EachTable />
            <EachTable />
            <EachTable />
          </RightSideBlogPageContainer>
        </SubMainBlogPageContainer>
      </MainBlogHolder>
    </TotalBolgHolder>
  );
};

const TotalBolgHolder = styled.div`
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
    z-index: 1;
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

const MainBlogHolder = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 90%;
  }
`;

const MinorBlogPageFirstImageHolder = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 117px;
  background-image: url(${firstdubaiblogswiper});
  background-size: 100%;
  background-position: top;
  border-radius: 35px;
  opacity: 0.95;
  padding-bottom: 20px;
  &:before {
    content: "";
    position: absolute;
    border-radius: 35px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 35px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
    z-index: 1;
  }
`;
const MinorBlogPageFirstImageText = styled.div`
  color: var(--White, #fff);
  text-align: center;
  font-family: IRANSans;
  font-size: 31.25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 3;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const Navbar3Holder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DateAndYellowTinyDivs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const DateHolder = styled.div`
  color: var(--80, #333);
  text-align: right;
  font-family: IRANSans(FaNum);
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;
const YellowTinyDivsHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
const YellowTinyDivContainer = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: var(--Primery-Light-Color, #ede059);

  /* Main */
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  color: var(--Black, #000);
  text-align: right;

  /* Sub Paragraph */
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;

const MinorBlogPageText = styled.div`
  color: var(--70, #4d4d4d);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px; /* 218.75% */
`;
const MinorBlogPageTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const MinorBlogPageSecondImageHolder = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${minorblogpagesecondimage});
  background-size: cover;
  background-position: center;
  border-radius: 35px;
  @media (max-width: 640px) {
  }
`;
const MinorBlogPageThirdImageHolder = styled.div`
  width: 100%;
  height: 385px;
  background-image: url(${minorblogpagethirdimage});
  background-size: cover;
  background-position: center;
  border-radius: 35px;
`;
const HorizontalDevider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--20, #ccc);
`;
const NextAndPrevContentHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* border: 3px solid blue; */
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: normal;
  }
`;
const NextContentHolder = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* border: 3px solid green; */
`;
const NextHolder = styled.div`
  /* border: 3px solid pink; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const PrevHolder = styled.div`
  /* border: 3px solid pink; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 50%;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

const PrevContentHolder = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* border: 3px solid green; */
`;
const NextContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* border: 3px solid red; */
  width: 90%;
`;
const PrevContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  /* border: 3px solid red; */
  width: 90%;
`;
const NextContentTitle = styled.div`
  color: #000;
  text-align: left;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 640px) {
    text-align: right;
  }
`;
const PrevContentTitle = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const NextOrPrevContentSubTitle = styled.div`
  color: var(--60, #666);
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CommentsHolder = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Commentstext = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const CommentsNumbertext = styled.div`
  color: var(--50, #808080);
  text-align: right;
  font-family: IRANSans(FaNum);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const NameAndEmailHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 2px solid green; */
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

    /* Paragraph */
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
  width: 10%;
  height: 40px;
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
    width: 30%;
  }
`;

const SubMainBlogPageContainer = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 1;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`;
const LeftSideBlogPageContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  gap: 20px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const RightSideBlogPageContainer = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 40px;
  @media (max-width: 1024px) {
    width: 100%;
    align-items: flex-end;
  }
`;
const BlogPageSideCardsHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 50%;
  }
`;
const BlogPageSideCardsHolderTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const VisaHolder = styled.div`
  width: 100%;
  height: 40px;
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
  margin-top: 30px;
`;
