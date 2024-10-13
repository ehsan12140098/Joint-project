import React from "react";
import styled from "styled-components";
import tableimage from "../../Assets/images/tableimage.png";
import Qeshmair from "../../Assets/images/Qeshmair.png";
import { DottedLine } from "../../Assets/Svgs/DottedLine";
import mainblogpagecardimage from "../../Assets/images/mainblogpagecardimage.png";

export const MainBlogPagecard = () => {
  return (
    <MainBlogPagecardHolder>
      <MainBlogPagecardContainer>
        <MainBlogPagecardContent>
          <MainBlogPagecardContentTitle>
            کانال آبی دبی
          </MainBlogPagecardContentTitle>
          <MainBlogPagecardContentDescription>
            رودخانه‌ی سن که از پاریس می‌گذرد، لقب زیباترین منطقه‌ی پاریس را از
            آن خود کرده است. این رودخانه پر آب‌ترین رودخانه‌ی فرانسه می‌باشد.
            بسیاری از معروف‌ترین بناهای تاریخی و جاذبه‌های گردشگری برجسته‌ی شهر
            پاریس از جمله نوتردام، برج ایفل، موزه لوور و موزه اورسی در نزدیکی سن
            واقع شده اند. با یک سفر آبی توسط قایق یا کشتی، می‌توانید از بیرون
            نگاهی اجمالی به همه‌ی این بناها داشته باشید.
          </MainBlogPagecardContentDescription>
          <MainBlogPagecardTinyGrayDivsHolder>
            <TinyGrayDiv>دانستنیها</TinyGrayDiv>
            <TinyGrayDiv>امارات</TinyGrayDiv>
            <TinyGrayDiv>دبی</TinyGrayDiv>
          </MainBlogPagecardTinyGrayDivsHolder>
        </MainBlogPagecardContent>
        <MainBlogPagecardImageHolder />
      </MainBlogPagecardContainer>
    </MainBlogPagecardHolder>
  );
};

const MainBlogPagecardHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background: var(--White, #fff);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  /* border: 3px solid red; */
`;
const MainBlogPagecardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 16px;
  /* border: 3px solid purple; */
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    justify-content: space-around;
    height: 80%;
  }
`;
const MainBlogPagecardImageHolder = styled.div`
  width: 25%;
  height: 160px;
  background-image: url(${mainblogpagecardimage});
  background-size: cover;
  background-position: center;
  border-radius: 25px;
  border: 3px solid purple;
  @media (max-width: 640px) {
    width: 95%;
    height: 160px;
  }
`;
const MainBlogPagecardContent = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
  /* border: 3px solid green; */
  @media (max-width: 640px) {
    width: 100%;
    height: 90%;
  }
`;
const MainBlogPagecardContentTitle = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const MainBlogPagecardContentDescription = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const MainBlogPagecardTinyGrayDivsHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;
const TinyGrayDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border-radius: 24px;
  background: #c0d1d7;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  color: var(--Secondary-Dark-Color, #697a80);
  text-align: right;

  /* Sub Paragraph */
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
