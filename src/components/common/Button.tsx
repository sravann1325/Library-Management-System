import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: LucideIcon;
  type?: 'button' | 'submit';
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  icon: Icon,
  type = 'button'
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors";
  const variantStyles = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{children}</span>
    </button>
  );
}