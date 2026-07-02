import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import './CaseStudy.css';

// Mock data for case studies
const caseStudiesData = {
  'theraptly': {
    title: 'Theraptly',
    subtitle: 'AI Compliance Platform for Healthcare',
    role: 'Product Designer',
    timeline: '2025 - Present',
    tldr: 'Designed an AI-powered platform that helps healthcare organizations analyze internal policies against regulatory requirements, identify compliance gaps, and generate recommendations.',
    problem: 'Healthcare compliance involves lengthy policy documents, complex regulations, and manual review processes, which are prone to human error and incredibly time-consuming.',
    solution: 'Designed workflows that simplify policy uploads, AI analysis, document comparison, recommendations, and collaborative editing. We built a system that surfaces AI-generated insights in a readable, actionable format.',
    impact: 'Reduced complexity of compliance review, improved readability of AI-generated insights, and created scalable enterprise workflows.'
  },
  'xentoba': {
    title: 'Xentoba',
    subtitle: 'Enterprise Tax Management Platform',
    role: 'Lead Product Designer',
    timeline: 'August 2025',
    tldr: 'Designed an enterprise platform for tax firms to manage clients, accounting, workflow automation, analytics, and document management.',
    problem: 'Tax professionals rely on disparate, legacy systems to manage workflows, leading to inefficiencies and data silos.',
    solution: 'Built a unified CRM and workflow management tool with a robust design system. Focused on enterprise UX, scalable information architecture, and high-density dashboard design.',
    impact: 'Streamlined organization settings, document management, and client accounting into one scalable enterprise experience for finance professionals.'
  },
  'dojo-connect': {
    title: 'Dojo Connect',
    subtitle: 'School Communication Platform',
    role: 'Product Designer',
    timeline: '2025 - Present',
    tldr: 'Designed experiences connecting schools, instructors, parents, and students through attendance, assignments, announcements, calendars, and onboarding.',
    problem: 'Schools struggled to keep parents engaged and instructors organized using fragmented communication channels.',
    solution: 'Created seamless user onboarding, an intuitive notification experience, a parent invitation flow, and instructor performance tracking dashboards.',
    impact: 'Reduced friction in school-to-parent communication and improved instructor operational efficiency.'
  }
};

const CaseStudy = () => {
  const { id } = useParams();
  const data = caseStudiesData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="container case-study-not-found">
        <h2>Case study not found.</h2>
        <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="case-study-page">
      <div className="container">
        <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to Home</Link>
        
        <header className="cs-header">
          <h1>{data.title}</h1>
          <p className="cs-subtitle">{data.subtitle}</p>
          
          <div className="cs-meta">
            <div>
              <span className="meta-label">Role</span>
              <span className="meta-value">{data.role}</span>
            </div>
            <div>
              <span className="meta-label">Timeline</span>
              <span className="meta-value">{data.timeline}</span>
            </div>
          </div>
        </header>

        <div className="cs-hero-image">
          {id === 'dojo-connect' ? (
            <img 
              src="/dojo-mockup.png" 
              alt={`${data.title} Mockup`} 
              className="cs-hero-mockup" 
            />
          ) : ['theraptly', 'xentoba'].includes(id) ? (
            <img 
              src={`/${id}-mockup.jpg`} 
              alt={`${data.title} Mockup`} 
              className="cs-hero-mockup" 
            />
          ) : (
            <div className="placeholder-image">
              <span className="text-tertiary">Project Mockup / Dashboard</span>
            </div>
          )}
        </div>

        <article className="cs-content">
          <section className="cs-section tldr-box">
            <h2>TL;DR</h2>
            <p>{data.tldr}</p>
          </section>

          <section className="cs-section">
            <h2>The Problem</h2>
            <p>{data.problem}</p>
          </section>

          <section className="cs-section">
            <h2>Architecture & Solution</h2>
            <p>{data.solution}</p>
            {/* Placeholder for architecture diagram / wireframes */}
            <div className="placeholder-image small">
              <span className="text-tertiary">User Flow / Wireframe</span>
            </div>
          </section>

          <section className="cs-section">
            <h2>Business Impact</h2>
            <div className="impact-box">
              <SparklesIcon />
              <p>{data.impact}</p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
  </svg>
)

export default CaseStudy;
