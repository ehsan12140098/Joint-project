import { Card } from '@mui/material';
import { useState } from 'react';
import { ChevronLeft } from '../../../Assets/Svgs/ChevronLeft';
import { Link } from 'react-router-dom';
import { ChevronRight } from '../../../Assets/Svgs/ChevronRight';

export default function BreadCrumbs({ links }) {
  const [hoveredItemIndex, setHoveredItemIndex] = useState(-1);

  return (
    <Card
      style={{
        boxShadow: 'none',
        padding: '8px 8px',
        width: 'fit-content',
        borderRadius: '10px',
        // border: '1px solid red',
      }}
    >
      {/* {`hoveredItemIndex ${hoveredItemIndex}`} */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {links.map(({ href, text }, i) => {
          // console.log('🚀 ~ {links.map ~ i:', i, hoveredItemIndex);
          if (i === links.length - 1)
            return (
              <span key={href} style={{ color: '#000' }}>
                {text}
              </span>
            );
          return (
            <div
              key={href}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
              onMouseOver={() => setHoveredItemIndex(i)}
              onMouseLeave={() => setHoveredItemIndex(-1)}
            >
              <Link to={href} style={{ color: '#000' }}>
                {text}
                {/* {`index: ${i}`} */}
              </Link>
              <div>
                <div
                  style={{
                    transform:
                      hoveredItemIndex !== -1 && hoveredItemIndex <= i
                        ? 'rotate(180deg)'
                        : '',
                    transition: '0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    // border: '1px solid blue',
                  }}
                >
                  <ChevronLeft size="14" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <Breadcrumbs component="div" separator={<ChevronLeft size="14" />}>
        {links.map(({ href, text }, i) => {
          if (i === links.length - 1)
            return (
              <span key={href} style={{ color: '#000' }}>
                {text}
              </span>
            );
          return (
            <Link to={href} style={{ color: '#000' }} key={href}>
              {text}
            </Link>
          );
        })}
      </Breadcrumbs> */}
    </Card>
  );
}
