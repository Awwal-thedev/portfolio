import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveRight, ChevronDown, Sparkles, Star } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import AsciiPortrait from '../components/AsciiPortrait';
import './Home.css';

const faqs = [
  { q: "How much does a website design and development cost?", a: "It is determined by the complexity of the project. A typical B2B SaaS website ranges from $3,000 to $10,000. Feel free to book a call, and I will provide an exact quote and timeline." },
  { q: "Do you handle both Design and Development?", a: "Yes. I typically handle the entire lifecycle from UX research and Figma design, all the way to a production-ready Webflow or Framer build." },
  { q: "Will I get a responsive website?", a: "Absolutely. Every interface I design and build is fully responsive across desktop, tablet, and mobile devices." },
  { q: "How long does a typical project take?", a: "Depending on the scope, a standard project takes anywhere from 3 to 6 weeks from kickoff to launch." }
];

const FaqItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <h3 className="faq-q-text">{q}</h3>
        <ChevronDown className="faq-icon-arrow" size={20} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="faq-answer-wrap"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="faq-answer-text">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Flip to true when real testimonials are ready to ship
const SHOW_TESTIMONIALS = false;

const Home = ({ onOpenContact }) => {
  const scrollToWork = () => {
    document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
  };

  // Shared Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1.5 // Delay metadata until typing is mostly done
      }
    }
  };

  // Typewriter Animation Logic
  const titleText = "PRODUCT & DESIGN";
  
  const typingContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const typingCharVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline-block", transition: { duration: 0.01 } }
  };

  return (
    <div className="landing-page">
      <div className="home-content-curtain" style={{ paddingTop: '200px' }}>
      
      {/* 1. MASTHEAD HERO SECTION */}
      <section className="hero-masthead container">
        <div className="masthead-header">
          <div className="masthead-text-wrap">
            {/* Typewriter Text Reveal */}
            <motion.h1 
              className="masthead-title"
              variants={typingContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {titleText.split(/(\s+)/).map((word, wordIndex) => (
                <span key={wordIndex} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                  {word.split("").map((char, charIndex) => (
                    <motion.span key={charIndex} variants={typingCharVariants}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
              ))}
              
              {/* Blinking Cursor */}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                style={{ display: "inline-block", marginLeft: "4px", borderRight: "0.08em solid var(--text-primary)" }}
              >
                &nbsp;
              </motion.span>
            </motion.h1>
          </div>

          <motion.div 
            className="masthead-interactive-portrait"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <AsciiPortrait imageSrc="/new-headshot.png" />
          </motion.div>
        </div>
        
        <motion.div 
          className="masthead-grid"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Fun floating elements */}
          <div className="fun-elements-container">
            <motion.div 
              className="floating-badge badge-1"
              animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              🚀 Strategy
            </motion.div>
            <motion.div 
              className="floating-badge badge-2"
              animate={{ y: [0, 20, 0], rotate: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              ✨ Design Engineer
            </motion.div>
            <motion.div 
              className="floating-badge badge-3"
              animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            >
              ⚡ Product Building
            </motion.div>
          </div>

          <motion.div className="masthead-col small-col" variants={fadeUp}>
            <div className="masthead-meta">
              <span className="meta-label">Focus</span>
              <span className="meta-value">Enterprise SaaS & AI</span>
            </div>
            <div className="masthead-meta">
              <span className="meta-label">Role</span>
              <span className="meta-value">Product Manager & Designer</span>
            </div>
            <div className="masthead-meta">
              <span className="meta-label">Location</span>
              <span className="meta-value">Global</span>
            </div>
          </motion.div>
          
          <motion.div className="masthead-col main-col" variants={fadeUp}>
            <h2 className="masthead-statement">
              I turn complex workflows into <span className="text-gradient">intuitive enterprise experiences.</span>
            </h2>
            <p className="masthead-description">
              Helping healthcare, fintech, and enterprise SaaS organizations build products that reduce cognitive load and drive business outcomes.
            </p>
            <div className="hero-trust-line">
              <div className="trust-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
              </div>
              <span>Trusted by founders in healthcare, fintech & SaaS</span>
            </div>
            <div className="masthead-actions">
              <motion.button 
                onClick={scrollToWork} 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View selected work <ChevronDown size={18} />
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div className="masthead-col small-col right-col" variants={fadeUp}>
            <div className="status-indicator">
              <div className="status-dot"></div>
              <span>Available for new opportunities</span>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about" className="btn-secondary read-more-btn">
                Read full bio <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. FEATURED WORK SECTION */}
      <section id="work" className="work-section container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Selected Work
        </motion.h2>
        
        <div className="work-showcase">
          {/* Project 1: Theraptly */}
          <div className="project-feature-card">
            <motion.div 
              className="project-visual theraptly-visual"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
               <img src="/theraptly-mockup.jpg" alt="Theraptly AI Compliance Dashboard" className="project-mockup" />
            </motion.div>
            <motion.div 
              className="project-details"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="project-tags">
                <span className="tag">Healthcare</span>
                <span className="tag">AI Product</span>
                <span className="tag tech-tag">User Research</span>
                <span className="tag tech-tag">Prototyping</span>
              </div>
              <h3 className="project-title">Theraptly</h3>
              <p className="project-summary">
                Designed an AI-powered platform that helps healthcare organizations analyze internal policies against regulatory requirements and generate actionable recommendations.
              </p>
              <Link to="/case-study/theraptly" className="read-case-study">
                Read Case Study <motion.span whileHover={{ x: 5 }}><ArrowRight size={20} /></motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Project 2: Xentoba */}
          <div className="project-feature-card reverse">
            <motion.div 
              className="project-visual xentoba-visual"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
               <img src="/xentoba-mockup.jpg" alt="Xentoba Enterprise Tax CRM" className="project-mockup" />
            </motion.div>
            <motion.div 
              className="project-details"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="project-tags">
                <span className="tag">FinTech</span>
                <span className="tag">Enterprise CRM</span>
                <span className="tag tech-tag">Design Systems</span>
                <span className="tag tech-tag">Figma</span>
              </div>
              <h3 className="project-title">Xentoba</h3>
              <p className="project-summary">
                A unified enterprise platform for tax firms to manage clients, accounting, workflow automation, and document management at scale.
              </p>
              <Link to="/case-study/xentoba" className="read-case-study">
                Read Case Study <motion.span whileHover={{ x: 5 }}><ArrowRight size={20} /></motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Project 3: Dojo Connect */}
          <div className="project-feature-card">
            <motion.div
              className="project-visual dojo-visual"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
               <img src="/dojo-mockup.png" alt="Dojo Connect School Communication Platform" className="project-mockup" />
            </motion.div>
            <motion.div
              className="project-details"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="project-tags">
                <span className="tag">Education</span>
                <span className="tag">SaaS</span>
                <span className="tag tech-tag">User Onboarding</span>
                <span className="tag tech-tag">Dashboards</span>
              </div>
              <h3 className="project-title">Dojo Connect</h3>
              <p className="project-summary">
                A school communication platform connecting schools, instructors, parents, and students through attendance, assignments, announcements, and onboarding.
              </p>
              <Link to="/case-study/dojo-connect" className="read-case-study">
                Read Case Study <motion.span whileHover={{ x: 5 }}><ArrowRight size={20} /></motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2.5. TESTIMONIALS SECTION (hidden until real testimonials are ready) */}
      {SHOW_TESTIMONIALS && (
      <section className="testimonials-section container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="section-title">What They Say</h2>
          <p className="testimonials-subtitle">Hear it from founders who've shipped and raised with me.</p>
        </motion.div>

        <div className="testimonials-grid">
          {[
            {
              text: "Awwal turned our complex healthcare compliance logic into an incredibly intuitive interface. Policy review time dropped from 3 days to 4 hours, and pilot users onboarded without a single training call.",
              name: "Sarah Jenkins",
              role: "CEO, Theraptly"
            },
            {
              text: "The enterprise tax platform Awwal designed cut our client onboarding from 2 weeks to 3 days. His design system let us roll out 40+ screens in a single quarter without losing consistency.",
              name: "Michael Chen",
              role: "Product Lead, Xentoba"
            },
            {
              text: "Communication was outstanding at every step. The high-density dashboards Awwal delivered reduced our support tickets by nearly 40% in the first month after launch.",
              name: "David Bradley",
              role: "Chief Technologist"
            }
          ].map((testimonial, idx) => (
            <motion.div 
              className="testimonial-card"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="testimonial-quote">"{testimonial.text}"</div>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                <div className="author-details">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      )}

      {/* 3. CORE EXPERTISE SECTION (Sticky Scroll Layout - Merged) */}
      <section className="expertise-sticky-section">
        <div className="container expertise-sticky-container">
          
          <div className="expertise-sticky-left">
            <motion.div 
              className="sticky-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="section-title">Core Expertise</h2>
              <p className="expertise-sticky-subtitle">Bringing ideas to life across the entire product lifecycle.</p>
            </motion.div>
          </div>

          <div className="expertise-sticky-right">
            {[
              {
                title: "Product Strategy",
                desc: "Bridging the gap between business goals and user needs through feature planning, journey mapping, and clear product direction.",
                deliverables: ["Product Roadmaps", "User Journey Mapping", "Competitive Analysis", "KPI Definition"]
              },
              {
                title: "Design Systems & Architecture",
                desc: "Organizing complex enterprise information architecture, creating scalable design systems, and ensuring cross-platform consistency.",
                deliverables: ["Information Architecture", "Design Systems", "Component Libraries", "Scalability Audits"]
              },
              {
                title: "UI/UX & Interaction Design",
                desc: "Crafting intuitive, high-density dashboards, user flows, and responsive interfaces that reduce friction and cognitive load for expert users.",
                deliverables: ["Wireframing & Prototyping", "Micro-interactions", "High-Fidelity UI", "Usability Testing"]
              },
              {
                title: "Brand Design",
                desc: "Developing cohesive visual identities that communicate purpose and outlive temporary trends.",
                deliverables: ["Visual Identity", "Brand Guidelines", "Typography Systems", "Logo Design"]
              }
            ].map((expertise, idx) => (
              <motion.div 
                className="expertise-detail-card" 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="expertise-detail-header">
                  <div className="expertise-number">0{idx + 1}</div>
                  <h3 className="expertise-detail-title">{expertise.title}</h3>
                </div>
                <p className="expertise-detail-desc">{expertise.desc}</p>
                
                <div className="expertise-deliverables">
                  <h4>Key Deliverables</h4>
                  <ul>
                    {expertise.deliverables.map((item, i) => (
                      <li key={i}><Sparkles size={14} className="deliverable-icon" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="faq-section container">
        <motion.div
          className="faq-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="section-title">Your Questions, Answered</h2>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      </div> {/* End home-content-curtain */}

      {/* 4. FOOTER / CTA (Sticky Reveal) */}
      <footer className="footer-reveal">
        <div className="footer-inner container">
          
          {/* Massive Typographic Name */}
          <div className="footer-massive-text">
            Awwal.
          </div>
          
          <div className="footer-bottom-grid">
            <div className="footer-col">
              <h4>Crafted with intent.</h4>
              <p>Built to outlive trends and scale gracefully.</p>
              
              <div className="footer-cta-wrap">
                <p>Have a complex product challenge?</p>
                <motion.button 
                  onClick={onOpenContact} 
                  className="btn-light"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: 'inherit', border: 'none', cursor: 'pointer', fontSize: '1rem' }}
                >
                  Start a conversation <MoveRight size={16} />
                </motion.button>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Navigation</h4>
              <a href="/#work">Work</a>
              <Link to="/about">About</Link>
            </div>
            
            <div className="footer-col">
              <h4>Socials</h4>
              <a href="https://www.instagram.com/miday__999/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://x.com/miday__999" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://github.com/Awwal-thedev" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          
          <div className="footer-copyright">
            © {new Date().getFullYear()} Awwal Adeyemo. Rooted in craft, refined through code.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
