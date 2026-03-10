import React, { useState } from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  dismissible?: boolean;
}

export default function Alert({
  variant = 'info',
  dismissible = false,
  className = '',
  children,
  ...props
}: AlertProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const baseStyles = 'p-4 rounded-md border flex items-start gap-3 w-full';

  const variantStyles = {
    info: 'bg-indigo-900/30 text-indigo-300 border-indigo-700/50',
    success: 'bg-emerald-900/30 text-emerald-300 border-emerald-700/50',
    warning: 'bg-amber-900/30 text-amber-300 border-amber-700/50',
    error: 'bg-red-900/30 text-red-300 border-red-700/50',
  };

  const iconMap = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '🚨',
  };

  return (
    <div
      role="alert"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <span className="text-lg flex-shrink-0">{iconMap[variant]}</span>
      <div className="flex-grow">{children}</div>

      {dismissible && (
        <button
          type="button"
          aria-label="Kapat"
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 ml-auto opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-400 rounded-sm"
        >
          ✖️
        </button>
      )}
    </div>
  );
}
