import React, { type ReactNode } from 'react';

interface AlertProps {
  variant: 'success' | 'error' | 'info';
  children: ReactNode;
}

const Alert: React.FC<AlertProps> = ({ variant, children }) => {
  const styles = {
    success: 'bg-green-50 border border-green-200 text-green-800',
    error: 'bg-red-50 border border-red-200 text-red-800',
    info: 'bg-blue-50 border border-blue-200 text-blue-800'
  };

  return (
    <div className={`p-4 rounded-lg flex items-center ${styles[variant]}`}>
      {children}
    </div>
  );
};

export default Alert;
