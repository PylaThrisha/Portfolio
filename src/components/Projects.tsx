import { Github, ExternalLink, Calendar, Code2 } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto rounded"></div>
          <p className="mt-4 text-lg text-gray-700">
            Innovative solutions leveraging AI and modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                <div className="relative">
                  <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                    <Code2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-100 font-medium">{project.subtitle}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                  <Calendar size={16} />
                  <span>{project.duration}</span>
                </div>

                <div className="space-y-3 mb-6">
                  {project.description.map((desc, descIndex) => (
                    <div key={descIndex} className="flex gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 group/btn"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
