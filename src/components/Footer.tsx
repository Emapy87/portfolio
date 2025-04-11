
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Emapy87",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/emanuel-martinez-1a16081a0",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: "Email",
      url: "mailto:manu.py87@gmail.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-secondary py-12">
      <div className="section-container py-8 border-t border-border/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold font-display tracking-tight">UnTalEma</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transformando ideas en soluciones tecnológicas innovadoras. Especializado en análisis de sistemas,
              arquitectura de software y auditoría informática.
            </p>
            <div className="mt-4 p-3 border-l-2 border-primary/50 bg-primary/5 rounded-r-md italic">
              <p className="text-sm text-foreground/90">
                "Programar es enseñar a la máquina a pensar, pero los mejores sistemas nacen cuando primero escuchamos a las personas"
              </p>
            </div>
          </div>
          
          <div className="md:col-span-2 md:flex md:justify-between">
            <div>
              <h3 className="font-semibold mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a href="#interests" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Intereses
                  </a>
                </li>
                <li>
                  <a href="#achievements" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Logros Clave
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Portafolio
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 mt-6 md:mt-0">Contacto</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground text-sm">Ñemby, Paraguay</li>
                <li>
                  <a href="mailto:manu.py87@gmail.com" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    manu.py87@gmail.com
                  </a>
                </li>
                <li className="text-muted-foreground text-sm">+595 981 269798</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 mt-6 md:mt-0">Redes Sociales</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-full bg-background/50 hover:bg-background/80"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Emanuel Martínez. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="../CV_Emanuel_Martinez.pdf" download className="px-3 py-2 bg-primary text-white text-xs font-medium rounded hover:bg-primary/90 transition-colors flex items-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Descargar Resumen
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
