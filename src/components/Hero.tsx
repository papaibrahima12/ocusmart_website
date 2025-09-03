import { ArrowRight, Brain, Heart, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-teal-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full flex items-center justify-center shadow-2xl">
                <img 
                  src="/ocusmart_logo.png" 
                  alt="OcuSmart Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-blue-400/30 to-teal-400/30 rounded-full blur-lg animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            La vision intelligente
            <span className="block bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
              de la santé
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            OcuSmart révolutionne les soins ophtalmologiques grâce à l'intelligence artificielle, 
            pour une santé visuelle accessible à tous en Afrique et au-delà.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Brain className="w-5 h-5 text-blue-300" />
              <span className="text-white font-medium">IA Médicale</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Heart className="w-5 h-5 text-teal-300" />
              <span className="text-white font-medium">Santé Accessible</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="w-5 h-5 text-purple-300" />
              <span className="text-white font-medium">Innovation Africaine</span>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <span className="text-lg">Découvrir OcuSmart</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;