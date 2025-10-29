import React from 'react';
import clsx from 'clsx';

interface TextAreaFieldProps {
  id: string;
  name: string;
  placeholder: string;
  label: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  name,
  placeholder,
  label,
}) => {
  return (
    <div className={clsx('flex flex-col gap-2')}>
      <label
        htmlFor={id}
        className={clsx(
          'capitalize font-semibold text-base',
          'text-theme-navy'
        )}
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={clsx(
          'w-full px-5 py-3 min-h-40 text-sm rounded-xs resize-none focus-input transition-ease',
          'bg-gray-200'
        )}
      />
    </div>
  );
};

export default TextAreaField;
