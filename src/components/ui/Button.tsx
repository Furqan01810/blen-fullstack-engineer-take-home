// src/components/ui/Button.tsx
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  return (
    <button
      className={`px-4 py-2 font-semibold text-white ${variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500'} rounded`}
      {...props}>
      {children}
    </button>
  );
};
