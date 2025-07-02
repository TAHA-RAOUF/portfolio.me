import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronDown,
  Server,
  Smartphone,
  Palette,
  Star,
  ArrowRight,
  Menu,
  X,
  Zap,
  Cpu,
  Layers,
  Terminal,
  Rocket,
  Eye
} from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import FloatingCard from './components/FloatingCard';
import GlitchText from './components/GlitchText';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'React Ecosystem', level: 95, icon: Code, color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js & APIs', level: 90, icon: Server, color: 'from-green-400 to-emerald-500' },
    { name: 'PHP & laravel', level: 88, icon: Terminal, color: 'from-blue-400 to-indigo-500' },
    { name: 'Database Design', level: 85, icon: Database, color: 'from-purple-400 to-pink-500' },
    { name: 'Cloud & DevOps', level: 80, icon: Globe, color: 'from-orange-400 to-red-500' },
    { name: 'UI/UX Innovation', level: 75, icon: Palette, color: 'from-pink-400 to-rose-500' }
  ];

  const projects = [
    {
      title: 'Neural Commerce',
      description: 'AI-powered e-commerce platform with predictive analytics and personalized shopping experiences',
      tech: ['React', 'TensorFlow.js', 'Node.js', 'GraphQL'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#',
      featured: true
    },
    {
      title: 'Quantum Task Manager',
      description: 'Revolutionary task management with quantum-inspired algorithms for optimal productivity',
      tech: ['Next.js', 'WebAssembly', 'Rust', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#',
      featured: false
    },
    {
      title: 'Holographic Analytics',
      description: '3D data visualization platform with immersive analytics and real-time insights',
      tech: ['Three.js', 'WebGL', 'D3.js', 'WebRTC'],
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#',
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Custom cursor effect */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${Math.sin(Date.now() * 0.005) * 0.3 + 1})`
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/10 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              <GlitchText text="<DEV/>" className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-6 py-3 rounded-full transition-all duration-300 relative overflow-hidden group ${
                    activeSection === item.toLowerCase()
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-400/30'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 relative z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-white/10 backdrop-blur-xl">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 max-w-6xl mx-auto px-6">
          <FloatingCard delay={0}>
            <div className="mb-8">
              <div className="w-40 h-40 mx-auto mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                  <Cpu size={60} className="text-cyan-400 animate-pulse" />
                </div>
              </div>
            </div>
          </FloatingCard>
          
          <FloatingCard delay={0.2}>
            <h1 className="text-6xl md:text-8xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Med Taha
              </span>
              <br />
              <GlitchText 
                text="Raouf" 
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              />
            </h1>
          </FloatingCard>
          
          <FloatingCard delay={0.4}>
            <div className="text-2xl md:text-4xl text-cyan-300 mb-8 font-mono">
              <span className="text-purple-400">&gt;</span> Full-Stack 
              <span className="text-pink-400 animate-pulse"> Architect</span>
              <span className="animate-pulse">_</span>
            </div>
          </FloatingCard>
          
          <FloatingCard delay={0.6}>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Crafting <span className="text-cyan-400 font-semibold">impossible</span> digital experiences with 
              <span className="text-purple-400 font-semibold"> quantum-level</span> precision and 
              <span className="text-pink-400 font-semibold"> neural</span> innovation
            </p>
          </FloatingCard>
          
          <FloatingCard delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3 relative overflow-hidden"
              >
                <span className="relative z-10">Explore Universe</span>
                <Rocket size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-cyan-400 rounded-full font-bold transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:scale-110 hover:shadow-xl hover:shadow-cyan-400/25"
              >
                Initialize Contact
              </button>
            </div>
          </FloatingCard>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <FloatingCard>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black mb-6">
                <GlitchText 
                  text="NEURAL PROFILE" 
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                />
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
          </FloatingCard>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FloatingCard delay={0.2}>
              <div className="space-y-8">
                <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20 backdrop-blur-sm">
                  <p className="text-lg text-gray-300 leading-relaxed mb-4">
                    I'm not just a developer—I'm a <span className="text-cyan-400 font-semibold">digital architect</span> who 
                    builds the impossible. With 5+ years of experience pushing the boundaries of web technology, 
                    I create applications that feel like magic.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My code doesn't just work—it <span className="text-purple-400 font-semibold">evolves</span>, 
                    <span className="text-pink-400 font-semibold"> adapts</span>, and 
                    <span className="text-cyan-400 font-semibold"> transcends</span> expectations.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-xl border border-cyan-400/30">
                    <Zap className="text-cyan-400 mb-2" size={24} />
                    <div className="text-2xl font-bold text-white">20+</div>
                    <div className="text-sm text-gray-400">Quantum Projects</div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-500/20 to-transparent rounded-xl border border-purple-400/30">
                    <Star className="text-purple-400 mb-2" size={24} />
                    <div className="text-2xl font-bold text-white">99.9%</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                </div>
              </div>
            </FloatingCard>
            
            <FloatingCard delay={0.4}>
              <div className="relative">
                <div className="w-96 h-96 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl animate-pulse"></div>
                  <div className="absolute inset-2 bg-black rounded-3xl overflow-hidden">
                    <img
                      src="https://avatars.githubusercontent.com/u/117108863?v=4"
                      alt="Neural Profile"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <FloatingCard>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black mb-6">
                <GlitchText 
                  text="TECH ARSENAL" 
                  className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                />
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
            </div>
          </FloatingCard>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <FloatingCard key={skill.name} delay={index * 0.1}>
                <div className="group p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color}`}>
                        <skill.icon size={24} className="text-white" />
                      </div>
                      <span className="text-lg font-bold">{skill.name}</span>
                    </div>
                    <span className="text-2xl font-mono text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <FloatingCard>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black mb-6">
                <GlitchText 
                  text="QUANTUM WORKS" 
                  className="bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent"
                />
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-cyan-500 mx-auto rounded-full"></div>
            </div>
          </FloatingCard>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FloatingCard key={index} delay={index * 0.2}>
                <div className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                        project.featured ? 'h-64' : 'h-48'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      <GlitchText text={project.title} />
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm border border-cyan-400/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-transform"
                      >
                        <Eye size={16} />
                        <span>Experience</span>
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-full text-gray-300 hover:text-white hover:border-white transition-colors"
                      >
                        <Github size={16} />
                        <span>Source</span>
                      </a>
                    </div>
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <FloatingCard>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-black mb-6">
                <GlitchText 
                  text="INITIALIZE CONTACT" 
                  className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent"
                />
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto rounded-full"></div>
              <p className="text-xl text-gray-300 mt-6">
                Ready to build the <span className="text-cyan-400">impossible</span>?
              </p>
            </div>
          </FloatingCard>
          
          <div className="grid lg:grid-cols-2 gap-12">
          <FloatingCard delay={0.2}>
  <div className="space-y-6">
    
    <a
      href="mailto:taharaouf1123@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/20 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer">
        <Mail className="text-cyan-400 mb-3" size={28} />
        <h3 className="font-bold text-xl mb-2">Neural Link</h3>
        <p className="text-gray-300">taharaouf1123@gmail.com</p>
      </div>
    </a>

    <a
      href="https://github.com/TAHA-RAOUF"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-400/20 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer">
        <Github className="text-purple-400 mb-3" size={28} />
        <h3 className="font-bold text-xl mb-2">Code Repository</h3>
        <p className="text-gray-300">github.com/TAHA-RAOUF</p>
      </div>
    </a>

    <a
      href="https://www.linkedin.com/in/taha-raouf-9076b9253/"
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="p-6 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-2xl border border-pink-400/20 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer">
        <Linkedin className="text-pink-400 mb-3" size={28} />
        <h3 className="font-bold text-xl mb-2">Professional Network</h3>
        <p className="text-gray-300">linkedin.com/in/taha-raouf</p>
      </div>
    </a>

  </div>
</FloatingCard>

            
            <FloatingCard delay={0.4}>
              <form className="space-y-6 p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 backdrop-blur-sm">
                <div>
                  <label className="block text-sm font-medium mb-2 text-cyan-400">Identity</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/50 rounded-xl border border-gray-600 focus:border-cyan-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="Your designation"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-purple-400">Communication Channel</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black/50 rounded-xl border border-gray-600 focus:border-purple-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                    placeholder="your@email.quantum"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-pink-400">Mission Brief</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 rounded-xl border border-gray-600 focus:border-pink-400 focus:outline-none transition-colors resize-none text-white placeholder-gray-400"
                    placeholder="Describe your quantum project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl font-bold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden group"
                >
                  <span className="relative z-10">TRANSMIT MESSAGE</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 <GlitchText text="Alex Johnson" className="text-cyan-400" />. 
            Engineered with <span className="text-pink-400">♥</span> and quantum mechanics.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;