import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
