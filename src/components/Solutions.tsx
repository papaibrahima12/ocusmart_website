import { Scan, Network, FileText, Database, ArrowRight } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Scan,
      title: 'Dépistage Automatisé par IA',
      description: 'Détection précoce de pathologies comme la rétinopathie diabétique grâce à l\'analyse d\'images rétiniennes par intelligence artificielle.',
      features: ['Diagnostic rapide', 'Précision clinique', 'Accessibilité rurale'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Network,
      title: 'Plateforme Numérique Connectée',
      description: 'Écosystème digital reliant patients, médecins et structures sanitaires pour un parcours de soins optimisé.',
      features: ['Téléconsultation', 'Suivi patient', 'Coordination soins'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: FileText,
      title: 'Gestion Intelligente des Dossiers',
      description: 'Système de gestion des dossiers patients alimenté par l\'IA pour une prise en charge personnalisée et efficace.',
      features: ['Dossier numérique', 'Analyse prédictive', 'Recommandations IA'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Database,
      title: 'Recherche et Datasets Africains',
      description: 'Constitution de bases de données médicales africaines pour développer des IA adaptées aux populations locales.',
      features: ['Données locales', 'Recherche médicale', 'IA contextualisée'],
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des technologies d'avant-garde au service de la santé ophtalmologique, 
            conçues pour répondre aux défis spécifiques du continent africain.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>

              <div className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${solution.color} rounded-full`}></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* <button className="group/btn flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200">
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </button> */}
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à transformer votre pratique médicale ?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Découvrez comment nos solutions peuvent améliorer vos diagnostics et optimiser 
            vos parcours de soins.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Nous contacter</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;