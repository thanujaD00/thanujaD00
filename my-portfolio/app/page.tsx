import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-6xl mx-auto px-4 py-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">Thanuja Wickramasinghe</h1>
              <p className="text-xl mb-2">Software Engineer</p>
              <p className="text-blue-100 mb-8">Full-Stack Developer | DevOps | Machine Learning Enthusiast</p>
              <div className="flex justify-center space-x-6 mb-8">
                <a href="mailto:thanujadha20@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                  📧 thanujadha20@gmail.com
                </a>
                <span className="text-blue-100">📍 Kandy, Sri Lanka</span>
                <span className="text-blue-100">📱 (+94) 750561541</span>
              </div>
              <div className="flex justify-center space-x-4">
                <a href="#" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  View My Work
                </a>
                <a href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed">
              <p className="mb-6">
                Software Engineer with expertise in full-stack development, leveraging React, Node.js, and MongoDB to deliver intuitive, high-performance applications. Proven track record enhancing user experiences, streamlining workflows, and providing impactful solutions across industries.
              </p>
              <p>
                Currently pursuing BSc (Hons) in Information Technology specialized in Software Engineering at Sri Lanka Institute of Information Technology (SLIIT), with hands-on experience as an Associate Software Engineer at Avenir IT.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
            <div className="space-y-8">
              {/* Current Role */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Associate Software Engineer</h3>
                    <p className="text-blue-600 font-medium">Avenir IT</p>
                  </div>
                  <span className="text-gray-500 text-sm">Feb 2024 - Present</span>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Transformed healthcare management system by spearheading creation of advanced dental treatment module</li>
                  <li>• Developed interactive digital tooth chart enabling dental practitioners to mark diagnoses and treatments</li>
                  <li>• Implemented scalable SVG-based treatment notations, improving rendering efficiency over traditional PNGs</li>
                  <li>• Built responsive interfaces using React, Redux, and SASS with Node.js, TypeScript, and MongoDB backend</li>
                </ul>
              </div>

              {/* Previous Role */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Software Engineer Intern</h3>
                    <p className="text-blue-600 font-medium">Avenir IT</p>
                  </div>
                  <span className="text-gray-500 text-sm">July 2023 - January 2024</span>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Developed robust Examination System with React frontend, Node.js/Express backend, and SQL Workbench</li>
                  <li>• Led design and development of Agricultural App using TypeScript and React for local farmers</li>
                  <li>• Engineered seamless frontend-backend integration while optimizing database management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend</h3>
                <div className="space-y-2">
                  {['React.js', 'React Native', 'Redux', 'TypeScript', 'JavaScript', 'SASS', 'Tailwind CSS'].map((skill) => (
                    <span key={skill} className="block text-gray-600 text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend</h3>
                <div className="space-y-2">
                  {['Node.js', 'Express.js', 'Flask', 'Python', 'C#', 'RESTful APIs', 'MongoDB', 'SQL'].map((skill) => (
                    <span key={skill} className="block text-gray-600 text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">DevOps & Cloud</h3>
                <div className="space-y-2">
                  {['Docker', 'Kubernetes', 'GCP', 'CI/CD', 'Cloud Run', 'GitHub', 'DevSecOps'].map((skill) => (
                    <span key={skill} className="block text-gray-600 text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Machine Learning</h3>
                <div className="space-y-2">
                  {['Random Forest', 'XGBoost', 'LSTM', 'ARIMA', 'SARIMA', 'CNNs', 'Python'].map((skill) => (
                    <span key={skill} className="block text-gray-600 text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm max-w-4xl mx-auto">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">BSc (Hons) in Information Technology</h3>
                  <p className="text-blue-600 font-medium">Specialized in Software Engineering</p>
                  <p className="text-gray-600">Sri Lanka Institute of Information Technology (SLIIT)</p>
                </div>
                <span className="text-gray-500 text-sm">July 2021 - July 2025</span>
              </div>
              <p className="text-gray-600">
                <strong>Relevant Coursework:</strong> Object Oriented Programming, Enterprise Applications Development, 
                Software Engineering Process & Quality Management, Application Frameworks, Software Architecture, 
                Mobile Application Development, Databases, Data Structures and Algorithms, Machine Learning, 
                Image Processing, Distributed Systems
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl text-blue-100 mb-8">
              I'm always interested in new opportunities and challenging projects.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="/projects" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View My Projects
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}