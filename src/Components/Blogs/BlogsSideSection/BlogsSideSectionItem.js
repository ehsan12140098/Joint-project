import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function BlogsSideSectionItem({ item, isDense }) {
  const description = item.description.slice(0, 60);
  return (
    <StyledLink
      className={!isDense && 'with-hover'}
      to={`/blog/detail/${item.title.split(' ').join('-')}`}
    >
      <div
        className="item-holder"
        style={{
          padding: '8px',
          borderRadius: '6px',
          display: 'flex',
          gap: '16px',
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '24px',
            objectFit: 'cover',
          }}
        />
        <div>
          <div
            style={{
              color: '#000',
              fontSize: isDense ? '13px' : '15px',
              fontWeight: '700',
            }}
          >
            {item.title}
          </div>
          <div
            style={{
              marginTop: '8px',
              color: 'rgb(163, 163, 163)',
              fontSize: isDense ? '11px' : '13px',
              lineHeight: '20px',
            }}
          >
            {description}
          </div>
        </div>
      </div>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  &.with-hover:hover {
    > .item-holder {
      background-color: rgb(241, 245, 249);
    }
  }
`;
