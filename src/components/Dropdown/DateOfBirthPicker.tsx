import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./css/datepicker.css";

import { FieldInputProps, FormikProps } from "formik";

interface DateOfBirthPickerProps {
  field: FieldInputProps<Date>;
  form: FormikProps<Date>;
}

export const DateOfBirthPicker = ({ field, form }: DateOfBirthPickerProps) => {
  const handleChange = (date: Date | null) => {
    form.setFieldValue(field.name, date);
  };

  return (
    <div>
      <DatePicker
        selected={field.value}
        onChange={handleChange}
        maxDate={new Date()}
        dateFormat="MM/dd/yyyy"
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={100}
        placeholderText="Select your date of birth"
        className="w-full rounded border px-3 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
        wrapperClassName="w-full"
      />
    </div>
  );
};

