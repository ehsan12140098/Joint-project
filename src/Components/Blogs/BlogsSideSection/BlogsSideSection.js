import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import BlogsSideSectionItem from './BlogsSideSectionItem';

export default function BlogsSideSection({ title, items, isDense = false }) {
  return (
    <div>
      <SectionTitle
        style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '24px' }}
      >
        {title}
      </SectionTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {items.map(item => (
          <BlogsSideSectionItem key={item.id} item={item} isDense={isDense} />
        ))}
      </div>
    </div>
  );
}
