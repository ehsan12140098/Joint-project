import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';

export default function FAQQuestionsItem({ question }) {
  return (
    <BisanCard>
      <div
        style={{ marginBottom: '16px', fontSize: '18px', lineHeight: '28px' }}
      >
        {question.ask}
      </div>
      <div style={{ lineHeight: '28px' }}>{question.answer}</div>
    </BisanCard>
  );
}
