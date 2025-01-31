import FaqDropdown from "./FaqDropdown";

const FAQ = [
  {
    question: "What is the FaFa878 Affiliate Program?",
    answer:
      "The FaFa878 Affiliate Program allows individuals, businesses, and influencers to earn commissions by referring new players to FaFa878.com.",
  },
  {
    question: "Who can join the FaFa878 Affiliate Program?",
    answer: "Answer B",
  },
  {
    question: "How do I join the FaFa878 Affiliate Program?",
    answer: "Answer C",
  },
  {
    question: "What are the benefits of joining the FaFa878 Affiliate Program?",
    answer: "Answer D",
  },
];

const FaqSection = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">FAQ</h2>

      {FAQ.map((faq, index) => (
        <FaqDropdown key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};

export default FaqSection;
