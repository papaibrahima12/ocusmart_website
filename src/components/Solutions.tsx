import { Scan, Network, FileText, Database, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Solutions = () => {
  const headerAnim = useScrollAnimation();
  const cardsAnim = useScrollAnimation({ threshold: 0.05 });
  const ctaAnim = useScrollAnimation({ threshold: 0.3 });

  const solutions = [
    {
      icon: Scan,
      number: '01',
      title: 'Dépistage Automatisé par IA',
      description:
        "Détection précoce de pathologies comme la rétinopathie diabétique grâce à l'analyse d'images rétiniennes par intelligence artificielle.",
      features: ['Diagnostic rapide', 'Précision clinique', 'Accessibilité rurale'],
      gradient: 'from-blue-500 to-blue-600',
      lightBg: 'from-blue-50 to-blue-100/30',
      borderColor: 'group-hover:border-blue-200',
    },
    {
      icon: Network,
      number: '02',
      title: 'Plateforme Numérique Connectée',
      description:
        'Écosystème digital reliant patients, médecins et structures sanitaires pour un parcours de soins optimisé.',
      features: ['Téléconsultation', 'Suivi patient', 'Coordination soins'],
      gradient: 'from-teal-500 to-teal-600',
      lightBg: 'from-teal-50 to-teal-100/30',
      borderColor: 'group-hover:border-teal-200',
    },
    {
      icon: FileText,
      number: '03',
      title: 'Gestion Intelligente des Dossiers',
      description:
        "Système de gestion des dossiers patients alimenté par l'IA pour une prise en charge personnalisée et efficace.",
      features: ['Dossier numérique', 'Analyse prédictive', 'Recommandations IA'],
      gradient: 'from-purple-500 to-purple-600',
      lightBg: 'from-purple-50 to-purple-100/30',
      borderColor: 'group-hover:border-purple-200',
    },
    {
      icon: Database,
      number: '04',
      title: 'Recherche et Datasets Africains',
      description:
        'Constitution de bases de données médicales africaines pour développer des IA adaptées aux populations locales.',
      features: ['Données locales', 'Recherche médicale', 'IA contextualisée'],
      gradient: 'from-cyan-500 to-cyan-600',
      lightBg: 'from-cyan-50 to-cyan-100/30',
      borderColor: 'group-hover:border-cyan-200',
    },
  ];

  return (
    <section id="solutions" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-50 rounded-full blur-[100px] translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-teal-50 rounded-full blur-[80px] -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div
          ref={headerAnim.ref}
          className={`text-center mb-20 transition-all duration-700 ${
            headerAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6 tracking-wide">
            NOS SOLUTIONS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Technologies <span className="text-gradient">d'avant-garde</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Des solutions innovantes conçues pour répondre aux défis spécifiques
            de la santé ophtalmologique en Afrique.
          </p>
          <div className="section-divider mt-8" />
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsAnim.ref}
          className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-20"
        >
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 ${solution.borderColor} shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                cardsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: cardsAnim.isVisible ? `${index * 150}ms` : '0ms',
              }}
            >
              {/* Hover background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Number & Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className={`text-5xl font-black bg-gradient-to-br ${solution.gradient} bg-clip-text text-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-500`}>
                    {solution.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                  {solution.title}
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${solution.lightBg} border border-gray-100 text-gray-700 group-hover:border-transparent transition-all duration-300`}
                    >
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${solution.gradient} rounded-full`} />
                      <span>{feature}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          ref={ctaAnim.ref}
          className={`text-center bg-gradient-to-r from-blue-50 via-white to-teal-50 rounded-3xl p-10 lg:p-14 border border-gray-100 shadow-sm transition-all duration-700 ${
            ctaAnim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Prêt à transformer votre pratique médicale ?
          </h3>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto text-lg">
            Découvrez comment nos solutions peuvent améliorer vos diagnostics et optimiser
            vos parcours de soins.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30"
          >
            <span className="text-lg">Nous contacter</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;