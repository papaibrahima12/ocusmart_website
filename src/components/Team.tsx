import { Stethoscope, Brain, Linkedin } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr Saidou Sow',
      role: 'Co-fondateur & Directeur Médical',
      specialty: 'Chirurgien Ophtalmologue',
      description: 'Expert en chirurgie ophtalmologique avec une vision innovante de l\'intégration de l\'IA dans la pratique médicale. Garant de la validation scientifique et clinique de nos solutions.',
      icon: Stethoscope,
      gradient: 'from-blue-500 to-blue-600',
      image: '/saidou_logo.jpeg',
      linkedinUrl: 'https://www.linkedin.com/in/saidou-sow-980a78271/'
    },
    {
      name: 'Papa Ibrahima Sow',
      role: 'Co-fondateur & CTO',
      specialty: 'Ingénieur de conception en Informatique et Doctorant en IA pour la santé',
      description: 'Spécialiste en IA et deep learning appliqués à la santé. Architecte des solutions technologiques innovantes qui révolutionnent les soins ophtalmologiques.',
      icon: Brain,
      gradient: 'from-teal-500 to-teal-600',
      image: '/pis.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/papa-ibrahima-sow-3982a3175/'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Équipe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une alliance unique entre expertise médicale et innovation technologique, 
            unie par la passion d'améliorer la santé visuelle en Afrique.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                  <member.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className={`text-lg font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-2`}>
                  {member.role}
                </p>
                <p className="text-blue-600 font-medium mb-4">{member.specialty}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>

                <div className="flex space-x-4">
                  <a href={member.linkedinUrl} target='_blank' className="flex items-center justify-center w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors duration-200">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                  </a>
                  {/* <a href='https://www.google.com' target='_blank' className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            L'Excellence par la Complémentarité
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Notre force réside dans la synergie entre l'expertise clinique du Dr Saidou Sow 
            et l'innovation technologique de Papa Ibrahima Sow. Cette complémentarité unique 
            nous permet de développer des solutions IA véritablement adaptées aux besoins 
            médicaux réels et aux défis du terrain africain. Ensemble, nous façonnons l'avenir 
            des soins ophtalmologiques, alliant rigueur scientifique et avancées technologiques 
            pour lutter contre la cécité et offrir une santé visuelle accessible et de qualité à tous.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;