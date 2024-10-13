import styled from "styled-components";

export const VisaPageGuide = ({ discretionTitles }) => {
  return (
    <PageGuideHolder>
      <GuideTitlesHolder>
        {discretionTitles.map((title, index) => (
          <EachTitleHolder key={index}>
            <EachTitleContainer>{title}</EachTitleContainer>
            <Rounded />
          </EachTitleHolder>
        ))}
      </GuideTitlesHolder>
      <GuideLine />
    </PageGuideHolder>
  );
};

const PageGuideHolder = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const GuideTitlesHolder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
`;

const EachTitleHolder = styled.div`
  display: flex;
  padding: 8px 0px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 47px;
  background: #fff;
`;
const EachTitleContainer = styled.div`
  color: #697a80;
  text-align: right;
  font-family: IRANSans;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: relative;
`;

const Rounded = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 11px;
  background: #c9c9c9;
  background: ${({ active }) => (active ? "#EDE059" : "#c9c9c9")};
  z-index: 2;
`;
const GuideLine = styled.div`
  position: absolute;
  right: 20px;
  top: 32px;
  bottom: 32px;
  border-left: 2px solid #c9c9c9; /* Adjust the color of the line here */
`;
