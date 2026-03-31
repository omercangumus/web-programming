export type Category = 'Tümü' | 'Web' | 'Mobil' | 'AI' | 'DevOps' | 'Siber Güvenlik';
export type SortField = 'date' | 'title' | 'id';
export type SortOrder = 'asc' | 'desc';

export interface Project {
  readonly id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: Category;
  date: string;
  demoUrl?: string;
  sourceUrl?: string;
}

export interface FilterState {
  search: string;
  category: Category;
  sortField: SortField;
  sortOrder: SortOrder;
}
