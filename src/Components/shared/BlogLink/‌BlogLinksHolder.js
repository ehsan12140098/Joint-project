import BlogLink from './BlogLink';
import BlogLinksTitle from './BlogLinksTitle';

export default function BlogLinksHolder({ blogs, destination }) {
  const title = `درباره ی ${destination} بیشتر بدانید`;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '0 30px',
      }}
    >
      <BlogLinksTitle title={title} />
      {blogs.map(blog => (
        <BlogLink key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
