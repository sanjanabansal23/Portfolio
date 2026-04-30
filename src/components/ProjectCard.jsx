import { Link } from 'react-router-dom';

export function ProjectCard({ id, title, description, tools, imageUrl }) {
  return (
    <Link
      to={`/projects/${id}`}
      className="group block bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border"
    >
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}