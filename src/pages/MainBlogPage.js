import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import Navbar1 from "../Components/Common/Navbar1";
import { Navbar3 } from "../Components/Common/Navbar3";
import { BreadcrumbHolder } from "../Components/Common/BreadcrumbHolder";
import { BlogSwiperComponent } from "../Components/MainBlog/BlogSwiperComponent";
import { MainBlogPagecard } from "../Components/MainBlog/MainBlogPagecard";
import { BlogPageSideCard } from "../Components/Common/BlogPageSideCard";
import { BasicPagination } from "../Components/Common/BasicPagination";
import nav1background from "../Assets/images/nav1background.png";
import phonenavbarbackground from "../Assets/images/phonenavbarbackground.png";

export const MainBlogPage = () => {
  return (
    <TotalBolgHolder>
      <MainBlogHolder>
        <Navbar3Holder>
          <Navbar3 />
        </Navbar3Holder>
        <BreadcrumbHolder />
        <BlogSwiperComponent />
        <BlogSwiperDevider />
        <SubMainBlogPageContainer>
          <LeftSideBlogPageContainer>
            <MainBlogPagecard />
            <MainBlogPagecard />
            <MainBlogPagecard />
            <MainBlogPagecard />
            <MainBlogPagecard />
            <MainBlogPagecard />
            <MainBlogPagecard />
            <BasicPagination />
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
            <BlogPageSideCardsHolder>
              <BlogPageSideCardsHolderTitle>
                محبوب ترین مطالب
              </BlogPageSideCardsHolderTitle>
              <BlogPageSideCard></BlogPageSideCard>
              <BlogPageSideCard></BlogPageSideCard>
              <BlogPageSideCard></BlogPageSideCard>
              <BlogPageSideCard></BlogPageSideCard>
            </BlogPageSideCardsHolder>
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
  z-index: 2;
`;

const BlogSwiperDevider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 12px;
`;

const SubMainBlogPageContainer = styled.div`
  width: 100%;
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const Navbar3Holder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftSideBlogPageContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  gap: 60px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const RightSideBlogPageContainer = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 60px;
  @media (max-width: 640px) {
    width: 100%;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 100%;
    flex-direction: row;
  }
`;
const BlogPageSideCardsHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  @media (min-width: 912px) and (max-width: 1024px) {
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

const MostPopularContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
`;
