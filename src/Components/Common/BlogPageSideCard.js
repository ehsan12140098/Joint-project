import React from "react";
import styled from "styled-components";
import mainblogpagecardimage from "../../Assets/images/mainblogpagecardimage.png";

export const BlogPageSideCard = () => {
  return (
    <BlogPageSideCardHolder>
      <BlogPageSideCardContent>
        <BlogPageSideCardContentTitle>
          بهترین و ارزان ترین هتل های دبی
        </BlogPageSideCardContentTitle>
        <BlogPageSideCardContentDescription>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از ...
        </BlogPageSideCardContentDescription>
      </BlogPageSideCardContent>
      <BlogPageSideCardImageHolder></BlogPageSideCardImageHolder>
    </BlogPageSideCardHolder>
  );
};

const BlogPageSideCardHolder = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background: var(--White, #fff);
`;

const BlogPageSideCardImageHolder = styled.div`
  width: 22%;
  height: 100%;
  background-image: url(${mainblogpagecardimage});
  background-size: cover;
  background-position: center;
  border-radius: 20px;
`;
const BlogPageSideCardContent = styled.div`
  width: 73%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;
const BlogPageSideCardContentTitle = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const BlogPageSideCardContentDescription = styled.div`
  color: var(--40, #999);
  text-align: right;

  /* Sub Paragraph */
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
