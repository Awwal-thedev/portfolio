import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveRight, ChevronDown } from 'lucide-react';
import './Home.css';

const Home = () => {
  const scrollToWork = () => {
    document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page" style={{ paddingTop: '200px' }}>
      {/* 1. MASTHEAD HERO SECTION */}
      <section className="hero-masthead container">
        <div className="masthead-header">
          <h1 className="masthead-title">PRODUCT & DESIGN</h1>
        </div>
        
        <div className="masthead-grid">
          <div className="masthead-col small-col">
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
          </div>
          
          <div className="masthead-col main-col">
            <h2 className="masthead-statement">
              I turn complex workflows into <span className="text-accent">intuitive enterprise experiences.</span>
            </h2>
            <p className="masthead-description">
              Helping healthcare, fintech, and enterprise SaaS organizations build products that reduce cognitive load and drive business outcomes.
            </p>
            <div className="masthead-actions">
              <button onClick={scrollToWork} className="btn-primary">
                View selected work <ChevronDown size={18} />
              </button>
            </div>
          </div>
          
          <div className="masthead-col small-col right-col">
            <div className="status-indicator">
              <div className="status-dot"></div>
              <span>Available for new opportunities</span>
            </div>
            <Link to="/about" className="btn-secondary read-more-btn">
              Read full bio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. FEATURED WORK SECTION */}
      <section id="work" className="work-section container">
        <h2 className="section-title">Selected Work</h2>
        
        <div className="work-showcase">
          {/* Project 1: Theraptly */}
          <div className="project-feature-card">
            <div className="project-visual theraptly-visual">
               {/* Massive visual area for the product screenshot */}
               <div className="mockup-placeholder">
                  <span>AI Compliance Dashboard Mockup</span>
               </div>
            </div>
            <div className="project-details">
              <div className="project-tags">
                <span className="tag">Healthcare</span>
                <span className="tag">AI Product</span>
              </div>
              <h3 className="project-title">Theraptly</h3>
              <p className="project-summary">
                Designed an AI-powered platform that helps healthcare organizations analyze internal policies against regulatory requirements and generate actionable recommendations.
              </p>
              <Link to="/case-study/theraptly" className="read-case-study">
                Read Case Study <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Project 2: Xentoba */}
          <div className="project-feature-card reverse">
            <div className="project-visual xentoba-visual">
               <div className="mockup-placeholder">
                  <span>Enterprise Tax CRM Mockup</span>
               </div>
            </div>
            <div className="project-details">
              <div className="project-tags">
                <span className="tag">FinTech</span>
                <span className="tag">Enterprise CRM</span>
              </div>
              <h3 className="project-title">Xentoba</h3>
              <p className="project-summary">
                A unified enterprise platform for tax firms to manage clients, accounting, workflow automation, and document management at scale.
              </p>
              <Link to="/case-study/xentoba" className="read-case-study">
                Read Case Study <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE / SERVICES SECTION */}
      <section className="expertise-section">
        <div className="container">
          <h2 className="section-title">Core Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <div className="expertise-icon">🎯</div>
              <h3>Product Strategy</h3>
              <p>Bridging the gap between business goals and user needs through feature planning, journey mapping, and clear product direction.</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">🧩</div>
              <h3>Systems Thinking</h3>
              <p>Organizing complex enterprise information architecture, creating scalable design systems, and ensuring cross-platform consistency.</p>
            </div>
            <div className="expertise-card">
              <div className="expertise-icon">✨</div>
              <h3>Interaction Design</h3>
              <p>Crafting high-density dashboards, user flows, and responsive interfaces that reduce friction and cognitive load for expert users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER / CTA */}
      <section className="cta-section container">
        <div className="cta-box">
          <h2>Have a complex product challenge?</h2>
          <p>Let's collaborate to build experiences that scale and perform.</p>
          <a href="mailto:hello@example.com" className="btn-primary large">
            Get in touch <MoveRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
