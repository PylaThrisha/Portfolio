import { Github, Linkedin, Download, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {personalInfo.name}
            </h1>

            <h2 className="text-xl sm:text-2xl text-blue-900 font-semibold mb-6">
              {personalInfo.tagline}
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-all duration-200 hover:shadow-lg"
              >
                <Download size={20} />
                Download Resume
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-medium border-2 border-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-200"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-medium border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 text-gray-700">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-blue-900 transition-colors">
                <Mail size={18} />
                <span className="text-sm">{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-blue-900 transition-colors">
                <Phone size={18} />
                <span className="text-sm">{personalInfo.phone}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-900 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover shadow-2xl ring-8 ring-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
