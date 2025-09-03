import { Calendar, MapPin, TrendingUp, Globe2 } from 'lucide-react';

const Ambitions = () => {
  const roadmap = [
    {
      period: 'Court terme (2025-2026)',
      icon: Calendar,
      color: 'from-blue-500 to-blue-600',
      goals: [
        'Finalisation du prototype de dépistage IA',
        'Validation clinique en partenariat avec hôpitaux sénégalais',
        'Première levée de fonds',
        'Équipe de 10 personnes'
      ]
    },
    {
      period: 'Moyen terme (2027-2029)',
      icon: MapPin,
      color: 'from-teal-500 to-teal-600',
      goals: [
        'Déploiement dans 5 pays d\'Afrique de l\'Ouest',
        'Partenariats avec ministères de la santé',
        '100 000 patients dépistés',
        'Expansion vers autres spécialités médicales'
      ]
    },
    {
      period: 'Long terme (2030+)',
      icon: Globe2,
      color: 'from-purple-500 to-purple-600',
      goals: [
        'Leader HealthTech en Afrique',
        'Expansion internationale',
        'Plateforme multi-spécialités',
        'Impact sur 10 millions de patients'
      ]
    }
  ];

  return (
    <section id="ambitions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Ambitions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une feuille de route ambitieuse pour révolutionner la santé visuelle 
            en Afrique et créer un impact durable à l'échelle continentale.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mt-8"></div>
        </div>

        <div className="space-y-8">
          {roadmap.map((phase, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
                <div className="flex items-center space-x-4 mb-6 lg:mb-0 lg:flex-col lg:space-x-0 lg:space-y-4 lg:min-w-[200px]">
                  <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 lg:text-center">{phase.period}</h3>
                </div>

                <div className="flex-1">
                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.goals.map((goal, goalIndex) => (
                      <div
                        key={goalIndex}
                        className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${phase.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-700 font-medium">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gray-200 to-transparent"></div>
              <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${phase.color} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-6">Notre Vision à Long Terme</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            Faire d'OcuSmart le pont technologique qui connecte l'Afrique au futur de la santé, 
            en démocratisant l'accès aux soins spécialisés grâce à l'intelligence artificielle 
            et en positionnant le continent comme un acteur majeur de l'innovation médicale mondiale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ambitions;