import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const awardCss = `
  .award-card { background:#fff; border:1px solid #e0e4ed; border-left:5px solid var(--primary-navy); border-radius:6px; padding:1.25rem 1.5rem; margin-bottom:1.1rem; display:flex; align-items:flex-start; gap:1.1rem; }
  .award-icon { font-size:2rem; flex-shrink:0; margin-top:0.1rem; }
  .award-name { font-size:1rem; font-weight:700; color:var(--primary-navy); margin-bottom:0.25rem; }
  .award-title { font-size:0.95rem; font-weight:600; color:#c9a84c; margin-bottom:0.3rem; }
  .award-desc { font-size:0.92rem; color:#444; line-height:1.75; }
  .award-section-label { font-size:1rem; font-weight:700; color:var(--primary-navy); text-transform:uppercase; letter-spacing:0.05em; border-left:4px solid #1a3c6e; padding-left:0.75rem; margin:0 0 1rem; }
  .student-award-card { background:#fff; border:1px solid #e0e4ed; border-left:5px solid #c9a84c; border-radius:6px; padding:1.25rem 1.5rem; margin-bottom:1.1rem; }
  .student-meta { font-size:0.88rem; color:#666; margin-bottom:0.6rem; }
  .student-achievement { list-style:none; padding:0; margin:0; }
  .student-achievement li { padding:0.35rem 0; font-size:0.93rem; color:#333; line-height:1.65; }
`;

const AwardRecognition = () => (
  <Layout>
    <style>{awardCss}</style>
    <PageBanner
      title="Awards & Recognition"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Administration' }, { label: 'Awards & Recognition' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">Staff Awards</h2>
        <div className="reveal">
          <p className="award-section-label">Excellence Awards</p>
          <div className="award-card">
            <div className="award-icon"><i className="fas fa-trophy"></i></div>
            <div>
              <div className="award-name">Dr. G. VENUGOPAL</div>
              <div className="award-title">Excellence Award &mdash; Kallori Kalvi Thurai</div>
              <div className="award-desc">
                Awarded for outstanding contributions to the field of College Education, Tenkasi District.<br />
                <strong>Awarded by:</strong> The District Collector, Tenkasi<br />
                <strong>Date:</strong> 15th August 2025
              </div>
            </div>
          </div>
          <div className="award-card">
            <div className="award-icon"><i className="fas fa-trophy"></i></div>
            <div>
              <div className="award-name">Dr. K. KALAGOPI</div>
              <div className="award-title">Excellence Award &mdash; Pudhumai Penn &amp; Tamizh Pudhalvan</div>
              <div className="award-desc">
                Recognised under the <em>Pudhumai Penn</em> scheme (for girls) and <em>Tamizh Pudhalvan</em> scheme (for boys) in Tamil Nadu.<br />
                <strong>Awarded by:</strong> The Chief Minister of Tamil Nadu<br />
                <strong>Date:</strong> 26th September 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Student Awards</h2>
        <div className="reveal">
          <p className="award-section-label">Academic Excellence</p>
          <div className="student-award-card">
            <div className="award-name">CHANDRU. S</div>
            <div className="student-meta">
              Reg. No.: 20221361112108 &nbsp;|&nbsp; Programme: B.A. Sociology
            </div>
            <ul className="student-achievement">
              <li><i className="fas fa-trophy"></i> Secured <strong>First Rank</strong> (First Class with Distinction) &mdash; Manonmaniam Sundaranar University, April 2025</li>
              <li><i className="fas fa-trophy"></i> Secured <strong>First Rank</strong> in Naan Mudhalvan (MSU) &mdash; April 2025</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AwardRecognition;
