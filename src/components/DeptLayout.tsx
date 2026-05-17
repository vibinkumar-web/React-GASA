import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import BackToTop from './BackToTop';
import ScrollReveal from './ScrollReveal';

interface Tab {
  id: string;
  label: string;
}

interface DeptLayoutProps {
  deptName: string;
  highlight: string;
  tabs: Tab[];
  children: (activeTab: string) => React.ReactNode;
  extraStyle?: string;
}

const DeptLayout = ({ deptName, highlight, tabs, children, extraStyle }: DeptLayoutProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? '');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth > 850) setMenuOpen(false);
    const handleResize = () => {
      if (window.innerWidth > 850) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @media (min-width: 851px) {
          .dept-navbar .container { flex-wrap: nowrap; }
          .dept-nav-links .tab-link { padding: 1.25rem 0.65rem; font-size: 0.75rem; }
        }
        .dept-brand { font-size: 0.92rem; white-space: nowrap; }
      `}</style>
      {extraStyle && <style>{extraStyle}</style>}
      <div className="dept-navbar">
        <div className="container">
          <div className="dept-brand">
            {deptName} <span className="highlight">{highlight}</span>
          </div>
          <button
            className={`dept-hamburger${menuOpen ? ' active' : ''}`}
            aria-label="Toggle department navigation"
            onClick={() => setMenuOpen(m => !m)}
          >
            <span></span><span></span><span></span>
          </button>
          <div className={`dept-nav-links${menuOpen ? ' open' : ''}`}>
            <a
              href="/"
              className="tab-link"
              aria-label="Main Home"
              title="Go to College Home"
              onClick={(e) => { e.preventDefault(); navigate('/'); }}
            >
              <svg style={{width:'18px',height:'18px'}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </a>
            <button className="tab-link" aria-label="Back" onClick={() => navigate(-1)}>
              <svg style={{width:'18px',height:'18px',marginRight:'2px'}} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              BACK
            </button>
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-link${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="dept-content-wrapper section" style={{background:'var(--bg-light)'}}>
        <div className="container">
          {children(activeTab)}
        </div>
      </div>

      <Footer />
      <BackToTop />
      <ScrollReveal />
    </>
  );
};

export default DeptLayout;
