import styled from 'styled-components';

export default function FAQCategoriesItem({
  category,
  isSelected,
  handleSelectCategory,
}) {
  return (
    <StyledCategoryItem
      className={isSelected ? 'selected' : ''}
      onClick={() => handleSelectCategory(category)}
    >
      {category.name}
    </StyledCategoryItem>
  );
}

const StyledCategoryItem = styled.div`
  cursor: pointer;
  padding: 8px 16px;
  background-color: rgb(226, 232, 240);
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  color: rgb(105, 122, 128);
  line-height: 24px;
  transition: 0.1s;

  &.selected {
    background-color: #fff;
  }

  &:hover {
    background-color: rgb(243, 244, 246);
  }
`;
