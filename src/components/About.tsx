
import { useEffect, useRef } from 'react';
import AnimatedElement from '@/components/AnimatedElement';

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-24 bg-secondary/50">
      <div className="section-container">
        <AnimatedElement type="fade" direction="up" duration={1000}>
          <h2 className="section-title mb-16">Sobre Mí</h2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedElement type="slide" direction="right" duration={1000} delay={200}>
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-black/5 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=2080&auto=format&fit=crop"
                alt="Emanuel Martinez"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
          </AnimatedElement>
          
          <div>
            <AnimatedElement type="fade" direction="left" duration={1000} delay={300}>
              <h3 className="text-2xl font-bold mb-4">Perfil Profesional</h3>
              <p className="text-muted-foreground mb-6">
                Profesional bilingüe (español/guaraní) con +13 años de experiencia en gestión de sistemas, automatización y docencia técnica. Combinación única de habilidades en:
              </p>
              <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-2">
                <li><strong>Automatización de procesos</strong> (Python, APIs, IA, scripts)</li>
                <li><strong>Desarrollo full-stack</strong> (React, Node.js, TypeScript, Java)</li>
                <li><strong>Infraestructura TI</strong> (redes, servidores Linux/Windows, seguridad DMZ)</li>
                <li><strong>Liderazgo educativo</strong> (formación de profesionales en tecnologías modernas)</li>
              </ul>
            </AnimatedElement>
            
            <AnimatedElement type="fade" direction="left" duration={1000} delay={500}>
              <h4 className="font-semibold text-lg mb-2">Formación Académica</h4>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <div>
                    <span className="font-medium">Maestría en Auditoría y Gestión de Sistemas</span>
                    <p className="text-sm text-muted-foreground">Universidad Tecnológica Intercontinental (UTIC), 2018</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <div>
                    <span className="font-medium">Lic. en Análisis de Sistemas</span>
                    <p className="text-sm text-muted-foreground">Universidad Tecnológica Intercontinental (UTIC), 2011</p>
                  </div>
                </li>
              </ul>
              <h4 className="font-semibold text-lg mb-2">Cursos Recientes</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>Python Avanzado (Cisco, 2025)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>Ciberseguridad Básica (Cisco, 2025)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3"></span>
                  <span>Desarrollo Web (Universidad de Alicante, 2017)</span>
                </li>
              </ul>
            </AnimatedElement>
            
            <AnimatedElement type="fade" direction="left" duration={1000} delay={700}>
              <h4 className="font-semibold text-lg mb-3">Habilidades Técnicas</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h5 className="font-medium mb-2">Lenguajes</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Python</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>JavaScript/TypeScript</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Java</span>
                        <span>80%</span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>SQL</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Tecnologías</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>React</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Node.js</span>
                        <span>80%</span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>APIs REST</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>PostgreSQL/MySQL</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2">Herramientas</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Git</span>
                        <span>80%</span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Docker</span>
                        <span>70%</span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Zapier</span>
                        <span>60%</span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Linux Server</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement type="fade" direction="left" duration={1000} delay={700}>
              <div className="fade-in-section">
                <h4 className="font-semibold text-lg mb-3">Experiencia Relevante</h4>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="flex justify-between font-medium">
                      <h5>Consultor TI & Docente Universitario</h5>
                      <span>2014 – Presente</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">Universidad Tecnológica Intercontinental (UTIC)</p>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 mt-1 space-y-1">
                      <li>Scripts en Python para sincronizar datos entre sistemas académicos</li>
                      <li>Gestión de servidores Linux (Apache, PostgreSQL), firewall y backups</li>
                      <li>Cursos de programación (Java/Python), redes y bases de datos</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex justify-between font-medium">
                      <h5>Desarrollador Full-Stack (Proyectos Institucionales)</h5>
                      <span>2017 – Presente</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">Colegio Experimental Paraguay-Brasil</p>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 mt-1 space-y-1">
                      <li>Sistema de Votación Digital: Arquitectura serverless con Node.js y Supabase</li>
                      <li>Registro Anecdótico de Conductas: Aplicación React con autenticación JWT</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex justify-between font-medium">
                      <h5>Docente de Informática</h5>
                      <span>2011 – Presente</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">Colegios Cristianos, UTIC, Colegio Metodista Nuevo Horizonte</p>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 mt-1 space-y-1">
                      <li>Enseñanza de programación, redes, ofimática y hardware</li>
                      <li>Actualización curricular en tecnologías modernas</li>
                    </ul>
                  </div>
                </div>
                
                <h4 className="font-semibold text-lg mb-3">Idiomas</h4>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Español</span>
                      <span>Nativo</span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full">
                      <div className="h-full bg-primary rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Guaraní</span>
                      <span>Intermedio</span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full">
                      <div className="h-full bg-primary rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Inglés</span>
                      <span>Básico Técnico</span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full">
                      <div className="h-full bg-primary rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
