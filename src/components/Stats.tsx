import { useCountUp } from '../hooks/useCountUp';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Eye, Cpu, MapPin, Users } from 'lucide-react';

const Stats = () => {
  const headerAnim = useScrollAnimation();

  const stats = [
    {
      icon: Eye,
      end: 4,
      suffix: '',
      label: 'Solutions IA',
      description: 'Innovantes',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Cpu,
      end: 2,
      suffix: '',
      label: 'Co-fondateurs',
      description: 'Experts',
      gradient: 'from-teal-500 to-teal-600',
    },
    {
      icon: MapPin,
      end: 5,
      suffix: '+',
      label: 'Pays ciblés',
      description: 'En Afrique',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      end: 10,
      suffix: 'M+',
      label: 'Patients visés',
      description: 'À long terme',
      gradient: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={headerAnim.ref}
          className={`text-center mb-16 transition-all duration-700 ${
            headerAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6 tracking-wide">
            EN CHIFFRES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Notre <span className="text-gradient">Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  icon: Icon,
  end,
  suffix,
  label,
  description,
  gradient,
  index,
}: {
  icon: typeof Eye;
  end: number;
  suffix: string;
  label: string;
  description: string;
  gradient: string;
  index: number;
}) => {
  const { ref, formatted } = useCountUp({ end, suffix, duration: 2000 });

  return (
    <div
      ref={ref}
      className="group relative text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Hover gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

      <div className="relative z-10">
        <div
          className={`w-14 h-14 mx-auto bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{formatted}</div>
        <div className="text-lg font-bold text-gray-800 mb-1">{label}</div>
        <div className="text-sm text-gray-500 font-medium">{description}</div>
      </div>
    </div>
  );
};

export default Stats;
