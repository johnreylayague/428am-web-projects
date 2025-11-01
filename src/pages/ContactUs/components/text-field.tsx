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
        className={clsx('capitalize font-bold text-sm', 'text-theme-navy')}
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        className={clsx(
          'capitalize rounded-xs px-8 py-5 text-base focus-input transition-ease min-h-17',
          'bg-gray-200'
        )}
      />
    </div>
  );
};

export default TextField;
