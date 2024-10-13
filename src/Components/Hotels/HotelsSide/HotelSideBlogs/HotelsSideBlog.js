// import turkeyImage from 'images/rectangleturkey.png';

export default function HotelsSideBlog({ blog }) {
  return (
    <a style={{ marginTop: '24px', display: 'block' }} href="#">
      <div
        style={{
          // border: '1px solid red',
          backgroundImage: `url(${blog.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            // border: '1px solid blue',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        ></div>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            lineHeight: '24px',
            textAlign: 'center',
            padding: '32px 12px',
            // border: '3px solid green',
          }}
        >
          {blog.text}
        </div>
      </div>
    </a>
  );
}
