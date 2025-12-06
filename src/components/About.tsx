import { Target, Award, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering high-quality solutions that meet project requirements and exceed expectations"
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description: "Maintaining a 9.48 GPA while actively working on real-world projects and internships"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong collaboration skills with experience in cross-functional teams and agile environments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-blue-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 sm:p-12 text-white">
          <h3 className="text-2xl font-bold mb-4">My Journey</h3>
          <p className="text-lg leading-relaxed opacity-95">
            As a Computer Science Engineering student at Malla Reddy College, I've developed a passion for creating
            innovative solutions that bridge the gap between complex technologies and real-world applications. My
            experience spans from developing AI-powered systems to building mobile applications, always with a focus
            on scalability, efficiency, and user experience. I'm constantly exploring new technologies and methodologies
            to stay at the forefront of the rapidly evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
}
