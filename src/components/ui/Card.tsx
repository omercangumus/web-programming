import React, { type ReactNode } from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, image, tech, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
