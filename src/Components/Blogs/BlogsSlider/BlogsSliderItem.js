import React from 'react';

export default function BlogsSliderItem({ item }) {
  return (
    <div style={{ height: '378px', position: 'relative' }}>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: 0,
          right: 0,
          color: '#fff',
          fontSize: '30px',
          fontWeight: '700',
          textAlign: 'center',
        }}
      >
        {item.title}
      </div>
    </div>
  );
}
