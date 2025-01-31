import { FaChevronDown } from "react-icons/fa6";

interface FaqDropdownProps {
  question: string;
  answer: string;
}

const FaqDropdown = ({ question, answer }: FaqDropdownProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between rounded-t border-b border-black/20 bg-card px-6 py-2">
        <h3 className="text-sm font-bold">{question}</h3>
        <div className="cursor-pointer">
          <FaChevronDown />
        </div>
      </div>
      <div className="rounded-b bg-card px-6 py-2">
        <p className="text-sm opacity-80">{answer}</p>
      </div>
    </div>
  );
};

export default FaqDropdown;
