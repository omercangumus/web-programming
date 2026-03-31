import type { Project, Category, SortField, SortOrder, FilterState } from '../types/project';

export const filterBySearch = (projects: Project[], search: string): Project[] => {
  if (!search.trim()) return projects;
  const lowerSearch = search.toLowerCase();
  return projects.filter(
    (project: Project) =>
      project.title.toLowerCase().includes(lowerSearch) ||
      project.description.toLowerCase().includes(lowerSearch) ||
      project.tech.some((t: string) => t.toLowerCase().includes(lowerSearch))
  );
};

export const filterByCategory = (projects: Project[], category: Category): Project[] => {
  if (category === 'Tümü') return projects;
  return projects.filter((project: Project) => project.category === category);
};

export const sortProjects = (
  projects: Project[],
  sortField: SortField,
  sortOrder: SortOrder
): Project[] => {
  return [...projects].sort((a: Project, b: Project) => {
    const aValue = String(a[sortField]);
    const bValue = String(b[sortField]);
    
    return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });
};

export const applyFilters = (projects: Project[], filterState: FilterState): Project[] => {
  let result = projects;
  result = filterBySearch(result, filterState.search);
  result = filterByCategory(result, filterState.category);
  result = sortProjects(result, filterState.sortField, filterState.sortOrder);
  return result;
};
