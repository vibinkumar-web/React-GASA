import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const nirfCss = `
  .data-table { width:100%; border-collapse:collapse; font-size:0.92rem; margin-top:1.5rem; }
  .data-table thead tr { background:var(--primary-navy); color:#fff; }
  .data-table th { padding:0.8rem 1.1rem; text-align:left; border:1px solid #c0c8dc; }
  .data-table th.center { text-align:center; }
  .data-table tbody tr:nth-child(even) { background:#f8f9fb; }
  .data-table td { padding:0.75rem 1.1rem; border:1px solid #e0e4ed; vertical-align:top; }
  .data-table td.sl { text-align:center; font-weight:600; }
  .data-table td.name-col { font-weight:700; color:var(--primary-navy); }
  .role-badge { display:inline-block; font-size:0.75rem; font-weight:700; padding:0.25rem 0.75rem; border-radius:20px; color:#fff; white-space:nowrap; }
  .badge-coord { background:var(--primary-navy); }
  .badge-member { background:#1a6e3c; }
  .nirf-aishe-label { background:var(--primary-navy); color:#fff; font-weight:700; font-size:1rem; padding:0.6rem 1.8rem; border-radius:6px; letter-spacing:0.5px; display:inline-block; margin-bottom:1rem; }
  .placeholder-note { background:#f8f9fb; border:1px dashed #c0c8dc; border-radius:8px; padding:1.5rem 2rem; color:#666; font-style:italic; margin-top:0.5rem; font-size:0.93rem; }
`;

const NirfAishe = () => (
  <Layout>
    <style>{nirfCss}</style>
    <PageBanner
      title="NIRF & AISHE"
      breadcrumbs={[{ label:'Home', path:'/' }, { label:'Committee', path:'/committee' }, { label:'NIRF & AISHE' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">NIRF</h2>
        <div className="about-content-block reveal">
          <span className="nirf-aishe-label">National Institutional Ranking Framework</span>
          <p>NIRF (National Institutional Ranking Framework) was approved by the Ministry of Education and launched in 2015. It outlines a methodology to rank institutions across the country. The parameters broadly cover Teaching, Learning &amp; Resources, Research &amp; Professional Practice, Graduation Outcomes, Outreach &amp; Inclusivity, and Peer Perception.</p>
          <div className="placeholder-note">NIRF ranking data and reports will be updated here as they become available.</div>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">AISHE</h2>
        <div className="about-content-block reveal">
          <span className="nirf-aishe-label">All India Survey on Higher Education</span>
          <p>AISHE (All India Survey on Higher Education) is conducted by the Department of Higher Education, Ministry of Education. The survey collects data on all higher educational institutions in India covering student enrolment, teachers, infrastructure, and financial aspects. The data is used for planning and policymaking in higher education.</p>
          <a href="/pdfs/committee/provisional-certificate.pdf" target="_blank" rel="noopener" style={{display:'inline-flex',alignItems:'center',gap:'0.5rem',marginTop:'0.5rem',background:'var(--primary-navy)',color:'#fff',padding:'0.6rem 1.5rem',borderRadius:'6px',fontWeight:'700',textDecoration:'none'}}><i className="fas fa-file-pdf"></i> Certificate of AISHE</a>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="section-title">NIRF &amp; AISHE &ndash; Faculty In-charge</h2>
        <div className="reveal" style={{overflowX:'auto'}}>
          <table className="data-table">
            <thead>
              <tr>
                <th className="center" style={{width:'60px'}}>S.NO</th>
                <th>Faculty Incharge</th>
                <th>Designation</th>
                <th style={{width:'160px'}}>Position</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name:'Dr. R. SHENBAGAVALLI', desig:'Associate Professor', role:'Coordinator', badge:'badge-coord' },
                { name:'Dr. A. Subbulakshmi', desig:'Guest Lecturer', role:'Member', badge:'badge-member' },
                { name:'Dr. S. Yuvarani', desig:'Computer Programmer', role:'Member', badge:'badge-member' },
              ].map((r, i) => (
                <tr key={r.name}>
                  <td className="sl">{i + 1}</td>
                  <td className="name-col">{r.name}</td>
                  <td>{r.desig}</td>
                  <td><span className={`role-badge ${r.badge}`}>{r.role}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default NirfAishe;
