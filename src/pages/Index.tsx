
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Interests from '@/components/Interests';
import KeyAchievements from '@/components/KeyAchievements';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    const fadeElements = document.querySelectorAll('.fade-in-section, .scroll-animate-fade-up, .scroll-animate-fade-down, .scroll-animate-slide-up, .scroll-animate-slide-down');
    fadeElements.forEach((element) => observer.observe(element));

    return () => {
      fadeElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Interests />
        <KeyAchievements />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
