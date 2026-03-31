import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    'Python', 'DevOps', 'Cloud Computing', 'Docker', 
    'AWS', 'AI/ML', 'C#', 'Terraform'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Yetenekler</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span 
              key={skill}
              className="px-6 py-3 bg-blue-50 text-blue-700 font-semibold rounded-xl border border-blue-100 shadow-sm hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-default text-lg flex items-center gap-2"
            >
              <svg className="w-5 h-5 opacity-70" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
