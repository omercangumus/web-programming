import React from 'react';
import type { Category, FilterState, SortField } from '../../types/project';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface ProjectFilterProps {
  filterState: FilterState;
  onFilterChange: (newState: FilterState) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ filterState, onFilterChange }) => {
  const categories: Category[] = ['Tümü', 'Web', 'Mobil', 'AI', 'DevOps', 'Siber Güvenlik'];

  const handleChange = (field: keyof FilterState, value: string) => {
    onFilterChange({
      ...filterState,
      [field]: value
    });
  };

  const toggleSortOrder = () => {
    onFilterChange({
      ...filterState,
      sortOrder: filterState.sortOrder === 'asc' ? 'desc' : 'asc'
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8 space-y-6">
      {/* Search Bar */}
      <div>
        <Input 
          id="search"
          placeholder="Projelerde ara (isim, teknoloji vb.)..."
          value={filterState.search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('search', e.target.value)}
        />
      </div>

      {/* Categories */}
      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-3 block">Kategoriler</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filterState.category === cat ? 'primary' : 'outline'}
              size="sm"
              onClick={() => handleChange('category', cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Sorting */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex-grow">
          <label htmlFor="sortField" className="block text-sm font-medium text-gray-700 mb-1">
            Sırala
          </label>
          <select
            id="sortField"
            value={filterState.sortField}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange('sortField', e.target.value as SortField)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="id">Varsayılan (ID)</option>
            <option value="date">Tarih</option>
            <option value="title">İsim</option>
          </select>
        </div>
        
        <div className="pt-0 sm:pt-6">
          <Button 
            variant="secondary" 
            onClick={toggleSortOrder}
            title="Sıralama yönünü değiştir"
            className="w-full"
          >
            Yön: {filterState.sortOrder === 'asc' ? 'Artan (Asc)' : 'Azalan (Desc)'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;
