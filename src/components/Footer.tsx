import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'À propos', id: 'about' },
      { name: 'Équipe', id: 'team' },
      { name: 'Ambitions', id: 'ambitions' },
    ],
    solutions: [
      { name: 'Dépistage IA', id: 'solutions' },
      { name: 'Plateforme connectée', id: 'solutions' },
      { name: 'Gestion des dossiers', id: 'solutions' },
      { name: 'Datasets africains', id: 'solutions' },
    ],
  };

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/20 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-900/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main footer content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/ocusmart_logo.png"
                alt="OcuSmart"
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold">OcuSmart</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Startup HealthTech révolutionnant les soins ophtalmologiques grâce à l'IA.
              Innovation, confiance et accessibilité pour tous en Afrique.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/5 hover:border-white/15"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-5">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-5">
              Solutions
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <a href="mailto:ocusmarthealth@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group">
                <Mail className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm">ocusmarthealth@gmail.com</span>
              </a>
              <a href="tel:+221777840964" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group">
                <Phone className="w-4 h-4 group-hover:text-teal-400 transition-colors" />
                <span className="text-sm">+221 77 784 09 64</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Dakar, Sénégal</span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="mt-6 group inline-flex items-center space-x-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              <span>Nous écrire</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} OcuSmart. Tous droits réservés.
          </p>
          <p className="flex items-center space-x-1.5 text-gray-500 text-xs">
            <span>Fait avec</span>
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            <span>au Sénégal 🇸🇳</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
