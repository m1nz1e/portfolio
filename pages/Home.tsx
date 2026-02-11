
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Enterprise n8n Chatbot',
    description: 'A production-level chatbot architecture using n8n for workflow orchestration and advanced LLM processing.',
    tags: ['AI', 'Automation', 'n8n'],
    imageUrl: 'https://picsum.photos/seed/n8n/800/600'
  },
  {
    id: '2',
    title: 'Data Pipeline Orchestrator',
    description: 'Automated ETL pipelines designed for high-scale data engineering tasks with robust error handling.',
    tags: ['Data Eng', 'Python', 'ETL'],
    imageUrl: 'https://picsum.photos/seed/data/800/600'
  },
  {
    id: '3',
    title: 'AI Sentiment Analyzer',
    description: 'Real-time sentiment analysis engine built with modern LLM frameworks and high-performance React components.',
    tags: ['LLM', 'React', 'NLP'],
    imageUrl: 'https://picsum.photos/seed/nlp/800/600'
  }
];

const Home: React.FC = () => {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
              Welcome to my <span className="text-gradient">Projects</span> Website
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              I'm an AI enthusiast currently studying <span className="font-semibold text-indigo-600">AI Data Engineering</span>. 
              Explore my production-ready chatbots and data solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#about" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-1">
                Explore About
              </a>
              <a href="#contact" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all transform hover:-translate-y-1">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
            <div className="h-1.5 w-20 bg-indigo-600 rounded-full mt-2"></div>
          </div>
          <button className="text-indigo-600 font-semibold hover:underline">View All Projects</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/profile/600/600" 
                  alt="Profile" 
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-indigo-600 rounded-3xl z-0"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About M1nz</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                As an aspiring AI Data Engineer, I focus on the intersection of robust data pipelines and cutting-edge artificial intelligence. 
                My work centers on building scalable architectures that don't just process data, but extract meaningful intelligence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h4 className="font-bold text-indigo-600 mb-1">Expertise</h4>
                  <p className="text-slate-500 text-sm">Data Engineering, AI Integration</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <h4 className="font-bold text-indigo-600 mb-1">Tech Stack</h4>
                  <p className="text-slate-500 text-sm">Python, n8n, SQL, LLMs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-indigo-600 rounded-[3rem] p-12 text-white overflow-hidden relative shadow-2xl shadow-indigo-200">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none transform rotate-12 scale-150">
             <i className="fas fa-paper-plane text-[200px]"></i>
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6">Let's build something epic</h2>
            <p className="text-indigo-100 mb-10 text-lg max-w-xl mx-auto">
              Ready to take your project to the next level? Reach out for collaboration or inquiries about my AI solutions.
            </p>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl max-w-2xl mx-auto">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="bg-white/20 border border-white/30 rounded-lg p-3 placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white" />
                <input type="email" placeholder="Email" className="bg-white/20 border border-white/30 rounded-lg p-3 placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white" />
                <textarea placeholder="Your Message" className="bg-white/20 border border-white/30 rounded-lg p-3 placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white sm:col-span-2 h-32"></textarea>
                <button className="bg-white text-indigo-600 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors sm:col-span-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
