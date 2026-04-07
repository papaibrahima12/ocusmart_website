import { Calendar, MapPin, Globe2, TrendingUp, CheckCircle2, Rocket } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Ambitions = () => {
  const headerAnim = useScrollAnimation();
  const timelineAnim = useScrollAnimation({ threshold: 0.05 });
  const visionAnim = useScrollAnimation({ threshold: 0.3 });

  const roadmap = [
    {
      period: '2025 — 2026',
      label: 'Court terme',
      icon: Calendar,
      gradient: 'from-blue-500 to-blue-600',
      dotColor: 'bg-blue-500',
      goals: [
        'Finalisation du prototype de dépistage IA',
        'Validation clinique en partenariat avec hôpitaux sénégalais',
        'Première levée de fonds',
        'Équipe de 10 personnes',
      ],
    },
    {
      period: '2027 — 2029',
      label: 'Moyen terme',
      icon: MapPin,
      gradient: 'from-teal-500 to-teal-600',
      dotColor: 'bg-teal-500',
      goals: [
        "Déploiement dans 5 pays d'Afrique de l'Ouest",
        'Partenariats avec ministères de la santé',
        '100 000 patients dépistés',
        'Expansion vers autres spécialités médicales',
      ],
    },
    {
      period: '2030+',
      label: 'Long terme',
      icon: Globe2,
      gradient: 'from-purple-500 to-purple-600',
      dotColor: 'bg-purple-500',
      goals: [
        'Leader HealthTech en Afrique',
        'Expansion internationale',
        'Plateforme multi-spécialités',
        'Impact sur 10 millions de patients',
      ],
    },
  ];

  return (
    <section id="ambitions" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50/80 to-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[120px] translate-x-1/2" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-teal-50/50 rounded-full blur-[100px] -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          ref={headerAnim.ref}
          className={`text-center mb-20 transition-all duration-700 ${
            headerAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6 tracking-wide">
            FEUILLE DE ROUTE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Nos <span className="text-gradient">Ambitions</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Une feuille de route ambitieuse pour révolutionner la santé visuelle
            en Afrique et créer un impact durable.
          </p>
          <div className="section-divider mt-8" />
        </div>

        {/* Timeline */}
        <div ref={timelineAnim.ref} className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-gray-200">
            <div
              className={`absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-teal-500 to-purple-500 transition-all duration-[2000ms] ease-out ${
                timelineAnim.isVisible ? 'h-full' : 'h-0'
              }`}
            />
          </div>

          <div className="space-y-8 lg:space-y-12">
            {roadmap.map((phase, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  timelineAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: timelineAnim.isVisible ? `${index * 300 + 200}ms` : '0ms',
                }}
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-8 top-10 -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 ${phase.dotColor} rounded-full ring-4 ring-white shadow-lg`} />
                </div>

                {/* Card */}
                <div className="lg:ml-20 group bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-500 hover:-translate-y-1 overflow-hidden relative">
                  {/* Colored top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${phase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    {/* Period info */}
                    <div className="flex items-center lg:flex-col lg:items-start space-x-4 lg:space-x-0 lg:space-y-3 mb-6 lg:mb-0 lg:min-w-[180px]">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${phase.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <phase.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <span className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${phase.gradient} bg-clip-text text-transparent`}>
                          {phase.label}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{phase.period}</h3>
                      </div>
                    </div>

                    {/* Goals list */}
                    <div className="flex-1">
                      <div className="grid sm:grid-cols-2 gap-3">
                        {phase.goals.map((goal, goalIndex) => (
                          <div
                            key={goalIndex}
                            className="flex items-start space-x-3 p-4 bg-gray-50/80 rounded-xl hover:bg-gray-100/80 transition-all duration-300 group/goal"
                          >
                            <CheckCircle2
                              className={`w-5 h-5 mt-0.5 flex-shrink-0 text-gray-300 group-hover/goal:text-green-500 transition-colors duration-300`}
                            />
                            <span className="text-gray-700 font-medium text-sm leading-relaxed">
                              {goal}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision banner */}
        <div
          ref={visionAnim.ref}
          className={`mt-20 relative bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 rounded-3xl p-10 lg:p-14 text-white text-center overflow-hidden transition-all duration-700 ${
            visionAnim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">Notre Vision à Long Terme</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto text-blue-100">
              Faire d'OcuSmart le pont technologique qui connecte l'Afrique au futur de la santé,
              en démocratisant l'accès aux soins spécialisés grâce à l'intelligence artificielle
              et en positionnant le continent comme un acteur majeur de l'innovation médicale mondiale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambitions;