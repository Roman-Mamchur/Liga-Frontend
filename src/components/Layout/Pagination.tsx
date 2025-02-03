import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="flex gap-1 md:gap-3">
        <button
          className={`rounded bg-primary px-4 py-2 font-semibold text-white duration-200 hover:bg-secondary ${currentPage === 1 ? "opacity-50" : ""}`}
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          <span className="hidden md:block">First page</span>
          <span className="flex items-center md:hidden">
            <FaChevronLeft />
            <FaChevronLeft className="-ml-2" />
          </span>
        </button>
        <button
          className={`rounded bg-primary px-4 py-2 font-semibold text-white duration-200 hover:bg-secondary ${currentPage === 1 ? "opacity-50" : ""}`}
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
        </button>
      </div>
      <span className="hidden md:block">
        Page {currentPage} of {totalPages}
      </span>
      <span className="md:hidden">
        {currentPage} / {totalPages}
      </span>
      <div className="flex gap-1 md:gap-3">
        <button
          className={`rounded bg-primary px-4 py-2 font-semibold text-white duration-200 hover:bg-secondary ${currentPage === totalPages ? "opacity-50" : ""}`}
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <FaChevronRight />
        </button>
        <button
          className={`rounded bg-primary px-4 py-2 font-semibold text-white duration-200 hover:bg-secondary ${currentPage === totalPages ? "opacity-50" : ""}`}
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <span className="hidden md:block">Last page</span>
          <span className="flex items-center md:hidden">
            <FaChevronRight />
            <FaChevronRight className="-ml-2" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
