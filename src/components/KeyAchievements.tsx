import { useEffect, useRef } from 'react';
import AnimatedElement from '@/components/AnimatedElement';

const achievementsData = [
  {
    type: "Automatización",
    title: "Sistema Integral de Gestión Educativa",
    creator: "Proyecto Personal",
    year: "2022-2023",
    description: "Plataforma web (Python + React + Supabase) para automatizar carga de calificaciones, registros conductuales e informes, reduciendo un 40% el tiempo administrativo. Integración con APIs de Google Workspace.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2494&auto=format&fit=crop",
    color: "from-indigo-900/80 to-indigo-900/30"
  },
  {
    type: "Desarrollo",
    title: "Sistema de Votación Estudiantil",
    creator: "Proyecto Institucional",
    year: "2021",
    description: "Aplicación full-stack (TypeScript + Node.js) con resultados en tiempo real y autenticación segura para elecciones estudiantiles.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    color: "from-red-900/80 to-red-900/30"
  },
  {
    type: "Consultoría",
    title: "Consultoría TI para Instituciones",
    creator: "Servicio Profesional",
    year: "2018-Presente",
    description: "Migración a la nube de sistemas legacy, configuración de redes DMZ y VPN. Capacitación en Zapier y Python para automatización de procesos administrativos.",
    image: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?q=80&w=2070&auto=format&fit=crop",
    color: "from-green-900/80 to-green-900/30"
  },
];

const KeyAchievements = () => {
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
    <section id="achievements" ref={sectionRef} className="py-24 bg-secondary/50">
      <div className="section-container">
        <AnimatedElement type="fade" direction="up" duration={1000}>
          <h2 className="section-title mb-16">Logros Clave</h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((item, index) => (
            <AnimatedElement 
              key={index} 
              type="slide" 
              direction="up" 
              duration={800} 
              delay={200 + (index * 150)} 
              className="card-hover"
            >
              <div className="h-full rounded-xl overflow-hidden border border-border/50 bg-card">
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} z-10`}></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-background/90 rounded-md backdrop-blur-sm">
                      {item.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 line-clamp-1">{item.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <span>{item.creator}</span>
                    <span className="mx-2">•</span>
                    <span>{item.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;