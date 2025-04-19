
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AnimatedElement from "@/components/AnimatedElement";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="section-container flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto text-center">
          <AnimatedElement type="fade" direction="down" duration={800}>
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium bg-secondary rounded-full">
              Operations Specialist | Full-Stack Developer | IT Consultant
            </div>
          </AnimatedElement>
          
          <AnimatedElement type="fade" direction="up" duration={1000} delay={200}>
            <div className="flex justify-center mb-6">
              <Avatar className="h-32 w-32 border-4 border-primary/20">
                <AvatarImage src={import.meta.env.BASE_URL + "assets/images/perfil.jpg"} alt="Emanuel Martínez" />
                <AvatarFallback>EM</AvatarFallback>
              </Avatar>
            </div>
          </AnimatedElement>
          
          <AnimatedElement type="fade" direction="up" duration={1000} delay={400}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              MSc. Emanuel <span className="text-primary/90">Martínez Castro</span>
            </h1>
          </AnimatedElement>
          
          <AnimatedElement type="fade" direction="up" duration={1000} delay={600}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Profesional bilingüe (español/guaraní) con +13 años de experiencia en gestión de sistemas, automatización y docencia técnica.
            </p>
          </AnimatedElement>
          
          <AnimatedElement type="fade" direction="up" duration={1000} delay={800}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="flex items-center text-sm text-muted-foreground">
                <i className="fas fa-map-marker-alt mr-2"></i> Ñemby, Paraguay
              </span>
              <span className="flex items-center text-sm text-muted-foreground">
                <i className="fas fa-envelope mr-2"></i> manu.py87@gmail.com
              </span>
              <span className="flex items-center text-sm text-muted-foreground">
                <i className="fas fa-phone mr-2"></i> +595 981 269798
              </span>
              <span className="flex items-center text-sm text-muted-foreground">
                <i className="fas fa-car mr-2"></i> Vehículo propio
              </span>
              <span className="flex items-center text-sm text-muted-foreground">
                <i className="fas fa-globe mr-2"></i> Disponibilidad remota
              </span>
            </div>
          </AnimatedElement>
          
          <AnimatedElement type="fade" direction="up" duration={1000} delay={1000}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Portafolio
                <svg 
                  width="18" 
                  height="18" 
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
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/20 hover:bg-primary/5"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Sobre Mí
              </Button>
            </div>
          </AnimatedElement>
        </div>
        
        <AnimatedElement type="slide" direction="up" duration={1200} delay={300} className="w-full mt-24 overflow-hidden">
          <div className="relative mx-auto w-full max-w-4xl aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-black/5"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Hero;
