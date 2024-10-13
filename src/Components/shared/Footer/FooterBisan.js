import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function FooterBisan() {
  return (
    <div
      style={{
        // height: '100px',
        fontSize: '14px',
        marginTop: '20px',
      }}
    >
      <p style={{ lineHeight: '24px', fontSize: '16px', textAlign: 'center' }}>
        بیسان‌سیر با مجموعه‌ای بی‌نظیر از خدمات گردشگری در تلاش است تا سفری
        آسوده و مطمئن را برای شما عزیزان فراهم سازد
      </p>
      <FooterLine />
      <p
        style={{
          lineHeight: '24px',
          fontSize: '16px',
          textAlign: 'center',
          color: 'rgb(229, 231, 235)',
        }}
      >
        تمامی حقوق مادی و معنوی این وبسایت متعلق به آژانس مسافرتی{' '}
        <Link to="/about-us" style={{ color: 'rgb(237, 224, 89)' }}>
          بیسان سیر{' '}
        </Link>
        می باشد
      </p>
    </div>
  );
}

const FooterLine = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 28px;
  margin-bottom: 20px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 1.01%,
    #fff 26.27%,
    #fff 77.31%,
    rgba(255, 255, 255, 0) 100%
  );
`;
