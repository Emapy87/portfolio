
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import AnimatedElement from '@/components/AnimatedElement';

const projectsData = [
  {
    title: "Sistema de Votación Estudiantil",
    description: "Plataforma segura para elecciones estudiantiles con resultados en tiempo real.",
    technologies: ["Node.js", "React", "Supabase", "JWT"],
    image: "./assets/images/votacion.png",
    link: "https://student-voting-hub.lovable.app/",
    status: ""
  },
  {
    title: "Sistema de Gestión de Restaurantes",
    description: "Plataforma para administración de menús, reservas y pedidos.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express"],
    image: "./assets/images/restaurante.png",
    link: "https://preview--dine-and-discover.lovable.app/",
    status: "En desarrollo"
  },
  {
    title: "Sistema de Citas Odontológicas",
    description: "Gestor de citas y historiales médicos para clínicas dentales.",
    technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
    image: "./assets/images/odonto.png",
    link: "https://preview--dental-appointment-hub.lovable.app/",
    status: "En desarrollo"
  },
];

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll('.fade-in-section');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (section) {
        const elements = section.querySelectorAll('.fade-in-section');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-secondary/30">
      <div className="section-container">
        <AnimatedElement type="fade" direction="up" duration={1000}>
          <h2 className="section-title mb-16">Portafolio</h2>
        </AnimatedElement>
        
        <AnimatedElement type="fade" direction="up" duration={800} delay={200} className="mb-12 max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground">
            Una selección de proyectos que destacan mi experiencia en desarrollo de software,
            arquitectura de sistemas y auditoría informática.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 gap-12">
          {projectsData.map((project, index) => (
            <AnimatedElement 
              key={index} 
              type={index % 2 === 0 ? "slide" : "slide"} 
              direction={index % 2 === 0 ? "right" : "left"} 
              duration={1000} 
              delay={300 + (index * 150)} 
              className={`flex flex-col lg:flex-row ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              } gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[16/9]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                  {project.status && (
                    <span className="inline-block px-3 py-1 ml-2 text-xs font-medium bg-amber-500 text-white rounded-full">
                      {project.status}
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button 
                  className="group"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  Ver Proyecto
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    className="ml-2 transition-transform group-hover:translate-x-1" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
