import React from 'react';

export default function BlogsDetailsMainImage({ image, title }) {
  return (
    <div
      style={{
        width: '100%',
        height: '116px',
        overflow: 'hidden',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'repeat',
        borderRadius: '24px',
        display: 'flex',
        alignItems: 'center',
        paddingRight: '40px',
      }}
    >
      <div
        style={{
          color: '#fff',
          fontSize: '28px',
          fontWeight: '700',
        }}
      >
        {title}
      </div>
    </div>
  );
}
