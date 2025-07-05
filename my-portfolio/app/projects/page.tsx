import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'CocoTech - Smart Agriculture System',
      description: 'Final year research project supporting Sri Lanka\'s coconut industry with AI-driven insights. Built hybrid ML models for yield and price forecasting with React Native mobile app.',
      technologies: ['Python', 'Flask', 'React Native', 'TypeScript', 'MongoDB', 'Machine Learning', 'i18n'],
      category: 'Research Project',
      year: '2024/25',
      highlights: ['Random Forest, XGBoost, LSTM forecasting', 'Multilingual mobile app', 'Real-time predictions for farmers']
    },
    {
      id: 2,
      title: 'Healthcare Management System - Dental Module',
      description: 'Advanced dental treatment module for healthcare management system with interactive digital tooth chart and SVG-based treatment notations.',
      technologies: ['React', 'Redux', 'SASS', 'Node.js', 'TypeScript', 'MongoDB', 'SVG'],
      category: 'Professional Work',
      year: '2024',
      highlights: ['Interactive tooth chart', 'SVG-based notations', 'Improved rendering efficiency']
    },
    {
      id: 3,
      title: 'Microservice Authentication System',
      description: 'Secure, containerized authentication microservice for e-commerce platform using modern DevOps practices on Google Cloud Platform.',
      technologies: ['Node.js', 'TypeScript', 'Express.js', 'MongoDB', 'Docker', 'Kubernetes', 'GCP', 'CI/CD'],
      category: 'Cloud Computing',
      year: '2025',
      highlights: ['JWT-based authentication', 'Role-based access control', 'DevSecOps with Snyk scanning']
    },
    {
      id: 4,
      title: 'EduCode - Peer Review System',
      description: 'Secure peer review system for academic course management with JWT authentication and comprehensive feedback features.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      category: 'Academic Project',
      year: '2023',
      highlights: ['Secure peer feedback system', 'JWT authentication', 'Project management integration']
    },
    {
      id: 5,
      title: 'Dev-Link - Mobile Job Platform',
      description: 'Mobile job application platform with job posting, application modules, and PDF upload functionality for seamless job searching.',
      technologies: ['React Native', 'TypeScript', 'MongoDB', 'Node.js', 'Express.js', 'Figma'],
      category: 'Mobile Application',
      year: '2023',
      highlights: ['Job posting and application', 'PDF upload functionality', 'Mobile-first design']
    },
    {
      id: 6,
      title: 'Agricultural Management App',
      description: 'Innovative agricultural application designed to streamline data operations and enhance efficiency for local farmers.',
      technologies: ['TypeScript', 'React', 'SQL Workbench', 'Node.js'],
      category: 'Professional Work',
      year: '2023',
      highlights: ['Farmer-focused design', 'Data operation optimization', 'Local agriculture support']
    }
  ];

  const categories = ['All', 'Research Project', 'Professional Work', 'Academic Project', 'Mobile Application', 'Cloud Computing'];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top Left Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Top Right Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Bottom Left Glow */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/15 to-transparent rounded-full blur-3xl"></div>
        
        {/* Bottom Right Glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-500/15 to-transparent rounded-full blur-3xl"></div>
        
        {/* Center Edge Glows */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-orange-400/10 to-transparent blur-2xl transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-l from-purple-400/10 to-transparent blur-2xl transform -translate-y-1/2"></div>
        
        {/* Top Center Glow */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-b from-orange-400/10 to-transparent blur-3xl transform -translate-x-1/2"></div>
        
        {/* Bottom Center Glow */}
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-t from-purple-400/10 to-transparent blur-3xl transform -translate-x-1/2"></div>
      </div>

      <CustomCursor />
      <Navbar />
      
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
              My
            </span>
            <span className="text-white"> Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my work across full-stack development, machine learning, and cloud computing
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 text-sm font-medium text-gray-300 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white/5 rounded-lg border border-white/10 hover:border-orange-400/30 transition-all duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-300 text-sm font-medium rounded-full border border-orange-400/30">
                    {project.category}
                  </span>
                  <span className="text-gray-400 text-sm">{project.year}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-orange-300 mb-3">Key Highlights:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-400 mr-3 mt-1">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="text-orange-300 hover:text-orange-200 text-sm font-medium transition-colors">
                    View Details →
                  </button>
                  <button className="text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors">
                    GitHub →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <section className="mt-24 bg-white/5 p-12 rounded-lg border border-white/10">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
              Technologies
            </span>
            <span className="text-white"> I Work With</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'React.js', 'React Native', 'Node.js', 'Python', 'TypeScript', 'MongoDB',
              'Docker', 'Kubernetes', 'GCP', 'Machine Learning', 'Flask', 'Express.js',
              'Redux', 'SASS', 'Tailwind CSS', 'JWT', 'DevOps', 'CI/CD'
            ].map((tech) => (
              <div key={tech} className="bg-white/5 p-4 rounded-lg text-center border border-white/10 hover:bg-white/10 transition-all duration-300">
                <span className="text-gray-300 text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}