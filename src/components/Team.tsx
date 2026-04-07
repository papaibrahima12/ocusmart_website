import { Stethoscope, Brain, Linkedin, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Team = () => {
  const headerAnim = useScrollAnimation();
  const cardsAnim = useScrollAnimation({ threshold: 0.1 });
  const bottomAnim = useScrollAnimation({ threshold: 0.3 });

  const teamMembers = [
    {
      name: 'Dr Saidou Sow',
      role: 'Co-fondateur & Directeur Médical',
      specialty: 'Chirurgien Ophtalmologue',
      description:
        "Expert en chirurgie ophtalmologique avec une vision innovante de l'intégration de l'IA dans la pratique médicale. Garant de la validation scientifique et clinique de nos solutions.",
      icon: Stethoscope,
      gradient: 'from-blue-500 to-blue-600',
      image: '/saidou_logo.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/saidou-sow-980a78271/',
    },
    {
      name: 'Papa Ibrahima Sow',
      role: 'Co-fondateur & CTO',
      specialty: 'Ingénieur en Informatique & Doctorant en IA pour la santé',
      description:
        "Spécialiste en IA et deep learning appliqués à la santé. Architecte des solutions technologiques innovantes qui révolutionnent les soins ophtalmologiques.",
      icon: Brain,
      gradient: 'from-teal-500 to-teal-600',
      image: '/pis.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/papa-ibrahima-sow-3982a3175/',
    },
  ];

  return (
    <section id="team" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-50/50 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          ref={headerAnim.ref}
          className={`text-center mb-20 transition-all duration-700 ${
            headerAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6 tracking-wide">
            NOTRE ÉQUIPE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Les <span className="text-gradient">visionnaires</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Une alliance unique entre expertise médicale et innovation technologique,
            unie par la passion d'améliorer la santé visuelle en Afrique.
          </p>
          <div className="section-divider mt-8" />
        </div>

        {/* Team Cards */}
        <div
          ref={cardsAnim.ref}
          className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-transparent ${
                cardsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: cardsAnim.isVisible ? `${index * 200}ms` : '0ms',
              }}
            >
              {/* Image section */}
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Icon badge */}
                <div
                  className={`absolute top-5 right-5 w-12 h-12 bg-gradient-to-br ${member.gradient} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <member.icon className="w-6 h-6 text-white" />
                </div>

                {/* Name overlay on image */}
                <div className="absolute bottom-5 left-6 right-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">{member.name}</h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <div className={`w-2 h-2 bg-gradient-to-r ${member.gradient} rounded-full`} />
                  <p className="text-blue-600 font-semibold text-sm">{member.specialty}</p>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>

                {/* Social Links */}
                <div className="flex items-center space-x-3">
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center space-x-2 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-600">LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div
          ref={bottomAnim.ref}
          className={`mt-20 relative bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 rounded-3xl p-10 lg:p-14 text-white text-center overflow-hidden transition-all duration-700 ${
            bottomAnim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Stethoscope className="w-8 h-8 text-blue-200" />
              <span className="text-2xl font-bold text-white/30">×</span>
              <Brain className="w-8 h-8 text-teal-200" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              L'Excellence par la Complémentarité
            </h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto text-blue-100">
              Notre force réside dans la synergie entre l'expertise clinique du Dr Saidou Sow
              et l'innovation technologique de Papa Ibrahima Sow. Cette complémentarité unique
              nous permet de développer des solutions IA véritablement adaptées aux besoins
              médicaux réels et aux défis du terrain africain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;