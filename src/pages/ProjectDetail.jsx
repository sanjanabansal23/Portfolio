import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
        <h2 className="text-foreground">Project not found</h2>
        <Link to="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to portfolio</span>
          </Link>
        </div>
      </nav>
      <div className="pt-24 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl mb-12">
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex items-start justify-between gap-4 mb-6">
            <h1 className="text-foreground">{project.title}</h1>
            <div className="flex items-center gap-3 pt-2 flex-shrink-0">
              {project.github && project.github !== '#' && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 transition-colors text-sm">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm">
                  <ExternalLink className="w-4 h-4" />
                  Live demo
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tools.map((tool) => (
              <span key={tool} className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm">
                {tool}
              </span>
            ))}
          </div>
          {project.sections ? (
  <div className="space-y-16">
    {project.sections.map((section, i) => (
      <div key={i}>
        {section.heading && (
          <h2 className="text-foreground mb-4">{section.heading}</h2>
        )}
        {section.text && (
          <p className="text-foreground/90 leading-relaxed mb-6">{section.text}</p>
        )}
        {section.images ? (
          <div className={section.images.length === 2 ? "grid gap-4 grid-cols-2" : "grid gap-4 grid-cols-3"}>
            {section.images.map((img, j) => (
              <div key={j} className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full object-contain bg-white"
                />
                {img.caption && (
                  <p className="text-sm text-muted-foreground text-center italic py-3 bg-card border-t border-border">
                    {img.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : section.image ? (
          <div className={`rounded-lg overflow-hidden shadow-md ${section.small ? 'max-w-xs mx-auto' : ''}`}>
            <img
              src={section.image}
              alt={section.caption || section.heading}
              className="w-full object-contain bg-white"
            />
            {section.caption && (
              <p className="text-sm text-muted-foreground text-center italic py-3 bg-card border-t border-border">
                {section.caption}
              </p>
            )}
          </div>
        ) : null}
      </div>
    ))}
  </div>
          ) : (
            <div className="space-y-6">
              {project.details.trim().split('\n\n').map((para, i) => (
                <p key={i} className="leading-relaxed text-foreground/90">{para}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}