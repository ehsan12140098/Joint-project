import FAQCategoriesItem from './FAQCategoriesItem';

export default function FAQCategories({
  categories,
  selectedCategory,
  handleSelectCategory,
}) {
  return (
    <div
      style={{
        marginTop: '20px',
        display: 'flex',
        gap: '18px',
        flexWrap: 'wrap',
      }}
    >
      {categories.map(cat => (
        <FAQCategoriesItem
          key={cat.slug}
          category={cat}
          isSelected={cat.slug === selectedCategory.slug}
          handleSelectCategory={handleSelectCategory}
        />
      ))}
    </div>
  );
}
