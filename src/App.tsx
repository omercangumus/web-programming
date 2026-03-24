import { useState, useEffect } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import type { Project, Category, SortField, SortOrder } from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await fetchProjects();
        setProjects(data);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError("Projeler yüklenirken bir hata oluştu.");
        }
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = applyFilters(projects, { search, category, sortField, sortOrder });

  const categories: (Category | "all")[] = ["all", "frontend", "fullstack", "backend"];

  return (
    <div className="min-h-screen bg-bg text-text p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Projeler</h1>
          <p className="text-text-muted">Laboratuvar 5 - TypeScript ve React State Yönetimi</p>
        </header>

        {error && <Alert variant="error">{error}</Alert>}

        <section className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-end bg-surface p-4 rounded-lg shadow-sm border border-border">
          <div className="w-full md:w-1/3">
            <Input
              label="Proje Ara"
              placeholder="Başlık, açıklama veya teknoloji..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto mt-4 md:mt-0 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={category === cat ? "primary" : "secondary"}
                onClick={() => setCategory(cat)}
                size="sm"
                className="capitalize"
              >
                {cat === "all" ? "Tümü" : cat}
              </Button>
            ))}
          </div>

          <div className="flex items-end gap-2 w-full md:w-auto mt-4 md:mt-0">
            <div className="flex flex-col gap-1 w-full md:w-auto">
              <label htmlFor="sortField" className="text-sm font-medium text-text-muted">
                Sırala
              </label>
              <select
                id="sortField"
                value={sortField}
                onChange={(e) => setSortField(e.target.value as SortField)}
                className="w-full h-[42px] px-4 py-2 bg-surface flex items-center justify-center border border-border rounded-md text-text focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="year">Yıla Göre</option>
                <option value="title">İsme Göre</option>
              </select>
            </div>
            
            <Button
              variant="secondary"
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="h-[42px] min-w-[110px]"
            >
              {sortOrder === "asc" ? "↑ Artan" : "↓ Azalan"}
            </Button>
          </div>
        </section>

        <section>
          {loading ? (
            <div className="text-center py-12 text-lg text-text-muted">
              Yükleniyor...
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12 text-lg text-text-muted">
              Eşleşen proje bulunamadı
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <Card
                  key={project.id}
                  title={project.title}
                  image={project.image}
                  footer={
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-primary capitalize">{project.category}</span>
                      <span className="text-text-muted">{project.year}</span>
                    </div>
                  }
                >
                  <p className="mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200 rounded-full font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>

        {!loading && (
          <footer className="text-center text-sm font-medium text-text-muted py-4">
            {filtered.length} / {projects.length} proje gösteriliyor
          </footer>
        )}
      </div>
    </div>
  );
}

export default App;
