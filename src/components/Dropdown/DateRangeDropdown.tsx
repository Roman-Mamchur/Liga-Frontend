import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./css/datepicker.css";

interface DateRangeDropdownProps {
  dateInfo: string;
  dateRange: [Date | null, Date | null];
  setDateRange: (range: [Date | null, Date | null]) => void;
}

const DateRangeDropdown = ({
  dateInfo,
  dateRange,
  setDateRange,
}: DateRangeDropdownProps) => {
  return (
    <div>
      <p className="mb-1 text-left capitalize opacity-80 lg:text-right">
        {dateInfo}
      </p>
      <DatePicker
        selectsRange
        startDate={dateRange[0]}
        endDate={dateRange[1]}
        onChange={(update) =>
          setDateRange(update as [Date | null, Date | null])
        }
        isClearable
        placeholderText="Select date range"
        dateFormat="dd MMM yyyy"
        showMonthDropdown
        showYearDropdown
        maxDate={new Date()}
        minDate={new Date("2020-01-01")}
        className="h-10 rounded border py-2 pl-4 pr-10 text-sm font-semibold shadow-md"
      />
    </div>
  );
};

export default DateRangeDropdown;
