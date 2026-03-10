import React from 'react';

type CardVariant = 'elevated' | 'outlined' | 'filled';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  title: string;
  image?: string;
  imageAlt?: string;
  footer?: React.ReactNode;
}

export default function Card({
  variant = 'elevated',
  title,
  image,
  imageAlt = '',
  footer,
  className = '',
  children,
  ...props
}: CardProps) {
  const baseStyles = 'overflow-hidden rounded-md transition-shadow flex flex-col h-full';

  const variantStyles = {
    elevated: 'bg-surface shadow-md hover:shadow-lg border border-transparent',
    outlined: 'bg-transparent border border-border shadow-sm hover:border-text-faint',
    filled: 'bg-surface-hover border border-transparent',
  };

  return (
    <article className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {image && (
        <img
          src={image}
          alt={imageAlt}
          className="w-full aspect-video object-cover"
        />
      )}
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-medium text-text mb-2">{title}</h3>
        
        <div className="text-text-muted flex-grow">
          {children}
        </div>
        
        {footer && (
          <div className="mt-4 pt-4 border-t border-border">
            {footer}
          </div>
        )}
      </div>
    </article>
  );
}
