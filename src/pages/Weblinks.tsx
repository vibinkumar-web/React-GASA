import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const weblinksCss = `
  .weblinks-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:1.25rem; margin-top:1.5rem; }
  .weblink-card { background:#fff; border:1px solid #e0e4ed; border-radius:8px; padding:1.1rem 1.4rem; display:flex; align-items:center; gap:1rem; transition:box-shadow 0.2s,border-color 0.2s; text-decoration:none; }
  .weblink-card:hover { box-shadow:0 4px 16px rgba(10,34,77,0.12); border-color:var(--primary-navy); }
  .weblink-icon { width:44px; height:44px; border-radius:8px; background:var(--primary-navy); display:flex; align-items:center; justify-content:center; flex-shrink:0; font-size:1.3rem; color:#fff; }
  .weblink-info strong { display:block; color:var(--primary-navy); font-size:0.95rem; font-weight:700; }
  .weblink-info span { display:block; color:#666; font-size:0.82rem; margin-top:0.15rem; word-break:break-all; }
  .section-label { display:inline-block; background:var(--primary-navy); color:#fff; font-size:0.78rem; font-weight:700; letter-spacing:0.8px; text-transform:uppercase; padding:0.25rem 0.9rem; border-radius:4px; margin-bottom:0.75rem; }
`;

const Weblinks = () => (
  <Layout>
    <style>{weblinksCss}</style>
    <PageBanner
      title="Weblinks"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Weblinks' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">Manonmaniam Sundaranar University (MSUniv)</h2>
        <div className="about-content-block reveal">
          <span className="section-label">University Links</span>
          <div className="weblinks-grid">
            <a className="weblink-card" href="https://www.msuniv.ac.in" target="_blank" rel="noopener">
              <div className="weblink-icon"><i className="fas fa-globe"></i></div>
              <div className="weblink-info"><strong>MSUniv Official Website</strong><span>www.msuniv.ac.in</span></div>
            </a>
            <a className="weblink-card" href="https://www.msuniv.ac.in/Student/StudentExam" target="_blank" rel="noopener">
              <div className="weblink-icon"><i className="fas fa-file-alt"></i></div>
              <div className="weblink-info"><strong>Examination Results</strong><span>msuniv.ac.in &mdash; Student Exam Portal</span></div>
            </a>
            <a className="weblink-card" href="https://www.msuniv.ac.in/Academic/Syllabus" target="_blank" rel="noopener">
              <div className="weblink-icon"><i className="fas fa-book"></i></div>
              <div className="weblink-info"><strong>Syllabus &amp; Academic Resources</strong><span>msuniv.ac.in &mdash; Academic Section</span></div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">University Grants Commission (UGC)</h2>
        <div className="about-content-block reveal">
          <span className="section-label">UGC Links</span>
          <div className="weblinks-grid">
            <a className="weblink-card" href="https://www.ugc.gov.in" target="_blank" rel="noopener">
              <div className="weblink-icon"><i className="fas fa-globe"></i></div>
              <div className="weblink-info"><strong>UGC Official Website</strong><span>www.ugc.gov.in</span></div>
            </a>
            <a className="weblink-card" href="https://www.ugc.gov.in/ugc_schemes/" target="_blank" rel="noopener">
              <div className="weblink-icon"><i className="fas fa-clipboard-list"></i></div>
              <div className="weblink-info"><strong>UGC Schemes &amp; Programmes</strong><span>ugc.gov.in &mdash; Schemes</span></div>
            </a>
            <a className="weblink-card" href="https://frills.ugc.gov.in" target="_blank" rel="noopener">
              <div className="weblink-icon"><i className="fas fa-search"></i></div>
              <div className="weblink-info"><strong>Fake University / College Check</strong><span>frills.ugc.gov.in</span></div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="section-title">Higher Education (HE)</h2>
        <div className="about-content-block reveal">
          <span className="section-label">Higher Education Links</span>
          <div className="weblinks-grid">
            <a className="weblink-card" href="https://www.education.gov.in" target="_blank" rel="noopener">
              <div className="weblink-icon"><i className="fas fa-globe"></i></div>
              <div className="weblink-info"><strong>Ministry of Education</strong><span>www.education.gov.in</span></div>
            </a>
            <a className="weblink-card" href="https://www.highereducation.tn.gov.in" target="_blank" rel="noopener">
              <div className="weblink-icon"><i className="fas fa-building"></i></div>
              <div className="weblink-info"><strong>Tamil Nadu Higher Education</strong><span>www.highereducation.tn.gov.in</span></div>
            </a>
            <a className="weblink-card" href="https://www.naac.gov.in" target="_blank" rel="noopener">
              <div className="weblink-icon"><i className="fas fa-trophy"></i></div>
              <div className="weblink-info"><strong>NAAC</strong><span>www.naac.gov.in</span></div>
            </a>
            <a className="weblink-card" href="https://www.nirfindia.org" target="_blank" rel="noopener">
              <div className="weblink-icon"><i className="fas fa-chart-bar"></i></div>
              <div className="weblink-info"><strong>NIRF India</strong><span>www.nirfindia.org</span></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Weblinks;
