import { Handshake, GraduationCap, Building2, Microscope, HeartPulse } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Partners = () => {
  const headerAnim = useScrollAnimation();
  const cardsAnim = useScrollAnimation({ threshold: 0.1 });

  const ecosystem = [
    {
      icon: GraduationCap,
      title: 'Universités & Recherche',
      description: 'Collaborations académiques pour valider nos modèles IA et former la prochaine génération.',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Building2,
      title: 'Hôpitaux & Cliniques',
      description: 'Partenariats cliniques pour le déploiement et la validation terrain de nos solutions.',
      gradient: 'from-teal-500 to-teal-600',
    },
    {
      icon: Microscope,
      title: 'Incubateurs & Accélérateurs',
      description: "Accompagnement stratégique et accès à l'écosystème entrepreneurial africain.",
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: HeartPulse,
      title: 'ONG & Institutions',
      description: 'Programmes de dépistage à grande échelle pour les populations vulnérables.',
      gradient: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          ref={headerAnim.ref}
          className={`text-center mb-20 transition-all duration-700 ${
            headerAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6 tracking-wide">
            ÉCOSYSTÈME
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Nos <span className="text-gradient">Partenaires</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Un réseau solide d'institutions et d'organisations qui partagent notre vision
            d'une santé accessible grâce à la technologie.
          </p>
          <div className="section-divider mt-8" />
        </div>

        {/* Ecosystem Cards */}
        <div
          ref={cardsAnim.ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {ecosystem.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden text-center ${
                cardsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: cardsAnim.isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div
                className={`w-16 h-16 mx-auto bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
              >
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 glass-light rounded-2xl px-8 py-5 shadow-sm">
            <Handshake className="w-6 h-6 text-blue-600" />
            <p className="text-gray-700 font-medium">
              Intéressé par un partenariat ?{' '}
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gradient font-bold hover:underline"
              >
                Contactez-nous →
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
