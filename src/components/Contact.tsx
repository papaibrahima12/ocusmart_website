import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ocusmarthealth@gmail.com',
      link: 'mailto:ocusmarthealth@gmail.com'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+221 77 784 09 64',
      link: 'tel:+221777840964'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Dakar, Sénégal',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', href: '#' },
    { icon: Twitter, name: 'Twitter', href: '#' },
    { icon: Globe, name: 'Site Web', href: '#' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contactez-<span className="bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">nous</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Prêt à révolutionner la santé avec nous ? Parlons de vos projets, 
            partenariats ou investissements.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-blue-100 mb-2">
                  Organisation
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  placeholder="Votre organisation"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-blue-100 mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                >
                  <option value="" className="text-gray-900">Sélectionnez un sujet</option>
                  <option value="partenariat" className="text-gray-900">Partenariat médical</option>
                  <option value="investissement" className="text-gray-900">Opportunité d'investissement</option>
                  <option value="collaboration" className="text-gray-900">Collaboration recherche</option>
                  <option value="demo" className="text-gray-900">Demande de démonstration</option>
                  <option value="autre" className="text-gray-900">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Envoyer le message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-sm font-medium">{info.title}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Suivez-nous</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">
                Rejoignez la révolution HealthTech
              </h3>
              <p className="text-blue-100 mb-6">
                Que vous soyez médecin, investisseur, partenaire technologique ou institution, 
                nous sommes ouverts aux collaborations qui feront avancer la santé en Afrique.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-400/30 text-blue-100 rounded-full text-sm font-medium">
                  Partenariats médicaux
                </span>
                <span className="px-3 py-1 bg-teal-400/30 text-teal-100 rounded-full text-sm font-medium">
                  Investissements
                </span>
                <span className="px-3 py-1 bg-purple-400/30 text-purple-100 rounded-full text-sm font-medium">
                  Collaborations R&D
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;