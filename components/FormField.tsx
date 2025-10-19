import React, { useRef } from 'react';

interface FormFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  readOnly?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, placeholder, type = 'text', readOnly = false }) => {
  const isDateInput = type === 'date';
  const inputRef = useRef<HTMLInputElement>(null);

  // For date inputs, this trick changes the input type to 'text' when blurred and empty,
  // allowing the placeholder to be shown. On focus, it reverts to 'date' to show the picker.
  const handleFocus = () => {
    if (inputRef.current && isDateInput) {
      inputRef.current.type = 'date';
    }
  };

  const handleBlur = () => {
    if (inputRef.current && isDateInput && !inputRef.current.value) {
      inputRef.current.type = 'text';
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-medium text-gray-800">{label}</label>
      <input
        ref={inputRef}
        // Start as 'text' for date inputs to show placeholder
        type={isDateInput ? 'text' : type}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        readOnly={readOnly}
        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#214D76] focus:border-transparent transition-shadow text-gray-700"
      />
    </div>
  );
};

export default FormField;