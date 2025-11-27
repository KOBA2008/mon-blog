import React, { useState } from 'react';
import { BookOpen, Cpu, Bot, Github, Linkedin, Mail, Menu, X, ChevronRight } from 'lucide-react';

export default function KobaBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Introduction au Machine Learning",
      excerpt: "Découvrez les fondamentaux du ML et comment commencer votre voyage dans l'IA.",
      date: "15 Nov 2024",
      category: "IA",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Robotique et Vision par Ordinateur",
      excerpt: "Comment les robots voient et interprètent le monde qui les entoure.",
      date: "08 Nov 2024",
      category: "Robotique",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Python pour la Data Science",
      excerpt: "Les bibliothèques essentielles pour analyser et visualiser vos données.",
      date: "01 Nov 2024",
      category: "Data Science",
      readTime: "6 min"
    }
  ];

  const skills = [
    { name: "Python", level: 90 },
    { name: "Machine Learning", level: 85 },
    { name: "Data Analysis", level: 88 },
    { name: "TensorFlow", level: 75 },
    { name: "Robotics", level: 70 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">KD</span>
              </div>
              <span className="text-white font-bold text-xl">KOBA David</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-gray-300 hover:text-purple-400 transition">Accueil</a>
              <a href="#blog" className="text-gray-300 hover:text-purple-400 transition">Blog</a>
              <a href="#apropos" className="text-gray-300 hover:text-purple-400 transition">À propos</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#accueil" className="block text-gray-300 hover:text-purple-400 py-2">Accueil</a>
              <a href="#blog" className="block text-gray-300 hover:text-purple-400 py-2">Blog</a>
              <a href="#apropos" className="block text-gray-300 hover:text-purple-400 py-2">À propos</a>
              <a href="#contact" className="block text-gray-300 hover:text-purple-400 py-2">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-5xl">KD</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              KOBA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">David</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Étudiant en Data Science
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Cpu className="text-purple-400" size={20} />
                <span>Intelligence Artificielle</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Bot className="text-pink-400" size={20} />
                <span>Robotique</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <BookOpen className="text-blue-400" size={20} />
                <span>Data Science</span>
              </div>
            </div>

            <div className="flex justify-center space-x-4 pt-6">
              <a href="#contact" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition transform">
                Me Contacter
              </a>
              <a href="#blog" className="border-2 border-purple-500 text-purple-300 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/10 transition">
                Voir le Blog
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Articles <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Récents</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition border border-purple-500/20 hover:border-purple-500/40">
                <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <Cpu size={64} className="text-white/30" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-purple-400 text-sm font-semibold">{post.category}</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <button className="text-purple-400 hover:text-purple-300 flex items-center space-x-1">
                      <span>Lire</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            À <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Propos</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Mon Parcours</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Étudiant passionné en Data Science, je me spécialise dans l'intelligence artificielle et la robotique. 
                  Mon objectif est de créer des solutions innovantes qui combinent l'apprentissage automatique et les systèmes autonomes.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  À travers ce blog, je partage mes découvertes, mes projets et mes réflexions sur l'évolution de la technologie.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Compétences</h3>
                <div className="space-y-4">
                  {skills.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Restons en <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Contact</span>
          </h2>
          <p className="text-gray-300 mb-12 text-lg">
            Intéressé par une collaboration ou simplement pour discuter de technologie ?
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:koba.david@example.com" className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm px-6 py-4 rounded-xl hover:bg-slate-800 transition border border-purple-500/20 hover:border-purple-500/40">
              <Mail className="text-purple-400" size={24} />
              <span className="text-white">Email</span>
            </a>
            <a href="#" className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm px-6 py-4 rounded-xl hover:bg-slate-800 transition border border-purple-500/20 hover:border-purple-500/40">
              <Github className="text-purple-400" size={24} />
              <span className="text-white">GitHub</span>
            </a>
            <a href="#" className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm px-6 py-4 rounded-xl hover:bg-slate-800 transition border border-purple-500/20 hover:border-purple-500/40">
              <Linkedin className="text-purple-400" size={24} />
              <span className="text-white">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2024 KOBA David. Tous droits réservés.</p>
          <p className="mt-2 text-sm">Créé avec passion pour l'IA et la Robotique 🤖</p>
        </div>
      </footer>
    </div>
  );
}
