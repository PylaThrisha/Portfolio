import { Briefcase, MapPin, Calendar, Github, Award, ChevronRight } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto rounded"></div>
          <p className="mt-4 text-lg text-gray-700">
            Professional internships and hands-on project experience
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-900"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-900 rounded-full items-center justify-center ring-4 ring-white z-10">
                  <Briefcase className="text-white" size={20} />
                </div>

                <div className="md:w-1/2">
                  <div
                    className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-blue-900 font-semibold mb-2">{exp.company}</p>
                        <p className="text-sm text-gray-600 font-medium mb-2">{exp.project}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-700">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex gap-2 text-gray-700">
                          <ChevronRight className="flex-shrink-0 text-blue-900 mt-1" size={16} />
                          <p className="text-sm leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {/* View Project Button */}
                      <a
                        href={exp.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                      >
                        <Github size={16} />
                        View Project
                      </a>

                      {/* Certificate Button */}
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
                      >
                        <Award size={16} />
                        Certificate
                      </a>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
