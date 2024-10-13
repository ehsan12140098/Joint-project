import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import FAQQuestionsItem from './FAQQuestionsItem';

export default function FAQQuestions({ questions, selectedCategory }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {selectedCategory && (
        <SectionTitle style={{ marginTop: '40px', marginBottom: '24px' }}>
          {selectedCategory.name}
        </SectionTitle>
      )}

      {questions.map(q => (
        <FAQQuestionsItem key={q.ask} question={q} />
      ))}
    </div>
  );
}
