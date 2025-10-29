import React from 'react';
import clsx from 'clsx';

interface ActionButtonProps {
  id: string;
  name: string;
  text: string;
  type: 'button' | 'reset' | 'submit';
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  id,
  name,
  text,
  type,
  onClick,
}) => {
  return (
    <button
      type={type}
      id={id}
      name={name}
      onClick={onClick}
      className={clsx(
        'mx-auto block capitalize max-w-56 w-full py-3 px-3 cursor-pointer font-semibold transition-ease',
        'text-white bg-theme-navy hover:bg-theme-blue'
      )}
    >
      {text}
    </button>
  );
};

export default ActionButton;
