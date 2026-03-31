import React, { useState, useEffect, useMemo } from 'react';
import type { Project, FilterState } from '../../types/project';
import { fetchProjects } from '../../services/projectService';
import { applyFilters } from '../../utils/projectHelpers';
import ProjectFilter from '../forms/ProjectFilter';
import Card from '../ui/Card';
import Alert from '../ui/Alert';

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [filterState, setFilterState] = useState<FilterState>({
    search: '',
    category: 'Tümü',
    sortField: 'id',
    sortOrder: 'asc'
  });

  useEffect(() => {
    let mounted = true;

    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        if (mounted) {
          setProjects(data);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Bilinmeyen bir hata oluştu');
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadProjects();

    return () => {
      mounted = false;
    };
  }, []);

  const filteredProjects = useMemo(() => {
    return applyFilters(projects, filterState);
  }, [projects, filterState]);

  return (
    <section id="projects" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projelerim</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hackathon projeleri, lab ödevleri ve yapay zeka alanında geliştirdiğim örnek çalışmalar.
          </p>
        </div>

        <ProjectFilter 
          filterState={filterState} 
          onFilterChange={setFilterState} 
          resultCount={filteredProjects.length}
          totalCount={projects.length}
        />

        {error && (
          <div className="mb-8">
            <Alert variant="error">{error}</Alert>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-4 text-gray-600 font-medium">Projeler yükleniyor...</span>
          </div>
        ) : filteredProjects.length === 0 && !error ? (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-100 border-dashed">
            <p className="text-gray-500 font-medium text-lg">Bu filtrelere uygun proje bulunamadı.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tech={project.tech}
              >
                <div className="flex gap-4 pt-4 mt-4 border-t border-gray-100">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Demo &rarr;
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Kaynak Kod &rarr;
                    </a>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectList;
