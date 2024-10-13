import { useEffect, useState } from 'react';
import axios from 'axios';
import BreadCrumbs from 'Components/shared/BreadCrumbs/BreadCrumbs';
import FAQSearchForm from 'Components/FAQ/FAQSearchForm';
import FAQCategories from 'Components/FAQ/FAQCategories';
import FAQQuestions from 'Components/FAQ/FAQQuestions';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const links = [
  { href: '/', text: 'بیسان' },
  { href: '/FAQ', text: 'سوالات متداول' },
];

export default function FAQ() {
  const isSmOrBigger = useIsDesktopDisplay('sm');
  const [faqCategories, setFaqCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [FAQs, setFAQs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/api/faq/categories')
      .then(res => {
        setFaqCategories(res.data);
        setSelectedCategory(res.data[0]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;
    setIsLoading(true);
    axios
      .get(`/api/faq/categories/${selectedCategory.slug}`)
      .then(res => {
        setFAQs(res.data.faqs);
      })
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);

  const handleSelectCategory = category => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: isSmOrBigger ? 'flex-start' : 'center',
        }}
      >
        <BreadCrumbs links={links} />
      </div>
      <FAQSearchForm />
      <FAQCategories
        categories={faqCategories}
        selectedCategory={selectedCategory}
        handleSelectCategory={handleSelectCategory}
      />
      {isLoading ? (
        <div style={{ marginTop: '40px' }}>Loading...</div>
      ) : (
        <FAQQuestions questions={FAQs} selectedCategory={selectedCategory} />
      )}
    </div>
  );
}
