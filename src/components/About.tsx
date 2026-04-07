import { Target, Eye, Globe, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const headerAnim = useScrollAnimation();
  const missionAnim = useScrollAnimation({ threshold: 0.2 });
  const visionAnim = useScrollAnimation({ threshold: 0.2 });
  const valuesAnim = useScrollAnimation({ threshold: 0.1 });

  const values = [
    {
      icon: Eye,
      title: 'Innovation',
      description: 'Solutions IA de pointe pour transformer les soins ophtalmologiques.',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100/50',
    },
    {
      icon: Shield,
      title: 'Confiance',
      description: 'Expertise médicale et technologique garantissant fiabilité et sécurité.',
      gradient: 'from-teal-500 to-teal-600',
      bgGradient: 'from-teal-50 to-teal-100/50',
    },
    {
      icon: Globe,
      title: 'Accessibilité',
      description: "Démocratiser l'accès aux soins spécialisés partout en Afrique.",
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100/50',
    },
    {
      icon: Target,
      title: 'Humanité',
      description: "La technologie au service de l'humain, pour améliorer la qualité de vie.",
      gradient: 'from-cyan-500 to-cyan-600',
      bgGradient: 'from-cyan-50 to-cyan-100/50',
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          ref={headerAnim.ref}
          className={`text-center mb-20 transition-all duration-700 ${
            headerAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6 tracking-wide">
            QUI SOMMES-NOUS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            À propos d'<span className="text-gradient">OcuSmart</span>
          </h2>
          <div className="section-divider" />
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-24">
          {/* Mission */}
          <div
            ref={missionAnim.ref}
            className={`space-y-6 transition-all duration-700 delay-200 ${
              missionAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-blue-600">Notre Mission</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              Révolutionner la santé visuelle grâce à l'IA
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              OcuSmart est une startup HealthTech révolutionnaire qui combine l'expertise médicale
              ophtalmologique avec l'intelligence artificielle de pointe. Nous développons des
              solutions innovantes pour démocratiser l'accès aux soins visuels de qualité.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Notre plateforme utilise l'IA pour le dépistage automatisé, la gestion intelligente
              des dossiers patients et la connexion entre patients et structures sanitaires,
              particulièrement en Afrique où l'accès aux soins spécialisés reste limité.
            </p>
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-black text-gradient">IA</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Powered</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-black text-gradient">100%</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Africain</div>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-black text-gradient">24/7</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Accessible</div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div
            ref={visionAnim.ref}
            className={`transition-all duration-700 delay-400 ${
              visionAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative h-full bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 rounded-3xl p-8 lg:p-10 text-white shadow-2xl shadow-blue-500/20 overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg mb-6">
                  <div className="w-2 h-2 bg-teal-300 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-teal-100">Notre Vision</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">
                  Leader de l'innovation santé en Afrique
                </h3>
                <p className="text-lg leading-relaxed text-blue-100 mb-8">
                  Devenir le leader de l'innovation santé en Afrique en créant un écosystème
                  numérique qui relie patients, médecins et structures sanitaires grâce à
                  l'intelligence artificielle.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-1">
                    {[0.2, 0.4, 0.6, 0.8].map((opacity, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full border border-white/30"
                        style={{ backgroundColor: `rgba(255,255,255,${opacity})` }}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-blue-200 font-medium">Impact continental</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div ref={valuesAnim.ref}>
          <h3
            className={`text-3xl font-bold text-center text-gray-900 mb-12 transition-all duration-700 ${
              valuesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Nos <span className="text-gradient">Valeurs</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden ${
                  valuesAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: valuesAnim.isVisible ? `${index * 150}ms` : '0ms',
                }}
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;