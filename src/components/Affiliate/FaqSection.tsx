"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import FaqDropdown from "./FaqDropdown";
import { faq } from "@/data/faqData";

interface FaqSectionProps {
  defaultCategory?: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({ defaultCategory }) => {
  const activeFaqGroup = useSelector(
    (state: RootState) => state.category.activeFaqGroup,
  );

  const selectedCategory = defaultCategory || activeFaqGroup;

  const activeFaqs =
    faq.find((group) => group.category === selectedCategory)?.questions || [];

  return (
    <section className="flex flex-col gap-4">
      {activeFaqs.map((faqItem, index) => (
        <FaqDropdown
          key={index}
          question={faqItem.question}
          answer={faqItem.answer}
        />
      ))}
    </section>
  );
};

export default FaqSection;
