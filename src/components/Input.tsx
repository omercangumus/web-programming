import React, { useId } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helpText?: string;
}

export default function Input({
  label,
  error,
  helpText,
  className = '',
  id,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const helpTextId = `${inputId}-help`;
  const errorId = `${inputId}-error`;

  const ariaDescribedBy = error ? errorId : helpText ? helpTextId : undefined;

  const baseStyles =
    'w-full px-4 py-2 bg-surface border rounded-md text-text transition-colors placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-1 dark:focus:ring-offset-bg disabled:opacity-50 disabled:bg-gray-800 disabled:cursor-not-allowed';
  
  const stateStyles = error
    ? 'border-error focus:ring-error focus:border-error'
    : 'border-border focus:border-primary-light focus:ring-primary';

  return (
    <div className={`flex flex-col gap-1 w-full ${className}`}>
      <label htmlFor={inputId} className="text-sm font-medium text-text-muted">
        {label}
      </label>
      
      <input
        id={inputId}
        aria-describedby={ariaDescribedBy}
        aria-invalid={!!error}
        className={`${baseStyles} ${stateStyles}`}
        {...props}
      />
      
      {error && (
        <span id={errorId} role="alert" className="text-sm text-error font-medium">
          {error}
        </span>
      )}
      
      {helpText && !error && (
        <span id={helpTextId} className="text-sm text-text-faint">
          {helpText}
        </span>
      )}
    </div>
  );
}
