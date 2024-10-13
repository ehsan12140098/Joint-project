import React from "react";
import styled from "styled-components";

export const Question3 = () => {
  return (
    <Question3Holder>
      <ShortTextHolder>سوال سوم</ShortTextHolder>
      <LongTextHolder>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد{" "}
      </LongTextHolder>
    </Question3Holder>
  );
};

const Question3Holder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  padding: 20px 50px 20px 20px;
  border-radius: 30px;
  background: var(--White, #fff);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  @media (max-width: 1024px) {
    padding: 24px;
  }
`;
const ShortTextHolder = styled.div`
  color: #000;
  text-align: right;

  /* H4 */
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const LongTextHolder = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px; /* 218.75% */
`;
