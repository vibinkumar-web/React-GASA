import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const courseMetaCss = `
  .course-meta { display:flex; flex-wrap:wrap; justify-content:center; gap:0.4rem 0.6rem; margin-top:auto; padding-top:0.8rem; }
  .course-meta span { font-size:0.75rem; font-weight:600; background:#f0f3fa; color:var(--primary-navy); padding:0.25rem 0.6rem; border-radius:20px; white-space:nowrap; }
`;

const CoursesOffered = () => (
  <Layout>
    <style>{courseMetaCss}</style>
    <PageBanner
      title="Courses Offered"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Academics' }, { label: 'Courses Offered' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">Programmes Offered</h2>
        <div className="courses-grid reveal">
          <div className="course-card">
            <div className="icon"><i className="fas fa-book"></i></div>
            <h3>B.A. English</h3>
            <p>Three-year undergraduate programme in English literature, linguistics, and communication skills.</p>
            <div className="course-meta">
              <span><i className="fas fa-calendar-alt"></i> 3 Years</span>
              <span>&#127757; English</span>
              <span><i className="fas fa-users"></i> 64 Seats</span>
            </div>
          </div>
          <div className="course-card">
            <div className="icon"><i className="fas fa-users"></i></div>
            <h3>B.A. Sociology</h3>
            <p>Three-year programme in social structures, human behaviour, and community development.</p>
            <div className="course-meta">
              <span><i className="fas fa-calendar-alt"></i> 3 Years</span>
              <span>&#127757; English</span>
              <span><i className="fas fa-users"></i> 64 Seats</span>
            </div>
          </div>
          <div className="course-card">
            <div className="icon"><i className="fas fa-desktop"></i></div>
            <h3>B.Com</h3>
            <p>Three-year programme in accounting, finance, taxation, business law, and commerce.</p>
            <div className="course-meta">
              <span><i className="fas fa-calendar-alt"></i> 3 Years</span>
              <span>&#127757; English</span>
              <span><i className="fas fa-users"></i> 64 Seats</span>
            </div>
          </div>
          <div className="course-card">
            <div className="icon"><i className="fas fa-laptop"></i></div>
            <h3>B.Sc. Computer Science</h3>
            <p>Three-year programme in programming, data structures, networking, and software development.</p>
            <div className="course-meta">
              <span><i className="fas fa-calendar-alt"></i> 3 Years</span>
              <span>&#127757; English</span>
              <span><i className="fas fa-users"></i> 48 Seats</span>
            </div>
          </div>
          <div className="course-card">
            <div className="icon"><i className="fas fa-chart-line"></i></div>
            <h3>B.Sc. Statistics</h3>
            <p>Three-year programme in statistical theory, probability, data analysis, and mathematical methods.</p>
            <div className="course-meta">
              <span><i className="fas fa-calendar-alt"></i> 3 Years</span>
              <span>&#127757; English</span>
              <span><i className="fas fa-users"></i> 48 Seats</span>
            </div>
          </div>
        </div>

        <div className="reveal" style={{overflowX:'auto',marginTop:'3rem'}}>
          <table className="info-table" style={{width:'100%',borderCollapse:'collapse',fontSize:'0.92rem'}}>
            <thead>
              <tr style={{background:'var(--primary-navy)',color:'#fff'}}>
                <th style={{padding:'0.75rem 1rem',textAlign:'center'}}>Sl.No.</th>
                <th style={{padding:'0.75rem 1rem',textAlign:'left'}}>Degree</th>
                <th style={{padding:'0.75rem 1rem',textAlign:'center'}}>Medium</th>
                <th style={{padding:'0.75rem 1rem',textAlign:'center'}}>Sanctioned Strength</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{background:'#f8f9fb'}}><td style={{padding:'0.65rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>1</td><td style={{padding:'0.65rem 1rem',border:'1px solid #e0e4ed'}}>B.A. [ENGLISH]</td><td style={{padding:'0.65rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>ENGLISH</td><td style={{padding:'0.65rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>64</td></tr>
              <tr><td style={{padding:'0.65rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>2</td><td style={{padding:'0.65rem 1rem',border:'1px solid #e0e4ed'}}>B.A. [SOCIOLOGY]</td><td style={{padding:'0.65rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>ENGLISH</td><td style={{padding:'0.65rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>64</td></tr>
              <tr style={{background:'#f8f9fb'}}><td style={{padding:'0.65rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>3</td><td style={{padding:'0.65rem 1rem',border:'1px solid #e0e4ed'}}>B.COM</td><td style={{padding:'0.65rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>ENGLISH</td><td style={{padding:'0.65rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>64</td></tr>
              <tr><td style={{padding:'0.65rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>4</td><td style={{padding:'0.65rem 1rem',border:'1px solid #e0e4ed'}}>B.SC [COMPUTER SCIENCE]</td><td style={{padding:'0.65rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>ENGLISH</td><td style={{padding:'0.65rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>48</td></tr>
              <tr style={{background:'#f8f9fb'}}><td style={{padding:'0.65rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>5</td><td style={{padding:'0.65rem 1rem',border:'1px solid #e0e4ed'}}>B.SC [STATISTICS]</td><td style={{padding:'0.65rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>ENGLISH</td><td style={{padding:'0.65rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>48</td></tr>
              <tr style={{background:'var(--primary-navy)',color:'#fff',fontWeight:'700'}}><td colSpan={3} style={{padding:'0.7rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>TOTAL</td><td style={{padding:'0.7rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>288</td></tr>
            </tbody>
          </table>
        </div>

        <p className="reveal" style={{marginTop:'1.75rem',fontSize:'0.95rem',fontWeight:'600',color:'var(--primary-navy)',letterSpacing:'0.3px'}}>
          ELIGIBILITY CRITERIA &nbsp;:&nbsp; TAMILNADU DIRECTORATE COLLEGIATE EDUCATION COMMUNICATION - TNDCE/1531/2026-M1-2 Dated : 07-05-2026
        </p>
      </div>
    </section>
  </Layout>
);

export default CoursesOffered;
