import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded"></div>
          <p className="mt-4 text-lg text-blue-100">
            Let's connect and discuss opportunities to collaborate
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-blue-100 mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities, innovative projects, or just connecting
              with fellow tech enthusiasts. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group backdrop-blur-sm"
              >
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-blue-100 mb-1">Email</div>
                  <div className="font-medium">{personalInfo.email}</div>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group backdrop-blur-sm"
              >
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-blue-100 mb-1">Phone</div>
                  <div className="font-medium">{personalInfo.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-blue-100 mb-1">Location</div>
                  <div className="font-medium">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

            <div className="space-y-4 mb-8">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm text-blue-100">Professional Network</div>
                  </div>
                </div>
                <Send size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github size={24} />
                  </div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-blue-100">Code Portfolio</div>
                  </div>
                </div>
                <Send size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-blue-900 text-center px-6 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all duration-200 hover:shadow-xl"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
