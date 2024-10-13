import { Link } from 'react-router-dom';
import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';
import styled from 'styled-components';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

export default function BlogsMainItem({ item }) {
  const description = item.description.slice(0, 300);
  const isSmOrBigger = useIsDesktopDisplay('sm');
  return (
    <StyledLink to={`/blog/detail/${item.title.split(' ').join('-')}`}>
      <BisanCard>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            flexDirection: isSmOrBigger ? 'row' : 'column',
          }}
        >
          <div
            style={{
              position: 'relative',
              flexShrink: '0',
              width: isSmOrBigger ? '208px' : '100%',
              height: isSmOrBigger ? '120px' : '160px',
            }}
          >
            <img
              style={{
                borderRadius: '24px',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              src={item.image}
              alt={item.title}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                backgroundColor: '#fff',
                borderRadius: '16px',
                padding: '4px 8px',
                color: 'rgb(75, 85, 99)',
                fontSize: '12px',
                lineHeight: '16px',
              }}
            >
              {item.date}
            </div>
          </div>
          <div style={{ flexGrow: '1' }}>
            <div style={{ fontSize: '16px', fontWeight: '700' }}>
              {item.title}
            </div>
            <div
              style={{
                fontSize: '13px',
                lineHeight: '28px',
                color: 'rgb(82, 82, 82)',
                marginTop: '8px',
              }}
            >
              {description}
            </div>
            {item.tags && (
              <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                {item.tags.map(tag => (
                  <div
                    key={tag}
                    style={{
                      padding: '4px 8px',
                      backgroundColor: 'rgb(227, 235, 237)',
                      borderRadius: '12px',
                      color: 'rgb(105, 122, 128)',
                      fontSize: '13px',
                      lineHeight: '20px',
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </BisanCard>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  &:hover {
    > .MuiPaper-root {
      background-color: rgb(241, 245, 249);
    }
  }
`;
