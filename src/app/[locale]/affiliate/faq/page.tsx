import FaqSection from "@/components/Affiliate/FaqSection";
import SelectorMenu from "@/components/Selector/SelectorMenu";

const AffiliateFaqPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex">
        <div className="w-0 flex-1">
          <SelectorMenu display="label" type="faq" />
        </div>
      </div>
      <section className="flex flex-col gap-4">
        <FaqSection />
      </section>
    </div>
  );
};

export default AffiliateFaqPage;
