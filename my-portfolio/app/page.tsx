import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';

export default function Home() {
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
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Text */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-purple-400"></div>
                    <span className="text-orange-300 font-light text-sm uppercase tracking-wider">Software Engineer</span>
                  </div>
                  
                  <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                    Thanuja
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
                      Wickramasinghe
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 max-w-md leading-relaxed">
                    Full-Stack Developer | DevOps Engineer | Machine Learning Enthusiast
                  </p>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">Available for work</span>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">Based in Kandy, SL</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/projects" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                    View My Work
                  </a>
                  <a href="/contact" className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-medium hover:bg-purple-400 hover:text-white transition-all duration-300">
                    Get In Touch
                  </a>
                </div>
              </div>

              {/* Right Side - Photo and Skills Grid */}
              <div className="space-y-8">
                {/* Photo Section */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-400 to-purple-400 bg-gradient-to-r from-orange-400 to-purple-400 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                        <img src="/thanuja-photo1.jpg" alt="Thanuja Wickramasinghe" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-orange-400/30 transition-all duration-300">
                      <div className="text-3xl mb-3">🎨</div>
                      <h3 className="text-lg font-semibold mb-2">Frontend</h3>
                      <p className="text-sm text-gray-300">React, TypeScript, Next.js</p>
                    </div>
                    
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                      <div className="text-3xl mb-3">⚙️</div>
                      <h3 className="text-lg font-semibold mb-2">Backend</h3>
                      <p className="text-sm text-gray-300">Node.js, Python, MongoDB</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6 mt-12">
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-orange-400/30 transition-all duration-300">
                      <div className="text-3xl mb-3">☁️</div>
                      <h3 className="text-lg font-semibold mb-2">DevOps</h3>
                      <p className="text-sm text-gray-300">Docker, Kubernetes, GCP</p>
                    </div>
                    
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                      <div className="text-3xl mb-3">🤖</div>
                      <h3 className="text-lg font-semibold mb-2">ML/AI</h3>
                      <p className="text-sm text-gray-300">TensorFlow, PyTorch, CNNs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-5xl font-bold text-white">
                    About
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
                      Me
                    </span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-400"></div>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Software Engineer with expertise in full-stack development, leveraging React, Node.js, and MongoDB to deliver intuitive, high-performance applications. Currently pursuing BSc (Hons) in Information Technology specialized in Software Engineering at SLIIT.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <div className="text-3xl font-bold text-orange-400 mb-2">2+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                </div>
              </div>
              
              {/* Right - Experience */}
              <div className="space-y-6">
                <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-orange-400/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Associate Software Engineer</h3>
                      <p className="text-orange-300 font-medium">Avenir IT</p>
                    </div>
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">
                      Present
                    </span>
                  </div>
                  <p className="text-gray-300">Healthcare management systems, dental treatment modules, interactive charts</p>
                </div>
                
                <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-purple-400/30 transition-all duration-300 ml-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Software Engineer Intern</h3>
                      <p className="text-purple-300 font-medium">Avenir IT</p>
                    </div>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      2023-2024
                    </span>
                  </div>
                  <p className="text-gray-300">Examination systems, agricultural apps, full-stack development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
                  Technical
                </span>
                <span className="text-white"> Skills</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-400 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Frontend */}
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-orange-400/30 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-bold mb-4">Frontend</h3>
                  <div className="space-y-2">
                    {['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS'].map((skill) => (
                      <div key={skill} className="text-gray-300 text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Backend */}
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚙️</div>
                  <h3 className="text-xl font-bold mb-4">Backend</h3>
                  <div className="space-y-2">
                    {['Node.js', 'Python', 'MongoDB', 'Express.js'].map((skill) => (
                      <div key={skill} className="text-gray-300 text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* DevOps */}
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-orange-400/30 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">☁️</div>
                  <h3 className="text-xl font-bold mb-4">DevOps</h3>
                  <div className="space-y-2">
                    {['Docker', 'Kubernetes', 'GCP', 'CI/CD'].map((skill) => (
                      <div key={skill} className="text-gray-300 text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* ML/AI */}
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-purple-400/30 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-bold mb-4">ML/AI</h3>
                  <div className="space-y-2">
                    {['TensorFlow', 'PyTorch', 'CNNs', 'LSTM'].map((skill) => (
                      <div key={skill} className="text-gray-300 text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-24 bg-white/5">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Education */}
              <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">BSc (Hons) Information Technology</h3>
                      <p className="text-orange-300 font-medium text-lg">Software Engineering Specialization</p>
                      <p className="text-gray-300">Sri Lanka Institute of Information Technology (SLIIT)</p>
                    </div>
                    <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                      2021-2025
                    </span>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h4 className="font-semibold text-white mb-4">Key Coursework</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                      {['Object Oriented Programming', 'Software Architecture', 'Machine Learning', 'Mobile Development', 'Databases', 'Distributed Systems'].map((course) => (
                        <div key={course} className="flex items-center space-x-2">
                          <span className="text-orange-400">▸</span>
                          <span>{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right - Visual Elements */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <div className="text-3xl mb-2">🎓</div>
                    <h4 className="font-bold text-white">Academic Excellence</h4>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <div className="text-3xl mb-2">💻</div>
                    <h4 className="font-bold text-white">Practical Skills</h4>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <div className="text-3xl mb-2">🚀</div>
                    <h4 className="font-bold text-white">Innovation Focus</h4>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <div className="text-3xl mb-2">🌟</div>
                    <h4 className="font-bold text-white">Leadership</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="bg-white/5 p-16 rounded-lg border border-white/10">
              <h2 className="text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-400">
                  Ready to
                </span>
                <span className="text-white"> Collaborate?</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together. I'm always excited about new challenges and innovative projects.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="/projects" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                  Explore My Work
                </a>
                <a href="/contact" className="border border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}