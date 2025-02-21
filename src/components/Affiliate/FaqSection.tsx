"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import FaqDropdown from "./FaqDropdown";
import { faq } from "@/data/faqData";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface FaqSectionProps {
  defaultCategory?: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({ defaultCategory }) => {
  const t = useTranslations("AffiliatePage.FAQ");

  const activeFaqGroup = useSelector(
    (state: RootState) => state.category.activeFaqGroup,
  );

  const selectedCategory = defaultCategory || activeFaqGroup;

  const activeFaqs =
    faq.find((group) => group.category === selectedCategory)?.questions || [];

  const [openQuestions, setOpenQuestions] = useState<Record<number, boolean>>(
    {},
  );

  useEffect(() => {
    setOpenQuestions({});
  }, [selectedCategory]);

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="flex flex-col gap-4">
      {activeFaqs.map((faqItem, index) => (
        <FaqDropdown
          key={index}
          question={t(faqItem.question)}
          answer={t(faqItem.answer)}
          isOpen={openQuestions[index] || false}
          onToggle={() => toggleQuestion(index)}
        />
      ))}
    </section>
  );
};

export default FaqSection;
