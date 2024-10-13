import barcelona1 from '../../../Assets/images/barcelonablog1.png';
import styled from 'styled-components';

export default function BlogLink({ blog }) {
  return (
    <BlogLinkHolder>
      <KnowMoreEuropeFirstImgContainer className="imageHolder" />
      <KnowMoreEuropeFirstImgText>{blog.text}</KnowMoreEuropeFirstImgText>
    </BlogLinkHolder>
  );
}

const BlogLinkHolder = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 35px;

  &:hover {
    > .imageHolder {
      transform: scale(1.3);
    }
  }
`;

const KnowMoreEuropeFirstImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 146px;
  background-image: url(${barcelona1});
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 35px;
    background-color: rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 624px) {
    height: 75px;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    height: 100px;
  }
`;

const KnowMoreEuropeFirstImgText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  color: #fff;
  text-align: center;
  font-family: IRANSans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 2;
  @media (max-width: 1024px) {
    width: 80%;
    font-size: 14px;
    font-weight: 500;
  }
`;
