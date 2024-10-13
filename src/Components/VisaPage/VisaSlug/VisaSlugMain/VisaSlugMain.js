import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';
import styled from 'styled-components';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

export default function VisaSlugMain({ visa, content }) {
  const isMdOrBigger = useIsDesktopDisplay('md');
  const { hash } = useLocation();

  useEffect(() => {
    let element = null;
    if (hash) {
      const id = decodeURIComponent(hash);
      element = document.querySelector(id);
    }
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, [hash]);

  if (!visa) return <div>Loading...</div>;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        // border: '1px solid blue'
      }}
    >
      <BisanCard
        sx={{
          display: 'flex',
          gap: '24px',
          flexDirection: isMdOrBigger ? 'row' : 'column',
          alignItems: 'center',
        }}
      >
        <img
          alt={visa.title}
          src={visa.image}
          style={{
            width: isMdOrBigger ? '290px' : '144px',
            borderRadius: '50%',
          }}
        />
        <div>
          <SectionTitle>{visa.title}</SectionTitle>
          <div
            style={{
              color: 'rgb(82, 82, 91)',
              lineHeight: '28px',
              fontWeight: '300',
              marginTop: '8px',
            }}
          >
            {visa.discretion}
          </div>
        </div>
      </BisanCard>
      {content.map(item => (
        <BisanCard key={item.hash} id={item.hash.substring(1)}>
          <SectionTitle>
            {item.title}
            <StyledContent
              style={{ marginTop: '16px' }}
              dangerouslySetInnerHTML={{ __html: item.discretion }}
            ></StyledContent>
          </SectionTitle>
        </BisanCard>
      ))}
    </div>
  );
}

const StyledContent = styled.div`
  table {
    margin: auto;
    border: 1px solid red;
    border-collapse: separate !important;
    border-spacing: 0 8px;

    tr {
      padding: 10px 0;
      box-sizing: content-box;

      &:nth-child(even) {
        background-color: #e6e6e6;
      }

      td {
        border: 2px solid rgb(204, 204, 204);
        color: #000;

        &:first-child {
          border-left-width: 0;
          border-radius: 0 17px 17px 0;
          font-weight: 700;
        }
        &:last-child {
          border-right-width: 0;
          border-radius: 17px 0 0 17px;
        }
      }
    }
  }
`;
