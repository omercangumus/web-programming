import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  // Base styles including focus handling for accessibility
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed';

  // Size variations
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Variant variations
  const variantStyles = {
    primary:
      'bg-primary text-white hover:bg-primary-light focus:ring-primary shadow-sm',
    secondary:
      'bg-surface border border-border text-text hover:bg-surface-hover focus:ring-primary shadow-sm',
    danger:
      'bg-error text-white hover:bg-red-500 focus:ring-error shadow-sm',
    ghost:
      'bg-transparent text-text hover:bg-surface focus:ring-primary',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
