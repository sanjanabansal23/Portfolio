export function ExperienceCard({ company, role, period, description, location }) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary border-4 border-background shadow-md"></div>
      <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-border"></div>
      <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-xl mb-1">{role}</h3>
            <h4 className="text-lg text-primary">{company}</h4>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">{period}</div>
            {location && <div className="text-sm text-muted-foreground">{location}</div>}
          </div>
        </div>
        <p className="text-muted-foreground mt-3 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}