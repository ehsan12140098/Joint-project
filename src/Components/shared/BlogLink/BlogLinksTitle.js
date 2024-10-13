import styled from 'styled-components';

export default function BlogLinksTitle({ title }) {
  return <KnowMoreEuropeText>{title}</KnowMoreEuropeText>;
}

const KnowMoreEuropeText = styled.div`
  color: #000;
  text-align: center;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
