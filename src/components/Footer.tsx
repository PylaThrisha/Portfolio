import { Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 text-gray-300">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500" />
            <span>by {personalInfo.name}</span>
          </div>

          <div className="text-gray-400 text-sm">
            © {currentYear} All rights reserved
          </div>

          <div className="flex gap-4 text-sm text-gray-400">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
