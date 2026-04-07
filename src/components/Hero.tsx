import { useEffect, useState } from 'react';
import { ArrowRight, Brain, Heart, Users, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    tx: (Math.random() - 0.5) * 200,
    ty: -(Math.random() * 300 + 100),
    duration: Math.random() * 6 + 6,
    delay: Math.random() * 8,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  const badges = [
    { icon: Brain, label: 'IA Médicale', color: 'from-blue-400/20 to-blue-500/20' },
    { icon: Heart, label: 'Santé Accessible', color: 'from-teal-400/20 to-teal-500/20' },
    { icon: Users, label: 'Innovation Africaine', color: 'from-purple-400/20 to-purple-500/20' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-300% animate-gradient"
        style={{
          backgroundImage:
            'linear-gradient(-45deg, #0f172a, #1e3a8a, #0d4f6e, #134e4a, #1e3a8a, #0f172a)',
        }}
      />

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              '--size': `${p.size}px`,
              '--tx': `${p.tx}px`,
              '--ty': `${p.ty}px`,
              '--duration': `${p.duration}s`,
              '--delay': `${p.delay}s`,
              '--color': `rgba(255, 255, 255, ${p.opacity})`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-8 transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Sparkles className="w-4 h-4 text-teal-300" />
            <span className="text-sm font-medium text-blue-100">
              HealthTech · Intelligence Artificielle · Ophtalmologie
            </span>
          </div>

          {/* Logo */}
          <div
            className={`flex justify-center mb-8 transition-all duration-1000 delay-200 ${
              mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400/30 to-teal-400/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-2xl">
                <img
                  src="/ocusmart_logo.png"
                  alt="OcuSmart Logo"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-3xl blur-xl animate-pulse-glow" />
            </div>
          </div>

          {/* Title */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.95] tracking-tight transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            La vision
            <br />
            <span className="text-gradient-light">intelligente</span>
            <br />
            de la santé
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            OcuSmart révolutionne les soins ophtalmologiques grâce à l'intelligence artificielle,
            pour une santé visuelle accessible à tous en Afrique et au-delà.
          </p>

          {/* Badges */}
          <div
            className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {badges.map((badge, i) => (
              <div
                key={i}
                className={`flex items-center space-x-2 bg-gradient-to-r ${badge.color} backdrop-blur-md rounded-full px-5 py-2.5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-default`}
              >
                <badge.icon className="w-4 h-4 text-white/80" />
                <span className="text-white/90 font-medium text-sm">{badge.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-[900ms] ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button
              onClick={() => scrollToSection('about')}
              className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40"
            >
              <span className="text-lg">Découvrir OcuSmart</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('solutions')}
              className="group inline-flex items-center space-x-3 px-8 py-4 rounded-full font-semibold text-white/90 border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="text-lg">Nos solutions</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1200ms] ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}>
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center space-y-2 text-white/50 hover:text-white/80 transition-colors duration-300"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-current rounded-full animate-bounce-gentle" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;