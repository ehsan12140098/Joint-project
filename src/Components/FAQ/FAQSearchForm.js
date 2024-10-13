import styled from 'styled-components';

import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';
import { SearchIcon } from 'Assets/Svgs/Icons';

export default function FAQSearchForm() {
  return (
    <form style={{ marginTop: '12px' }}>
      <BisanCard sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <SectionTitle style={{ flexShrink: '0' }}>سوالات متداول</SectionTitle>
        <StyledInput placeholder="سوال خود را بنویسید ..." />
        <StyledButton
          type="submit"
          style={{
            borderRadius: '24px',
            lineHeight: '24px',
            display: 'flex',
            gap: '12px',
            padding: '8px 16px',
            border: 'none',
            fontFamily: 'inherit',
            cursor: 'pointer',
          }}
        >
          <SearchIcon />
          جستجو
        </StyledButton>
      </BisanCard>
    </form>
  );
}

const StyledInput = styled.input`
  outline: none;
  width: 100%;
  font-size: 20px;
  font-family: inherit;
  border: none;

  &::placeholder {
    color: #9ca3af;
  }
`;

const StyledButton = styled.button`
  background-color: rgb(237, 224, 89);
  transition: 0.1 s;

  &:hover {
    background-color: rgb(254, 240, 138);
  }
`;
