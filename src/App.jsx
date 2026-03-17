import React, { useState, useEffect } from 'react';
import profilePic from "./assets/myimg.jpg";
import { 
  Sun, Moon, Github, Linkedin, Mail, ExternalLink, 
  Code, User, Send, ChevronRight, 
  Cpu, Globe, Download, CheckCircle2, Box, Layers, 
  Zap, Menu, X, ShieldCheck, Database, Server,
  Lock, Settings, Braces, Binary, Briefcase, GraduationCap,
  Command, Cpu as Processor, Activity, Workflow, Award, Star
} from 'lucide-react';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const languages = [
    { name: "Java", icon: <Processor size={18} /> },
    { name: "C++", icon: <Braces size={18} /> },
    { name: "Python", icon: <Code size={18} /> },
    { name: "React.js", icon: <Layers size={18} /> },
    { name: "Spring Boot", icon: <Zap size={18} /> },
    { name: "Oracle DBMS", icon: <Database size={18} /> },
    { name: "MongoDB", icon: <Database size={18} /> },
    { name: "HTML5/CSS3", icon: <Globe size={18} /> },
    { name: "ASP.NET", icon: <Settings size={18} /> }
  ];

  const strengthGroups = [
    {
      category: "Programming & Web",
      skills: ["Java", "Spring Boot", "React.js", "C++", "Python", "ASP.NET"]
    },
    {
      category: "Data Management",
      skills: ["Oracle DBMS", "MongoDB", "SQL Server", "Data Analysis"]
    },
    {
      category: "Professional Strengths",
      skills: ["Scalable Systems", "REST APIs", "Modern UI Architecture"]
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
      title: "Smart Location Alarm",
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
      <div className="min-h-screen bg-white dark:bg-[#000000] text-slate-900 dark:text-slate-100 transition-colors duration-700 font-sans selection:bg-blue-600/30">
        
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-[120] bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-slate-200 dark:border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                <Command size={14} />
              </div>
              <span className="font-bold text-sm uppercase tracking-[0.3em] dark:text-white">
                HS<span className="text-blue-600">Portfolio</span>
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-[14px] font-black uppercase tracking-[0.2em]">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="relative group overflow-hidden py-2">
                  <span className="block group-hover:-translate-y-full transition-transform duration-300">{item}</span>
                  <span className="absolute top-full left-0 text-blue-600 transition-transform duration-300 group-hover:-translate-y-full">{item}</span>
                </a>
              ))}
              <div className="h-5 w-[1px] bg-slate-200 dark:bg-white/10"></div>
              <button onClick={toggleTheme} className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full transition-all">
                {theme === 'dark' ? <Sun size={14} className="text-yellow-500" /> : <Moon size={14} className="text-blue-600" />}
              </button>
            </div>

            {/* Mobile Toggle Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-900 dark:text-white transition-all z-[130]">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        <div className={`fixed inset-x-0 top-0 z-[115] bg-white dark:bg-black md:hidden flex flex-col pt-20 px-8 transition-all duration-500 ease-in-out border-b border-slate-200 dark:border-white/10 shadow-2xl ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="flex flex-col gap-4 pb-10">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                onClick={() => setIsMenuOpen(false)} 
                href={`#${item.toLowerCase()}`} 
                className="text-xl font-black uppercase tracking-widest hover:text-blue-600 transition-colors border-b border-slate-50 dark:border-white/5 py-3"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 flex items-center justify-between">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">System Theme</span>
               <button onClick={toggleTheme} className="p-2.5 bg-slate-100 dark:bg-white/5 rounded-xl">
                  {theme === 'dark' ? <Sun size={16} className="text-yellow-500" /> : <Moon size={16} className="text-blue-600" />}
               </button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section id="home" className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 space-y-8 order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-600/5 border border-blue-600/20 text-blue-600 mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest">Architecting Scalable Solutions</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-[1.1] uppercase">
                  HARISH <br />
                  <span className="text-blue-600">SOLANKI</span>
                </h1>
                <h2 className="text-xs sm:text-sm md:text-md font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.5em]">
                  BCA Graduate | Full Stack Developer
                </h2>
              </div>

              <p className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-xl leading-relaxed mx-auto lg:mx-0">
                Dedicated developer specializing in <span className="text-black dark:text-white font-bold underline decoration-blue-600 decoration-4 underline-offset-8 italic">Java, React.js, & Spring Boot</span>. Focused on creating mission-critical applications with robust backends.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
                <a 
                  href="SolankiHarishJResume.pdf" 
                  download="Solanki_Harish_J_Resume.pdf"
                  className="group relative px-6 sm:px-8 py-3.5 bg-blue-600 text-white rounded-xl font-black text-[11px] uppercase tracking-widest overflow-hidden transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-2">Download CV <Download size={14}/></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
                <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/in/harish-solanki-12117b286" target="_blank" rel="noreferrer" className="p-3 border border-slate-200 dark:border-white/10 rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all hover:scale-110">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://github.com/Harish7787/Gada" target="_blank" rel="noreferrer" className="p-3 border border-slate-200 dark:border-white/10 rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all hover:scale-110">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Profile Photo Card */}
            <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative group w-full max-w-[280px] sm:max-w-[340px]">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative aspect-[4/5] bg-slate-50 dark:bg-zinc-950 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
                   <img 
                     src="myimg.jpg" 
                     alt="Harish Solanki" 
                     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                     onError={(e) => { e.target.src =profilePic; }}
                   />
                   <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-[1.5rem] border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                      <div className="flex items-center justify-between">
                         <div className="space-y-0.5">
                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-600">BCA Graduate</p>
                            <p className="text-sm sm:text-base font-bold uppercase tracking-tighter leading-tight">Devbhumi Dwarka, IN</p>
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

        {/* Skill Slider */}
        <section className="py-12 bg-slate-50 dark:bg-zinc-950/50 border-y border-slate-200 dark:border-white/5 overflow-hidden">
          <div className="relative flex group">
            <div className="flex animate-marquee whitespace-nowrap gap-6 sm:gap-12 py-3 items-center group-hover:[animation-play-state:paused]">
              {languages.concat(languages).map((lang, i) => (
                <div key={i} className="flex items-center gap-3 bg-white dark:bg-black px-6 py-3 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-blue-600 transition-all cursor-default shadow-sm">
                  <div className="text-blue-600">{lang.icon}</div>
                  <span className="text-base sm:text-lg font-black uppercase tracking-tighter italic">{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .animate-marquee { animation: marquee 35s linear infinite; }
          `}</style>
        </section>

        {/* Details & Academic Section */}
        <section id="about" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter">
                Career <span className="text-blue-600">Details</span>
              </h2>
              <div className="h-1.5 w-16 bg-blue-600 rounded-full"></div>
            </div>
            
            <div className="space-y-10">
               {[
                 { title: "BCA Graduate", desc: "Successfully completed Bachelor of Computer Applications with a focus on Web Development and Software Architecture.", icon: <GraduationCap size={18}/> },
                 { title: "Technical Expertise", desc: "Expertise in multi-paradigm languages such as Java, React.js, and Spring Boot for scalable solution building.", icon: <Processor size={18}/> },
                 { title: "Database Architecture", icon: <Database size={18}/>, desc: "Proficient in Oracle DBMS and MongoDB, ensuring data integrity and efficient query performance." }
               ].map((detail, idx) => (
                 <div key={idx} className="relative pl-10 border-l-2 border-slate-200 dark:border-white/10 group">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-blue-600/10 group-hover:scale-125 transition-transform"></div>
                    <div className="flex items-center gap-3 mb-2">
                       <span className="text-blue-600">{detail.icon}</span>
                       <h3 className="text-lg sm:text-xl font-black tracking-tight uppercase leading-tight">{detail.title}</h3>
                    </div>
                    <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      {detail.desc}
                    </p>
                 </div>
               ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {strengthGroups.map((group, idx) => (
                <div key={idx} className={`p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-zinc-950 border border-slate-200 dark:border-white/10 hover:border-blue-600 transition-all ${idx === 0 ? 'sm:col-span-2' : ''}`}>
                   <h4 className="text-xs font-black uppercase tracking-widest text-blue-600 mb-6">{group.category}</h4>
                   <div className="flex flex-wrap gap-2.5">
                     {group.skills.map(s => (
                       <span key={s} className="px-3 py-1.5 bg-slate-50 dark:bg-white/5 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all cursor-default">{s}</span>
                     ))}
                   </div>
                </div>
              ))}
            </div>

            <div className="group p-6 bg-slate-50 dark:bg-zinc-900 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-inner hover:border-blue-600/30 transition-all">
               <div className="flex items-center gap-5">
                 <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shrink-0">
                   <GraduationCap size={24} />
                 </div>
                 <div>
                   <p className="text-[9px] font-black uppercase tracking-widest text-blue-600 mb-0.5">Education</p>
                   <h4 className="text-lg font-black uppercase tracking-tighter leading-tight">BCA (2023 — 2026)</h4>
                   <p className="text-xs sm:text-sm text-slate-500 mt-1 font-bold italic">Dr Virambhai Rajabhai Godhaniya IT College</p>
                 </div>
               </div>
            </div>
            
            <div className="relative group p-8 bg-black text-white rounded-[2rem] overflow-hidden shadow-xl">
               <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
               <div className="flex items-center gap-4 mb-6">
                  <Award className="text-blue-600" />
                  <h4 className="text-xs font-black uppercase tracking-widest text-blue-600">Achievements</h4>
               </div>
               <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-3">
                     <Star size={14} className="text-yellow-500 shrink-0 mt-1" />
                     <p className="text-sm font-bold uppercase tracking-tight italic opacity-90 leading-tight">ACADEMIC EXCELLENCE RECIPIENT</p>
                  </div>
                  <div className="flex items-start gap-3">
                     <Star size={14} className="text-yellow-500 shrink-0 mt-1" />
                     <p className="text-sm font-bold uppercase tracking-tight italic opacity-90 leading-tight">EXCELLENCE IN STUDIES</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="py-24 sm:py-32 bg-[#fafafa] dark:bg-[#020202] relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
              <div className="space-y-3">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-blue-600">Key</h2>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-tight"> Projects</h3>
              </div>
              <p className="text-slate-400 font-bold italic text-sm">Committed to architecting high-performance digital environments.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((proj, idx) => (
                <div key={idx} className="relative group overflow-hidden bg-white dark:bg-zinc-950 p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 hover:-translate-y-2 transition-all duration-500 shadow-xl">
                  {/* Spotlight Effect - Optimized for Dark Mode Visibility */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                       style={{ background: `radial-gradient(400px circle at ${mousePos.x % 300}px ${mousePos.y % 300}px, ${theme === 'dark' ? 'rgba(37,99,235,0.15)' : 'rgba(37,99,235,0.06)'}, transparent 40%)` }}></div>
                  
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-start mb-10">
                        <div className="px-3 sm:px-4 py-1 bg-blue-600/10 text-blue-600 rounded-full text-[9px] font-black uppercase tracking-widest">
                          {proj.tag}
                        </div>
                        <div className="flex gap-4">
                           <a href="https://github.com/Harish7787/Gada" target="_blank" rel="noreferrer"><Github size={18} className="cursor-pointer hover:text-blue-600 transition-colors" /></a>
                           <a href={proj.link} target="_blank" rel="noreferrer"><ExternalLink size={18} className="cursor-pointer hover:text-blue-600 transition-colors" /></a>
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black tracking-tighter uppercase mb-4 leading-none">{proj.title}</h3>
                      <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-8">
                        {proj.desc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100 dark:border-white/5">
                      {proj.tech.map(t => (
                        <span key={t} className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
          <div className="relative bg-white dark:bg-zinc-900 p-8 sm:p-20 rounded-[3.5rem] border border-slate-200 dark:border-white/10 shadow-2xl text-center overflow-hidden">
             <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] animate-pulse"></div>
             
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 italic leading-tight">
                INITIATE <span className="text-blue-600">CONTACT</span>
             </h2>
             
             <div className="flex justify-center mb-16">
                <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/10 shadow-sm">
                   <Globe size={18} className="text-blue-600" />
                   <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 italic uppercase">Harish Solanki</span>
                </div>
             </div>
             
             <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left relative z-10" onSubmit={e => e.preventDefault()}>
               <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Identity</label>
                 <input type="text" placeholder="Your Name" className="w-full p-5 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 rounded-2xl outline-none focus:border-blue-600 font-bold transition-all text-sm" />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                 <input type="email" placeholder="abc@gmail.com" className="w-full p-5 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 rounded-2xl outline-none focus:border-blue-600 font-bold transition-all text-sm" />
               </div>
               <div className="md:col-span-2 space-y-2">
                 <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Technical Objective</label>
                 <textarea rows="4" placeholder="Tell me about your architectural goals..." className="w-full p-5 bg-slate-50 dark:bg-black border border-slate-200 dark:border-white/5 rounded-2xl outline-none focus:border-blue-600 font-bold resize-none transition-all text-sm placeholder:opacity-30" />
               </div>
               <div className="md:col-span-2 flex justify-center pt-8">
                  <button className="w-full max-w-lg py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] shadow-[0_20px_40px_rgba(37,99,235,0.25)] hover:shadow-[0_30px_60px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-2 active:scale-[0.98] flex items-center justify-center gap-4 group relative overflow-hidden">
                    <span className="relative z-10 flex items-center gap-3">
                        ESTABLISH CONNECTION 
                        <Send size={18} className="group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
               </div>
             </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-slate-100 dark:border-white/5 bg-white dark:bg-black text-center md:text-left">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3">
               <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                 <Box size={14} />
               </div>
               <span className="font-bold tracking-tight text-xs uppercase dark:text-white">HarishSolanki<span className="text-blue-600">.</span></span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-[9px] font-black uppercase tracking-widest text-slate-400">
              <a href="https://www.linkedin.com/in/harish-solanki-12117b286" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
              <a href="https://github.com/Harish7787/Gada" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
            </div>
            
            <div className="md:text-right">
               <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300 dark:text-white/20">© 2026 GUJARAT, INDIA</p>
               <p className="text-[8px] font-bold text-blue-600 uppercase tracking-widest mt-1 italic">Built for Scalability & Performance</p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;