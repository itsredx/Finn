import React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, type = 'submit', className = '', onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        flex justify-center items-center h-[60px] px-4 border border-transparent
        text-base font-medium text-white shadow-sm
        bg-[#214D76] hover:bg-[#1b3f63] 
        rounded-[10px]
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#214D76]
        ${className} 
      `}
    >
      {children}
    </button>
  );
};

export default Button;