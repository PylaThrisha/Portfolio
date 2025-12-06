import type { ElementType } from 'react';
import {
  Code,
  Coffee,
  Database,
  FileCode,
  Palette,
  Braces,
  Cpu,
  Brain,
  Eye,
  Sigma,
  Table,
  BarChart,
  Activity,
  Users,
  Lightbulb,
  Handshake,
} from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap: { [key: string]: ElementType } = {
  code: Code,
  coffee: Coffee,
  database: Database,
  'file-code': FileCode,
  palette: Palette,
  braces: Braces,
  cpu: Cpu,
  brain: Brain,
  eye: Eye,
  sigma: Sigma,
  table: Table,
  'bar-chart': BarChart,
  activity: Activity,
  users: Users,
  lightbulb: Lightbulb,
  handshake: Handshake,
};

// Fallback icon per category (used when skills are just strings)
const categoryIconFallback: { [key: string]: ElementType } = {
  'Programming Languages': Code,
  'Web Technologies': FileCode,
  'ML Tools': Brain,
  'Soft Skills': Users,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills &amp; Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit combining modern technologies and essential soft skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <div className="w-2 h-8 bg-blue-900 rounded" />
                {category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {(skillList as any[]).map((skill, index) => {
                  // Support both: "Python" and { name: "Python", icon: "code" }
                  const skillName =
                    typeof skill === 'string' ? skill : skill.name;

                  const skillIconKey =
                    typeof skill === 'string' ? undefined : skill.icon;

                  const IconComponent: ElementType =
                    (skillIconKey && iconMap[skillIconKey]) ||
                    categoryIconFallback[category] ||
                    Code;

                  return (
                    <div
                      key={`${skillName}-${index}`}
                      className="group flex flex-col items-center justify-center p-4 bg-white rounded-xl hover:bg-blue-900 transition-all duration-300 cursor-pointer hover:scale-110 shadow-sm hover:shadow-md"
                    >
                      <IconComponent className="w-10 h-10 text-blue-900 group-hover:text-white transition-colors duration-300 mb-2" />
                      <span className="text-sm font-medium text-gray-700 group-hover:text-white text-center transition-colors duration-300">
                        {skillName}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
