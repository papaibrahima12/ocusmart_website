import { Target, Eye, Globe, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Nous développons des solutions IA de pointe pour transformer les soins ophtalmologiques.'
    },
    {
      icon: Shield,
      title: 'Confiance',
      description: 'Notre expertise médicale et technologique garantit des solutions fiables et sécurisées.'
    },
    {
      icon: Globe,
      title: 'Accessibilité',
      description: 'Nous démocratisons l\'accès aux soins spécialisés partout en Afrique.'
    },
    {
      icon: Target,
      title: 'Humanité',
      description: 'La technologie au service de l\'humain, pour améliorer la qualité de vie de chacun.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            À propos d'<span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">OcuSmart</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              OcuSmart est une startup HealthTech révolutionnaire qui combine l'expertise médicale 
              ophtalmologique avec l'intelligence artificielle de pointe. Nous développons des 
              solutions innovantes pour démocratiser l'accès aux soins visuels de qualité.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Notre plateforme utilise l'IA pour le dépistage automatisé, la gestion intelligente 
              des dossiers patients et la connexion entre patients et structures sanitaires, 
              particulièrement en Afrique où l'accès aux soins spécialisés reste limité.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
            <p className="text-lg leading-relaxed mb-6">
              Devenir le leader de l'innovation santé en Afrique en créant un écosystème 
              numérique qui relie patients, médecins et structures sanitaires grâce à 
              l'intelligence artificielle.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-white/50 rounded-full animate-pulse delay-100"></div>
              <div className="w-3 h-3 bg-white/70 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Nos Valeurs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;