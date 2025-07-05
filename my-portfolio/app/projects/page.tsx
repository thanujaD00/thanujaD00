import Navbar from '../components/Navbar';

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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600">
            A showcase of my work across full-stack development, machine learning, and cloud computing
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-full border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="text-gray-500 text-sm">{project.year}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Key Highlights:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View Details
                  </button>
                  <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <section className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'React.js', 'React Native', 'Node.js', 'Python', 'TypeScript', 'MongoDB',
              'Docker', 'Kubernetes', 'GCP', 'Machine Learning', 'Flask', 'Express.js',
              'Redux', 'SASS', 'Tailwind CSS', 'JWT', 'DevOps', 'CI/CD'
            ].map((tech) => (
              <div key={tech} className="bg-gray-50 p-3 rounded-lg text-center">
                <span className="text-gray-700 text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}