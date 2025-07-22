import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ExternalLink, Github, Linkedin, Download, ChevronDown, Code, Database, Brain, Globe, Award, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/MiscUI";
import { Input, Textarea } from "@/components/ui/FormElements";
import { Badge } from "@/components/ui/Feedback";

// Bubble type for BubbleSprinkles
export type Bubble = {
  id: string;
  left: number;
  top: number;
  size: number;
  color: string;
};


const THEME_KEY = 'portfolio-theme';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(
    typeof window !== 'undefined' && window.localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark'
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    }
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "COVID-19 Regression Analysis",
      description: "Comprehensive regression analysis on COVID-19 dataset using Python, Pandas, and scikit-learn to predict trends and patterns.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=500&h=300&fit=crop",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      link: "https://colab.research.google.com/github/Hari-1718/FMML_Project_and_Labs/blob/main/Regression_Project_6.ipynb"
    },
    {
      title: "Breast Cancer Prediction with MLP [IIIT-H]",
      description: "Developed an MLP classifier on 569-sample dataset, achieving 98.36% accuracy in predicting breast cancer diagnoses. Optimized model with GridSearchCV, attaining 97.39% F1 score via 5-fold cross-validation.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      technologies: ["Python", "MLP", "GridSearchCV", "Cross-validation"],
      link: "https://colab.research.google.com/github/Hari-1718/FMML_Project_and_Labs/blob/main/FMML_Aug'23_Module%209(a)%20_Project_Breast_Cancer_Prediction_with_MLP.ipynb"
    },
    {
      title: "Movie Recommendation Engine [IIIT-H]",
      description: "Engineered a recommendation system using K-Means on 100,000+ ratings, achieving a silhouette score of 0.667 with 9 clusters. Trained a collaborative filtering model with FastAI, attaining an RMSE of 0.879.",
      image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=500&h=300&fit=crop",
      technologies: ["K-Means", "FastAI", "Collaborative Filtering", "Python"],
      link: "https://colab.research.google.com/github/Hari-1718/FMML_Project_and_Labs/blob/main/Module_7_Project.ipynb"
    }
  ];

  const skills = [
    { name: "Python", level: 90, icon: Code },
    { name: "Machine Learning", level: 85, icon: Brain },
    { name: "Web Development", level: 80, icon: Globe },
    { name: "Generative AI & Prompt Engineering", level:25, icon: Brain }
  ];

  const certifications = [
    {
      title: "Artificial Intelligence and Data Analytics",
      issuer: "Edunet Foundation, AICTE, Shell India",
      date: "2024",
      description: "Comprehensive certification covering AI fundamentals, machine learning algorithms, and data analytics techniques."
    },
    {
      title: "AI Intern – TechSaksham Program",
      issuer: "Edunet Foundation (Microsoft & SAP CSR)",
      date: "Dec 2024 - Jan 2025 · 2 mos (Remote)",
      // logo removed as per user request
      details: [
        "Completed an AI-focused internship under the TechSaksham initiative, a CSR program by Microsoft and SAP implemented by Edunet Foundation.",
        "Gained hands-on experience in AI/ML fundamentals, data preprocessing, and model building",
        "Developed practical applications using Python and real-world datasets",
        "Participated in expert sessions, assignments, and collaborative learning"
      ],
      studentId: "STU66583fdd3b8621717059549",
      certificateId: "TSPIN24_590120",
      // skills removed as per user request
    }
  ];

  return (
    <>
      <div className={
        `min-h-screen relative overflow-hidden transition-colors duration-500 ` +
        (theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-gray-100'
          : 'bg-gradient-to-br from-white via-blue-50 to-gray-100 text-gray-900')
      }>
      {/* Bubble Sprinkles Animation */}
      <BubbleSprinkles />
      {/* Navigation */}
      <nav className={
        `fixed top-0 w-full backdrop-blur-md z-50 border-b transition-colors duration-500 ` +
        (theme === 'dark'
          ? 'bg-gray-900/90 border-gray-800'
          : 'bg-white/90 border-blue-200')
      }>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-teal-500 to-violet-500 bg-clip-text text-transparent">
              Hari Prasad Chinimilli
            </h1>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                className={
                  'rounded-full p-1 border focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ' +
                  (theme === 'dark'
                    ? 'bg-white border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400'
                    : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400')
                }
                tabIndex={0}
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.05l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                  </svg>
                )}
                <span className="sr-only">{theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}</span>
              </button>
              <div className="hidden md:flex space-x-6">
                <button onClick={() => scrollToSection('about')} className="px-5 py-2 rounded hover:bg-teal-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-200 group" aria-label="About">About</button>
                <button onClick={() => scrollToSection('projects')} className="px-5 py-2 rounded hover:bg-violet-100 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-200 group" aria-label="Projects">Projects</button>
                <button onClick={() => scrollToSection('skills')} className="px-5 py-2 rounded hover:bg-indigo-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-200 group" aria-label="Skills">Skills</button>
                <button onClick={() => scrollToSection('certifications')} className="px-5 py-2 rounded hover:bg-orange-100 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-200 group" aria-label="Certifications">Certifications</button>
                <button onClick={() => scrollToSection('contact')} className="px-5 py-2 rounded hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 group" aria-label="Contact">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className={
              `w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 shadow-lg ` +
              (theme === 'dark'
                ? 'bg-gradient-to-r from-gray-700 to-gray-900 border-teal-400'
                : 'bg-gradient-to-r from-blue-200 to-blue-100 border-blue-400')
            }>
              <img 
                src="/name/d563a44e-61e0-415a-b6b2-d64cd0547de0.png" 
                alt="Hari Prasad Chinimilli" 
                className="w-full h-full rounded-full object-cover border-none"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = '/placeholder.svg';
                }}
              />
            </div>
            <h1 className={
              `text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent ` +
              (theme === 'dark'
                ? 'bg-gradient-to-r from-teal-300 via-violet-400 to-indigo-300'
                : 'bg-gradient-to-r from-blue-700 via-violet-500 to-indigo-600')
            }>
              Hari Prasad Chinimilli
            </h1>
            <p className={theme === 'dark' ? 'text-xl md:text-2xl text-teal-300 mb-6 leading-relaxed' : 'text-xl md:text-2xl text-blue-700 mb-6 leading-relaxed'}>
              Aspiring Data Scientist and AI Enthusiast with a passion for building innovative solutions
            </p>
            <p className={theme === 'dark' ? 'text-lg text-indigo-300 mb-8 max-w-2xl mx-auto' : 'text-lg text-indigo-700 mb-8 max-w-2xl mx-auto'}>
              Final Year Computer Science & Data Science Student at KIET, specializing in AI, ML, and cutting-edge web technologies
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={() => scrollToSection('projects')} 
              className="px-8 py-3 rounded bg-teal-800 hover:bg-teal-700 text-teal-100 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-600 font-semibold text-lg tracking-wide group relative overflow-hidden transform transition-transform duration-200 hover:scale-110 active:scale-100"
            >
              <span className="inline-flex items-center gap-2 z-10 relative">
                🚀 View My Work
              </span>
              <span className="absolute inset-0 pointer-events-none group-hover:animate-blink bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></span>
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 rounded bg-violet-800 hover:bg-violet-700 text-violet-100 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 font-semibold text-lg tracking-wide group relative overflow-hidden transform transition-transform duration-200 hover:scale-110 active:scale-100"
            >
              <span className="inline-flex items-center gap-2 z-10 relative">
                💬 Get In Touch
              </span>
              <span className="absolute inset-0 pointer-events-none group-hover:animate-blink bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></span>
            </Button>
            <a
              href="/Duplicate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded border border-orange-700 text-orange-200 hover:bg-orange-900 hover:text-orange-100 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-orange-700 font-semibold text-lg tracking-wide group relative overflow-hidden transform transition-transform duration-200 hover:scale-110 active:scale-100"
              style={{ textDecoration: 'none' }}
              aria-label="Download Resume PDF"
            >
              <Download className="w-5 h-5 mr-2 z-10 relative" />
              <span className="z-10 relative">My Resume</span>
              <span className="absolute inset-0 pointer-events-none group-hover:animate-blink bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></span>
            </a>
            <style>
              {`
                html, body, .cursor-bubble {
                  background: ${theme === 'dark' ? '#18181b' : '#f8fafc'};
                  color: ${theme === 'dark' ? '#f3f4f6' : '#22223b'};
                  cursor: url('data:image/svg+xml;utf8,<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="16" height="16" rx="6" fill="%23a78bfa" fill-opacity="0.5"/></svg>'), auto;
                }
                @keyframes blink {
                  0%, 100% { opacity: 0; }
                  50% { opacity: 1; }
                }
                .animate-blink {
                  animation: blink 0.5s;
                }
                .bubble-sprinkle {
                  position: absolute;
                  border-radius: 9999px;
                  pointer-events: none;
                  opacity: 0.7;
                  z-index: 50;
                  animation: bubble-move 1.2s linear forwards;
                }
                @keyframes bubble-move {
                  0% { transform: scale(0.7) translateY(0); opacity: 0.7; }
                  60% { opacity: 1; }
                  100% { transform: scale(1.2) translateY(-80px); opacity: 0; }
                }
                .animate-blink {
                  animation: blink 0.5s;
                }
                .group:hover .animate-blink, .group:focus .animate-blink {
                  animation: blink 0.5s;
                }
              `}
            </style>

          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/haripch/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile of Hari Prasad Chinimilli"
              className="text-blue-400 hover:text-blue-600 transition-colors transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-full"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/Hari-1718"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile of Hari Prasad Chinimilli"
              className="text-blue-400 hover:text-blue-600 transition-colors transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-full"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="mailto:hariprasadchinimilli18@gmail.com"
              aria-label="Send email to Hari Prasad Chinimilli"
              className="text-blue-400 hover:text-blue-600 transition-colors transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded-full"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-blue-300" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={theme === 'dark' ? 'py-20 px-4 bg-gray-900/80' : 'py-20 px-4 bg-white/80'}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-blue-700 leading-relaxed mb-6">
                I'm a passionate Computer Science and Data Science student at Kakinada Institute of Engineering & Technology (KIET), 
                currently in my final year. My journey in technology is driven by curiosity and a desire to solve real-world problems 
                through innovative AI and ML solutions.
              </p>
              <p className="text-lg text-blue-700 leading-relaxed mb-6">
                With expertise in Python, machine learning algorithms, and modern web development frameworks, I focus on building 
                scalable applications that bridge the gap between complex data science concepts and user-friendly interfaces.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-600 border-blue-200">AI/ML</Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-600 border-purple-200">Data Science</Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-600 border-green-200">Web Development</Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-600 border-orange-200">Python</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-blue-100/80 to-purple-100/80 rounded-lg flex items-center justify-center">
                <Code className="w-24 h-24 text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={theme === 'dark' ? 'py-20 px-4 bg-gray-800/60' : 'py-20 px-4 bg-blue-50/60'}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-white/80 border-blue-100 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <skill.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">{skill.name}</h3>
                  <div className="w-full bg-blue-100 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-blue-300 to-purple-200 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-blue-400">{skill.level}%</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={theme === 'dark' ? 'py-20 px-4 bg-gray-900/80' : 'py-20 px-4 bg-white/80'}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-blue-50/60 border-blue-100 hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-100/80 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-700">{project.title}</h3>
                  <p className="text-blue-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-600 border-blue-200 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <Button variant="outline" size="sm" className="border-blue-300 text-blue-500 hover:bg-blue-200 hover:text-blue-800 w-full flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Colab Project
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={theme === 'dark' ? 'py-20 px-4 bg-gray-800/60' : 'py-20 px-4 bg-blue-50/60'}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <CertificationsSlider certifications={certifications} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={theme === 'dark' ? 'py-20 px-4 bg-gray-900/80' : 'py-20 px-4 bg-white/80'}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-700">Get In Touch</h3>
              <p className="text-blue-600 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborations, or innovative projects. 
                Whether you're looking for a data scientist, AI enthusiast, or web developer, let's connect!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a
                    href="mailto:hariprasadchinimilli18@gmail.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
                    aria-label="Send email to Hari Prasad Chinimilli"
                  >
                    hariprasadchinimilli18@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a
                    href="tel:9346416669"
                    className="text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
                    aria-label="Call Hari Prasad Chinimilli"
                  >
                    9346416669
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <a
                    href="https://www.linkedin.com/in/haripch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
                    aria-label="LinkedIn profile of Hari Prasad Chinimilli"
                  >
                    linkedin.com/in/haripch
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-blue-400" />
                  <a
                    href="https://github.com/Hari-1718"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200 rounded"
                    aria-label="GitHub profile of Hari Prasad Chinimilli"
                  >
                    github.com/Hari-1718
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-600">Kakinada, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>
            <Card className="bg-white/80 border-blue-100">
              <CardContent className="p-6">
                <form className="space-y-4" method="POST" action="https://formsubmit.co/hariprasadchinimilli18@gmail.com" target="_blank">
                  <div>
                    <Input 
                      name="name"
                      placeholder="Your Name" 
                      className="bg-blue-50 border-blue-200 text-blue-700 placeholder:text-blue-300"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      name="email"
                      placeholder="Your Email" 
                      className="bg-blue-50 border-blue-200 text-blue-700 placeholder:text-blue-300"
                      required
                    />
                  </div>
                  <div>
                    <Input 
                      name="subject"
                      placeholder="Subject" 
                      className="bg-blue-50 border-blue-200 text-blue-700 placeholder:text-blue-300"
                      required
                    />
                  </div>
                  <div>
                    <Textarea 
                      name="message"
                      placeholder="Your Message" 
                      rows={4}
                      className="bg-blue-50 border-blue-200 text-blue-700 placeholder:text-blue-300"
                      required
                    />
                  </div>
                  <input type="hidden" name="_captcha" value="false" />
                  <Button type="submit" className="w-full bg-blue-100 hover:bg-blue-200 text-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer intentionally left blank as per user request */}
      </div>
    </>
  );
};

// BubbleSprinkles component for animated bubbles
function BubbleSprinkles() {
  const [bubbles, setBubbles] = React.useState([]);
  React.useEffect(() => {
    function handleMove(e) {
      // New color palette: vibrant and modern
      const colors = [
        'bg-fuchsia-300', // vibrant pink
        'bg-cyan-300',    // bright cyan
        'bg-lime-300',    // neon green
        'bg-amber-300',   // gold/yellow
        'bg-violet-300',  // soft violet
        'bg-rose-300',    // rose pink
        'bg-indigo-300',  // indigo
        'bg-emerald-300', // emerald green
        'bg-orange-300'   // orange
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 18 + 12;
      const left = e.clientX;
      const top = e.clientY;
      const id = Math.random().toString(36).substr(2, 9);
      setBubbles(prev => [...prev, { id, left, top, size, color }]);
    }
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  React.useEffect(() => {
    if (bubbles.length > 0) {
      const timeout = setTimeout(() => {
        setBubbles(prev => prev.slice(1));
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [bubbles]);
  return (
    <>
      {bubbles.map(b => (
        <span
          key={b.id}
          className={`bubble-sprinkle ${b.color}`}
          style={{ left: b.left, top: b.top, width: b.size, height: b.size }}
        />
      ))}
    </>
  );
}

// CertificationsSlider component for side-to-side slideshow
function CertificationsSlider(props) {
  const certifications = props.certifications;
  const [current, setCurrent] = React.useState(0);
  const total = certifications.length;

  function goToPrev() {
    setCurrent(function(prev) {
      return prev === 0 ? total - 1 : prev - 1;
    });
  }
  function goToNext() {
    setCurrent(function(prev) {
      return prev === total - 1 ? 0 : prev + 1;
    });
  }

  // Animation for horizontal scroll bar using Framer Motion
  return (
    <div className="relative max-w-5xl mx-auto flex flex-col items-center">
      <div className="w-full overflow-x-auto">
        <motion.div
          className="flex gap-6 min-w-full"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 18 }}
        >
          {certifications.map(function(cert, idx) {
            return (
              <motion.div
                key={idx}
                className="w-full min-w-[340px] max-w-md flex-shrink-0 px-2"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.15, type: 'spring', stiffness: 120, damping: 16 }}
              >
                <Card className="bg-white/80 border-blue-100 hover:bg-blue-100 transition-all duration-300 h-full flex flex-col justify-between">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Award className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-blue-700">{cert.title}</h3>
                        <p className="text-blue-400 font-medium mb-2">{cert.issuer}</p>
                        <p className="text-blue-300 text-sm mb-3">{cert.date}</p>
                        {/* Logo image removed for Edunet Foundation certificate as requested */}
                      </div>
                    </div>
                    {cert.details ? (
                      <ul className="list-disc pl-5 mb-3 text-blue-600 text-sm">
                        {cert.details.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-blue-600 leading-relaxed mb-3">{cert.description}</div>
                    )}
                    {cert.studentId && (
                      <div className="mb-1 text-xs text-blue-400"><b>AICTE Student ID:</b> {cert.studentId}</div>
                    )}
                    {cert.certificateId && (
                      <div className="mb-1 text-xs text-blue-400"><b>Certificate ID:</b> {cert.certificateId}</div>
                    )}
                    {/* Skills line removed for Edunet Foundation certificate as requested */}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Index;
