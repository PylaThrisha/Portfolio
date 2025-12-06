import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education, certifications } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto rounded"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <GraduationCap className="text-blue-900" size={28} />
            Academic Background
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-x-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={16} />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="bg-blue-900 text-white px-6 py-3 rounded-lg font-bold text-center">
                      <div className="text-sm opacity-90 mb-1">Grade</div>
                      <div className="text-lg">{edu.grade}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Award className="text-blue-900" size={28} />
            Professional Certifications
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-900 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-blue-900 transition-colors">
                      <Award className="text-blue-900 group-hover:text-white transition-colors" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium leading-relaxed group-hover:text-blue-900 transition-colors">
                      {cert}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
