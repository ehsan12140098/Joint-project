import HotelsSideBlog from './HotelsSideBlog';

const blogs = [
  {
    id: 5,
    text: 'اوت لت اپتیموم استانبول',
    image: 'https://picsum.photos/id/20/300/80',
  },
  {
    id: 6,
    text: 'جزایر پرنس استانبول',
    image: 'https://picsum.photos/id/21/300/80',
  },
  {
    id: 7,
    text: 'بازار ادویه استانبول Spice bazaar Istanbul',
    image: 'https://picsum.photos/id/22/300/80',
  },
  {
    id: 8,
    text: 'بندر قدیمی آنتالیا Old Harbour Antalya',
    image: 'https://picsum.photos/id/23/300/80',
  },
];

export default function HotelsSideBlogs() {
  return (
    <div>
      <div style={{ fontWeight: '700', fontSize: '16px', textAlign: 'center' }}>
        درباره ترکیه بیشتر بدانید
      </div>
      <div>
        {blogs.map(blog => (
          <HotelsSideBlog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
