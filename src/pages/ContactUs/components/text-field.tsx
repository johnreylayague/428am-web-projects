import clsx from 'clsx';
import React from 'react';

interface TextFieldProps {
  label: string;
  placeholder: string;
  id: string;
  name: string;
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  label,
  id,
  name,
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
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className={clsx(
          'capitalize rounded-xs px-5 py-3 text-sm focus-input transition-ease',
          'bg-gray-200'
        )}
      />
    </div>
  );
};

export default TextField;
