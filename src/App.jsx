import { Routes, Route } from 'react-router-dom';
import { TypewriterText } from './components/TypewriterText';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceCard } from './components/ExperienceCard';
import { ArrowDown, Mail, Linkedin, Github, Film, PlayCircle } from 'lucide-react';
import { projects } from './data/projects';
import { ProjectDetail } from './pages/ProjectDetail';

function Portfolio() {
  const roles = ['Data Analyst', 'Storyteller', 'Film Lover', 'Video Editor', "Master's Student", 'Builder'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-lg font-serif font-semibold text-primary hover:text-accent transition-colors"
          >
            Website
          </button>
          <div className="flex gap-8">
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-foreground hover:text-primary transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('creative')} className="text-foreground hover:text-primary transition-colors">Creative</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <h1 className="mb-8 text-foreground">Sanjana Bansal</h1>
          <div className="mb-12">
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
              I am a <TypewriterText words={roles} />
            </p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-md"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="px-8 py-3 bg-secondary/20 text-secondary-foreground rounded-lg hover:bg-secondary/30 transition-colors"
            >
              Learn More
            </button>
          </div>
          <div className="mt-16 animate-bounce">
            <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-16 text-center text-foreground">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="mb-6">
                Born in London. Moved to Bangalore at the age of 7. My journey began in the vibrant classrooms of Bangalore, where I spent my formative years immersed in both technology and storytelling. After two years of undergraduate studies in Computer Science, I made the bold decision to transfer to the United States, seeking new perspectives and challenges that would shape my worldview.
              </p>
              <p className="mb-6">
                The transition wasn't just geographical, it was transformative. Adapting to a new education system, new cultures, and new ways of thinking taught me resilience and the power of curiosity. I learned that data tells stories, and every dataset has a narrative waiting to be uncovered.
              </p>
              <p className="mb-6">
                Today, as a master's student specializing in Information Systems, I bridge the analytical and the creative. Whether I'm building predictive models, crafting visualizations that reveal hidden patterns, or editing a short film that captures emotion in 60 seconds, I approach each project with the same question: <span className="italic text-primary">What story am I telling?</span>
              </p>
              <p>
                When I'm not analyzing datasets or debugging code, you'll find me in a darkened theater (the theater being my home), notebook in hand, studying how movies/films use light and pacing to move audiences. Because at the end of the day, whether it's through data or film, I'm here to build, learn, and tell stories that matter.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="IMG_8775.jpeg"
                  alt="Sanjana Bansal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-16 text-center text-foreground">Experience</h2>
          <div className="space-y-0">
            <ExperienceCard
              company="Volt Technologies"
              role="Technical Architect"
              period="Dec 2024 - Jun 2025"
              location="Charlotte, NC"
              description="Led a full Dynamics 365 Business Central implementation: data migration, AL code customization, and Power Automate workflows. 
              Integrated BC with Azure and SQL-based systems, maintaining data integrity and security. Onsite for go-live, collaborating with stakeholders and resolving issues in real time"
            />
            <ExperienceCard
              company="RAGAAI INC."
              role="Data Analyst Intern"
              period="Aug 2024 - Dec 2024"
              location="Remote (San Francisco, CA)"
              description="Developed RAG pipelines with Lang Chain to build and enhance language models for advanced AI-driven solutions, used Git for version control and team collaboration. Analyzed and optimized agent operations using Python to enhance efficiency and performance"
            />
            <ExperienceCard
              company="Schneider Electric"
              role="Data Scientist Intern"
              period="Summer 2023"
              location="Franklin, TN"
              description="Leveraged Python to reduce transport cost by 15-20% through Last Mile Analysis of NAM (Chino) region. Employed Fuzzy string-matching techniques, efficiently grouped shipments based on global customer names and addresses"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-6 text-center text-foreground">Projects</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A selection of technical projects that combine analytical rigor with creative problem-solving
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                tools={project.tools}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Creative Corner Section */}
      <section id="creative" className="py-24 px-6 bg-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Film className="w-8 h-8 text-accent" />
            <h2 className="text-center text-foreground">Creative Corner</h2>
          </div>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto italic">
            Where data meets narrative, exploring storytelling through the lens of film and video
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="mb-6 text-primary">Film & Editing Work</h3>
              <p className="mb-6 leading-relaxed">
                My journey into video editing began as a way to document my favorite shows, but it quickly became a passion for visual storytelling. I approach editing the way I approach data, looking for patterns, rhythms, and moments that create meaning.
              </p>
              <p className="mb-8 leading-relaxed">
                From documentary-style features to experimental short films, each project is an exercise in pacing, emotion, and narrative structure. I've worked with tools like Adobe Premiere Pro, DaVinci Resolve, and Capcut to bring stories to life.
              </p>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <PlayCircle className="w-5 h-5 text-accent" />
                  <h4 className="text-primary">Featured Work</h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium">Transitions</div>
                      <div className="text-sm text-muted-foreground">A short documentary about international students navigating identity</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium">Data in Motion</div>
                      <div className="text-sm text-muted-foreground">Experimental visualization merging data patterns with kinetic typography</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium">Campus Chronicles</div>
                      <div className="text-sm text-muted-foreground">Monthly video series featuring student stories and campus culture</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-primary">Currently Watching</h3>
              <div className="aspect-video rounded-lg overflow-hidden mb-6 shadow-lg">
                <img 
                  src="fleabag2.png"
                  alt="Cinema"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Favorite Director</div>
                  <div className="font-medium">Christopher Nolan</div>
                  <div className="text-xs text-muted-foreground mt-1">Master of visual storytelling</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Current Obsession</div>
                  <div className="font-medium">Fleabag</div>
                  <div className="text-xs text-muted-foreground mt-1">Indie cinema at its finest</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Editing Style</div>
                  <div className="font-medium">Rhythmic Montage</div>
                  <div className="text-xs text-muted-foreground mt-1">Inspired by Eisenstein</div>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Go-To Genre</div>
                  <div className="font-medium">Sci-Fi Drama</div>
                  <div className="text-xs text-muted-foreground mt-1">Ideas + Emotion</div>
                </div>
              </div>

              {/* <div className="mt-6 bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h4 className="mb-3 text-primary">Why Film?</h4>
                <p className="text-sm leading-relaxed">
                  Film taught me that every frame is a data point, every cut is a decision, and every story arc follows a pattern. The discipline of editing, choosing what to show and what to leave out, mirrors the work of data analysis. Both require empathy, precision, and the courage to find truth in complexity.
                </p>
              </div> */}
            </div>
          </div>

          {/* <div className="bg-card p-8 rounded-lg border border-border">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NzE5MDgzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Video Editing Setup"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">Behind the scenes of my editing workflow</p>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-foreground">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Whether you want to discuss data projects, film recommendations, or just chat about the intersection of storytelling and analytics, I'd love to hear from you.
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap mb-12">
            <a 
              href="mailto:sanbansal110@email.com" 
              className="flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-md"
            >
              <Mail className="w-5 h-5" />
              <span>sanbansal110@email.com</span>
            </a>
          </div>

          <div className="flex gap-8 justify-center">
            <a 
              href="https://linkedin.com/in/sanjana-bansal23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-sm">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/sanjanabansal23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 Sanjana Bansal. Built with curiosity and care.</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
