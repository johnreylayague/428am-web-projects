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
        'mx-auto block capitalize min-h-17 max-w-56 w-full py-3 px-3 cursor-pointer font-semibold transition-ease',
        'active:ring-2 active:ring-offset-2',
        'text-white bg-theme-navy hover:bg-theme-blue active:ring-theme-orange'
      )}
    >
      {text}
    </button>
  );
};

export default ActionButton;
