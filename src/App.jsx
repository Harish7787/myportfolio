import React, { useState, useEffect } from 'react';
import myImage from "./assets/myimg.jpg";
import { 
  Sun, Moon, Github, Linkedin, Mail, ExternalLink, 
  Code, User, Send, ChevronRight, 
  Cpu, Globe, Download, CheckCircle2, Box, Layers, 
  Zap, Menu, X, ShieldCheck, Database, Server,
  Lock, Settings, Braces, Binary, Briefcase, GraduationCap,
  Command, Cpu as Processor, Activity, Workflow, Award, Star,
  MapPin, Phone, Heart, ArrowDown, BarChart3, Terminal, Layout, Shield
} from 'lucide-react';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Profile picture fallback URL
  const profilePic = "./src/assets/myimg.jpg";

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "Full Stack Web Developer",
    "Java Spring Boot Developer",
    "Backend Systems Architect",
    "Data Analysis Specialist"
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skillsData = [
    { name: "React.js", category: "FRONTEND", level: 78, color: "bg-cyan-400" },
    { name: "HTML5", category: "FRONTEND", level: 90, color: "bg-orange-500" },
    { name: "CSS3", category: "FRONTEND", level: 85, color: "bg-blue-500" },
    { name: "Bootstrap", category: "FRONTEND", level: 82, color: "bg-purple-600" },
    { name: "Tailwind CSS", category: "FRONTEND", level: 75, color: "bg-cyan-500" },
    { name: "Java", category: "BACKEND", level: 88, color: "bg-orange-400" },
    { name: "Spring Boot", category: "BACKEND", level: 85, color: "bg-green-500" },
    { name: "REST APIs", category: "BACKEND", level: 90, color: "bg-indigo-500" },
    { name: "JWT Auth", category: "BACKEND", level: 83, color: "bg-yellow-600" },
    { name: "ASP.NET", category: "BACKEND", level: 75, color: "bg-blue-600" },
    { name: "Oracle DBMS", category: "DATABASE", level: 87, color: "bg-red-500" },
    { name: "MongoDB", category: "DATABASE", level: 80, color: "bg-green-600" },
    { name: "PostgreSQL", category: "DATABASE", level: 70, color: "bg-blue-400" },
    { name: "Git", category: "TOOLS", level: 85, color: "bg-orange-600" },
    { name: "GitHub", category: "TOOLS", level: 88, color: "bg-slate-500" },
    { name: "Postman", category: "TOOLS", level: 90, color: "bg-orange-400" },
  ];

  const focusAreas = [
    {
      title: "Backend Architecture",
      icon: <Server className="text-blue-600" size={24} />,
      desc: "Specialized in Java Spring Boot, REST APIs, and high-performance system design.",
      tags: ["SPRING BOOT", "MICROSERVICES", "JWT"]
    },
    {
      title: "Web Solutions",
      icon: <Layout className="text-cyan-500" size={24} />,
      desc: "Crafting beautiful, high-impact digital experiences using React.js and Tailwind CSS.",
      tags: ["REACT.JS", "MODERN UI", "UX DESIGN"]
    },
    {
      title: "Data Engineering",
      icon: <Database className="text-purple-600" size={24} />,
      desc: "Designing scalable database schemas and optimizing complex data workflows.",
      tags: ["ORACLE", "MONGODB", "SQL SERVER"]
    },
    {
      title: "Security & Ops",
      icon: <Shield className="text-orange-500" size={24} />,
      desc: "Implementing secure authentication protocols and robust infrastructure protection.",
      tags: ["OAUTH 2.0", "JWT", "SECURITY"]
    }
  ];

  const projects = [
    {
      title: "Gada Electronics",
      desc: "Architected a high-performance multi-vendor marketplace backend with secure session handling.",
      tech: ["React.js", "Spring-Boot", "MongoDB"],
      tag: "Self Development",
      link: "https://gadaelectronics3.vercel.app/GadaIndex.html"
    },
    {
      title: "Smart Location Alarm System",
      desc: "Developed a location-based alert system for mobile devices as a Semester 5 academic project.",
      tech: ["ASP.NET", "C#", "SQL Server"],
      tag: "College Project",
      link: "https://smartlocationalarm.runasp.net/"
    },
    {
      title: "Ticket Booking System",
      desc: "A reservation platform implemented in React and Node.js with PostgreSQL for internship training.",
      tech: ["React", "Node.js", "PostgreSQL"],
      tag: "Internship Project",
      link: "https://gadaelectronics3.vercel.app/Ticket-Booking.html"
    }
  ];

  return (
    <div className={theme === 'dark' ? 'dark' : ''} onMouseMove={handleMouseMove}>
      <div className="min-h-screen bg-slate-50 dark:bg-[#000000] text-slate-900 dark:text-slate-100 transition-colors duration-500 font-sans selection:bg-blue-600/30 text-left">
        
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full z-[120] bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => scrollTo('home')}>
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white shadow-lg">
                <Code size={16} />
              </div>
              <span className="font-bold text-lg dark:text-white group-hover:text-blue-600 transition-colors">Harish<span className="text-blue-600">.</span></span>
            </div>
            
            <div className="hidden md:flex items-center gap-10 text-[12px] font-bold uppercase tracking-widest">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="hover:text-blue-600 transition-colors opacity-80 hover:opacity-100 uppercase font-bold">{item}</button>
              ))}
              <button onClick={toggleTheme} className="p-2 bg-slate-100 dark:bg-white/5 rounded-full transition-transform active:scale-90">
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button onClick={() => scrollTo('contact')} className="px-5 py-2 bg-blue-600 text-white rounded-lg text-[11px] font-black uppercase tracking-widest shadow-md hover:bg-blue-700 transition-all active:scale-95">Hire Me</button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-900 dark:text-white">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        <div className={`fixed inset-x-0 top-0 z-[115] bg-white dark:bg-zinc-950 md:hidden flex flex-col pt-20 px-8 transition-all duration-500 border-b dark:border-white/10 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="flex flex-col gap-4 pb-10">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-left text-xl font-bold uppercase tracking-widest hover:text-blue-600 py-2 border-b dark:border-white/5">{item}</button>
            ))}
          </div>
        </div>

        {/* HERO SECTION: Text Left, Image Right */}
        <section id="home" className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            
            {/* Left: Text Content */}
            <div className="flex-[1.5] space-y-8 text-center md:text-left order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 text-blue-600 mx-auto md:mx-0">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Available for opportunities</span>
              </div>

              <div className="space-y-4">
                <p className="text-xl font-bold text-slate-800 dark:text-slate-200">Hi, I'm</p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight dark:text-white uppercase leading-[1.1]">
                  Harish Solanki
                </h1>
                
                <div className="flex items-center justify-center md:justify-start gap-2 text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 min-h-[40px]">
                  <ChevronRight size={28} className="shrink-0" />
                  <span className="border-r-4 border-blue-600 pr-2 animate-typing">{text}</span>
                </div>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed font-medium mx-auto md:mx-0">
                I build <span className="text-blue-600 dark:text-blue-500">scalable backend systems</span>, secure REST APIs, and modern web applications. My focus is on delivering <span className="text-purple-600 dark:text-purple-400">production-ready solutions</span> with Java and React.js.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 pt-4">
                <button onClick={() => scrollTo('projects')} className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-xl shadow-blue-600/30 hover:-translate-y-1 transition-all flex items-center gap-3">
                  <ArrowDown size={18} /> View Projects
                </button>
                <a href="SolankiHarishJResume.pdf" download className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">
                  <Download size={18} /> Resume
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-6">
                <a href="https://github.com/Harish7787/Gada" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-xl text-slate-500 hover:text-blue-600 transition-all active:scale-90 shadow-sm"><Github size={20}/></a>
                <a href="https://www.linkedin.com/in/harish-solanki-12117b286" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-xl text-slate-500 hover:text-blue-600 transition-all active:scale-90 shadow-sm"><Linkedin size={20}/></a>
                <a href="mailto:hs3417145@gmail.com" className="p-3 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/5 rounded-xl text-slate-500 hover:text-blue-600 transition-all active:scale-90 shadow-sm"><Mail size={20}/></a>
              </div>
            </div>

            {/* Right: Image Container */}
            <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
              <div className="relative group w-full max-w-[320px] lg:max-w-[400px]">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative aspect-[4/5] bg-slate-50 dark:bg-zinc-950 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
                   <img src="myImage" alt="Harish Solanki" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" onError={(e) => { e.target.src = profilePic; }} />
                   <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-[1.5rem] border border-white/20 transform shadow-xl">
                      <div className="flex items-center justify-between">
                         <div className="space-y-0.5 text-left">
                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-600 leading-none">Status</p>
                            <p className="text-sm font-bold uppercase tracking-tighter leading-tight">Dwarka, Gujarat</p>
                         </div>
                         <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shrink-0">
                            <CheckCircle2 size={16} />
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
           {[
             { label: "PROJECTS BUILT", val: "4+" },
             { label: "TECHNOLOGIES", val: "15+" },
             { label: "EXPERIENCE", val: "1+ YR" },
             { label: "ACADEMIC STATUS", val: "BCA" }
           ].map((stat, i) => (
             <div key={i} className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-slate-100 dark:border-white/5 text-center shadow-sm">
                <p className="text-2xl md:text-4xl font-black text-blue-600 mb-1">{stat.val}</p>
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
             </div>
           ))}
        </section>

        {/* Career Details & Achievements */}
        <section id="about" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 border-t border-slate-100 dark:border-white/5">
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter border-l-4 border-blue-600 pl-6 text-left">Professional Details</h2>
            <div className="space-y-8">
               {[
                 { title: "BCA Graduate", desc: "Successfully completed Bachelor of Computer Applications from Dr. Virambhai Rajabhai Godhaniya IT College (2020-2023).", icon: <GraduationCap size={18}/> },
                 { title: "Technical Expertise", desc: "Specialized in Java, C++, and Python for architecting scalable and efficient backend systems.", icon: <Processor size={18}/> },
                 { title: "Database Architecture", icon: <Database size={18}/>, desc: "Proficient in managing data integrity and performance using Oracle DBMS and MongoDB." },
                 { title: "System Design & Optimization", icon: <Settings size={18}/>, desc: "Focusing on building high-availability infrastructures and optimizing application workflows." }
               ].map((detail, idx) => (
                 <div key={idx} className="flex gap-6 group text-left p-5 rounded-2xl hover:bg-white dark:hover:bg-zinc-900 hover:shadow-md transition-all border border-transparent hover:border-blue-600/20">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform">{detail.icon}</div>
                    <div>
                       <h3 className="text-lg font-bold uppercase mb-2 group-hover:text-blue-600 transition-colors">{detail.title}</h3>
                       <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{detail.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="space-y-12 text-left">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-xl relative overflow-hidden">
               <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
               <h4 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-6 uppercase text-left">Key Achievements</h4>
               <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4 text-left">
                     <Award className="text-yellow-500 shrink-0" />
                     <p className="text-sm font-bold uppercase tracking-tight italic opacity-90 leading-tight">College Topper & Top Achiever</p>
                  </div>
                  <div className="flex items-start gap-4 text-left">
                     <Award className="text-yellow-500 shrink-0" />
                     <p className="text-sm font-bold uppercase tracking-tight italic opacity-90 leading-tight">Academic Performance Scholarship Recipient</p>
                  </div>
                  <div className="flex items-start gap-4 border-t border-slate-100 dark:border-white/5 pt-4 text-left">
                     <Star className="text-blue-500 shrink-0" />
                     <p className="text-sm font-bold uppercase tracking-tight italic opacity-90 leading-tight">Recognized as All-Rounder during Schooling</p>
                  </div>
               </div>
            </div>
            <div className="p-8 bg-blue-600 text-white rounded-[2rem] shadow-xl">
               <div className="flex items-center gap-4 mb-4"><MapPin size={20} /><h4 className="font-bold text-lg uppercase tracking-widest">Dwarka, Gujarat</h4></div>
               <p className="text-blue-100 text-sm font-medium uppercase tracking-tight italic">"Dedicated developer ready to contribute to high-performance tech teams."</p>
            </div>
          </div>
        </section>

        {/* Specialized Focus Areas */}
        <section className="py-24 max-w-7xl mx-auto px-6">
           <div className="mb-16 text-center">
             <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-600 mb-4">Core Competencies</h2>
             <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">Specialized Focus Areas</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {focusAreas.map((area, i) => (
                <div key={i} className="p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all group text-left">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-slate-50 dark:bg-black rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                         {area.icon}
                      </div>
                      <h4 className="text-xl font-black uppercase tracking-tight">{area.title}</h4>
                   </div>
                   <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium leading-relaxed italic">"{area.desc}"</p>
                   <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50 dark:border-white/5 text-left">
                      {area.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-slate-400">{tag}</span>
                      ))}
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="py-24 max-w-7xl mx-auto px-6 bg-slate-100 dark:bg-zinc-900/20 rounded-[3rem]">
          <div className="text-center mb-16 space-y-3">
             <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600">Technical Arsenal</h2>
             <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">System Skills</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {skillsData.map((skill, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/5 rounded-xl p-5 shadow-sm hover:-translate-y-1 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h4 className="text-lg font-black uppercase tracking-tighter leading-none group-hover:text-blue-600 transition-colors">{skill.name}</h4>
                    <p className="text-[9px] font-bold text-blue-600 tracking-widest uppercase">{skill.category}</p>
                  </div>
                  <span className="text-xs font-black text-slate-400 group-hover:text-blue-600 transition-colors">{skill.level}%</span>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Proficiency</p>
                  <div className="h-2 w-full bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div className={`h-full ${skill.color} transition-all duration-1000 ease-out`} style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 sm:py-32 max-w-7xl mx-auto px-6 text-left">
          <div className="mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-600 mb-2">Portfolio</h2>
            <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter">Key Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="relative group overflow-hidden bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 hover:border-blue-600 transition-all shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-10">
                    <div className="px-3 sm:px-4 py-1 bg-blue-600/10 text-blue-600 rounded-full text-[9px] font-black uppercase tracking-widest">{proj.tag}</div>
                    <div className="flex gap-4">
                       <a href="https://github.com/Harish7787/Gada" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><Github size={18} /></a>
                       <a href={proj.link} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><ExternalLink size={18} /></a>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tighter uppercase mb-4 group-hover:text-blue-600 transition-colors text-left">{proj.title}</h3>
                  <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-8 text-left">"{proj.desc}"</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50 dark:border-white/5 text-left">
                  {proj.tech.map(t => <span key={t} className="text-[9px] font-black uppercase tracking-widest text-slate-400">#{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
          <div className="relative bg-white dark:bg-zinc-900 p-8 sm:p-20 rounded-[4rem] border border-slate-100 dark:border-white/5 shadow-2xl text-center overflow-hidden">
             <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
             <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 italic text-center dark:text-white uppercase leading-none">Initialize <span className="text-blue-600">Contact</span></h2>
             <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left relative z-10" onSubmit={e => e.preventDefault()}>
               <div className="space-y-2"><label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 uppercase">Full Identity</label><input type="text" placeholder="Your Name" className="w-full p-5 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 rounded-2xl outline-none focus:border-blue-600 font-bold transition-all text-sm shadow-inner" /></div>
               <div className="space-y-2"><label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 uppercase">Email Address</label><input type="email" placeholder="hs3417145@gmail.com" className="w-full p-5 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 rounded-2xl outline-none focus:border-blue-600 font-bold transition-all text-sm shadow-inner" /></div>
               <div className="md:col-span-2 space-y-2 text-left"><label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4 uppercase">Technical Objective</label><textarea rows="4" placeholder="Tell me about your architectural goals..." className="w-full p-5 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 rounded-2xl outline-none focus:border-blue-600 font-bold resize-none transition-all text-sm shadow-inner placeholder:opacity-30" /></div>
               <div className="md:col-span-2 flex justify-center pt-8"><button className="w-full max-w-lg py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] shadow-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-4 group"><span className="relative z-10 flex items-center gap-2 uppercase">Establish Connection <Send size={18} className="group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform" /></span></button></div>
             </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-24 pb-12 border-t border-slate-100 dark:border-white/5 bg-[#FAFAFA] dark:bg-zinc-950 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 text-left">
            <div className="md:col-span-1 space-y-6">
              <div className="flex items-center gap-2"><div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center text-white shadow-lg"><Code size={14} /></div><span className="font-bold text-base uppercase tracking-widest dark:text-white group-hover:text-blue-600 transition-colors">Harish<span className="text-blue-600">Solanki</span></span></div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs uppercase italic">Passionate developer dedicated to building backend systems and modern web experiences.</p>
              <div className="flex items-center gap-4 pt-2">
                 <a href="https://github.com/Harish7787/Gada" target="_blank" rel="noreferrer" className="p-2 bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-lg text-slate-500 hover:text-blue-600 transition-all shadow-sm active:scale-90"><Github size={18} /></a>
                 <a href="https://www.linkedin.com/in/harish-solanki-12117b286" target="_blank" rel="noreferrer" className="p-2 bg-white dark:bg-black border border-slate-100 dark:border-white/10 rounded-lg text-slate-500 hover:text-blue-600 transition-all shadow-sm active:scale-90"><Linkedin size={18} /></a>
              </div>
            </div>
            <div className="space-y-6"><h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">System Links</h4><ul className="space-y-3 text-left">{['Home', 'About', 'Skills', 'Projects'].map(l => <li key={l}><button onClick={() => scrollTo(l.toLowerCase())} className="text-xs font-bold uppercase text-slate-500 hover:text-blue-600 transition-all text-left uppercase">{l}</button></li>)}</ul></div>
            <div className="space-y-6 text-left"><h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 uppercase">Identification</h4><div className="space-y-4"><div className="flex items-start gap-4 text-left"><MapPin size={18} className="text-blue-600 shrink-0 mt-0.5" /><div className="space-y-0.5"><p className="text-[9px] font-black uppercase tracking-widest text-slate-500 uppercase">Global Location</p><p className="text-xs font-bold uppercase text-slate-400 leading-none text-left">Dwarka, Gujarat, India</p></div></div></div></div>
            <div className="space-y-6 text-left"><h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 uppercase">Technical Assets</h4><p className="text-[11px] font-medium text-slate-500 italic uppercase">Resume Document</p><a href="SolankiHarishJResume.pdf" download className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-blue-600 shadow-sm transition-all group">Get Full Resume <Download size={14} className="group-hover:translate-y-0.5 transition-transform" /></a></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 dark:text-white/20 text-center">© 2026 HARISH SOLANKI. ALL RIGHTS RESERVED</p>
             <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 opacity-50">Built with <Heart size={12} className="text-red-500 animate-pulse" /> for Performance</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;