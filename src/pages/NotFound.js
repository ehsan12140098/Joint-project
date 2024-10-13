import styled from "styled-components";
import blackwhite from "../Assets/images/blackwhite.png";

export const NotFound = () => {
  return (
    <PictureContainer>
      <TextContainer>متاسفانه صفحه موردنظر یافت نشد!</TextContainer>
      <ShortTextHolder>
        <ShortTextContainer>بازگشت به صفحه اصلی</ShortTextContainer>
      </ShortTextHolder>
    </PictureContainer>
  );
};

const PictureContainer = styled.div`
  width: 100%;
  height: 900px;
  flex-shrink: 0;
  position: relative;
  background-image: url(${blackwhite});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const TextContainer = styled.div`
  position: absolute;
  top: 42%;
  left: 33%;
  color: #000;
  text-align: center;
  font-family: IRANSans;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  direction: rtl;
`;
const ShortTextHolder = styled.div`
  position: absolute;
  bottom: 45%;
  left: 42%;
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 41px;
  background: var(--White, #fff);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
`;

const ShortTextContainer = styled.div`
  color: var(--Secondary-Dark-Color, #697a80);
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
