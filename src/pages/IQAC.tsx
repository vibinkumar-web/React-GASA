import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const iqacCss = `
  .iqac-list { list-style:none; padding:0; margin:0.75rem 0 0 0; }
  .iqac-list li { padding:0.45rem 0 0.45rem 1.8rem; position:relative; font-size:0.95rem; color:#333; }
  .iqac-list li::before { content:''; position:absolute; left:0; top:0.75rem; width:10px; height:10px; border-radius:50%; background:#c9a84c; }
  .iqac-section-heading { margin-top:1.75rem; color:var(--primary-navy); font-size:1.05rem; font-weight:700; }
  .data-table { width:100%; border-collapse:collapse; font-size:0.92rem; margin-top:1.5rem; }
  .data-table thead tr { background:var(--primary-navy); color:#fff; }
  .data-table th { padding:0.8rem 1.1rem; text-align:left; border:1px solid #c0c8dc; }
  .data-table th.center { text-align:center; }
  .data-table tbody tr:nth-child(even) { background:#f8f9fb; }
  .data-table td { padding:0.75rem 1.1rem; border:1px solid #e0e4ed; vertical-align:top; }
  .data-table td.sl { text-align:center; font-weight:600; }
  .data-table td.name-col { font-weight:700; color:var(--primary-navy); }
  .role-badge { display:inline-block; font-size:0.75rem; font-weight:700; padding:0.25rem 0.75rem; border-radius:20px; color:#fff; white-space:nowrap; }
  .badge-chair { background:var(--primary-navy); }
  .badge-coord { background:#8b1a2f; }
  .badge-teacher { background:#1a6e3c; }
  .badge-admin { background:#5c3190; }
  .badge-society { background:#b56c00; }
  .badge-alumni { background:#0d5c8a; }
  .badge-student { background:#3d7a3d; }
  .badge-employer { background:#444; }
`;

const IQAC = () => (
  <Layout>
    <style>{iqacCss}</style>
    <PageBanner
      title="Internal Quality Assurance Cell (IQAC)"
      breadcrumbs={[{ label:'Home', path:'/' }, { label:'Committee', path:'/committee' }, { label:'IQAC' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">About IQAC</h2>
        <div className="about-content-block reveal">
          <p><strong>IQAC Co-ordinator:</strong> Dr. N. SUKUMARAN, M.A., M.Phil., Ph.D., Assistant Professor &amp; Head of Sociology</p>
          <p style={{marginTop:'0.75rem'}}>The Internal Quality Assurance Cell (IQAC) is formulated for monitoring the quality parameters of GASC. IQAC follows the mechanisms for quality checks / internal audit and in the College Academic Council.</p>

          <h3 className="iqac-section-heading">IQAC Plays a Key Role in</h3>
          <ul className="iqac-list">
            <li>Introducing new courses</li>
            <li>Maintaining academic quality standards</li>
            <li>Encouraging research activities and paper presentations</li>
            <li>Streamlining examination processes</li>
            <li>Addressing student concerns</li>
            <li>Promoting effective use of laboratory and computer facilities</li>
            <li>Supporting extension activities</li>
            <li>Ensuring proper verification and maintenance of institutional records and stock</li>
            <li>Motivating staff members to adapt to challenges and improve performance in the changing educational environment</li>
          </ul>

          <h3 className="iqac-section-heading">Objectives</h3>
          <ul className="iqac-list">
            <li>To develop a systematic and consistent approach for improving academic and administrative performance</li>
            <li>To promote quality enhancement through best practices and institutional values</li>
            <li>To improve students' academic performance</li>
            <li>To ensure stakeholder satisfaction</li>
            <li>To promote research and creativity</li>
            <li>To support faculty development (academic and professional)</li>
            <li>To strengthen industry&ndash;academia collaboration</li>
            <li>To provide value-based education for holistic development</li>
            <li>To create diverse career opportunities for students</li>
            <li>To ensure participatory and transparent management</li>
            <li>To encourage entrepreneurial skills among students</li>
          </ul>

          <h3 className="iqac-section-heading">Functions</h3>
          <ul className="iqac-list">
            <li>Develop and implement quality benchmarks for academic and administrative activities</li>
            <li>Promote a learner-centered environment for effective education</li>
            <li>Collect and analyze feedback from students, parents, and stakeholders</li>
            <li>Organize workshops, seminars, and quality-related programs</li>
            <li>Document activities related to quality improvement</li>
            <li>Implement and promote e-Governance practices</li>
            <li>Maintain and enhance institutional data systems</li>
            <li>Foster a strong research culture in the institution</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">IQAC &ndash; Committee Composition</h2>
        <div className="about-content-block reveal" style={{marginBottom:'1.25rem'}}>
          <p style={{fontSize:'0.95rem',color:'#444',lineHeight:'1.75',marginBottom:'0.75rem'}}>The composition of the IQAC may be as follows:</p>
          <ol style={{margin:'0',paddingLeft:'1.6rem',fontSize:'0.95rem',color:'#333'}}>
            <li style={{padding:'0.4rem 0',borderBottom:'1px solid #eee'}}>1. Chairperson: Head of the Institution</li>
            <li style={{padding:'0.4rem 0',borderBottom:'1px solid #eee'}}>2. One of the teachers as the coordinator of the IQAC</li>
            <li style={{padding:'0.4rem 0',borderBottom:'1px solid #eee'}}>3. Three to eight teachers</li>
            <li style={{padding:'0.4rem 0',borderBottom:'1px solid #eee'}}>4. One or two members from the Management</li>
            <li style={{padding:'0.4rem 0',borderBottom:'1px solid #eee'}}>5. One / two nominees from local society (Stakeholders / Industrialists)</li>
            <li style={{padding:'0.4rem 0',borderBottom:'1px solid #eee'}}>6. One or two External Experts</li>
            <li style={{padding:'0.4rem 0'}}>7. One or two Students and Alumni Members</li>
          </ol>
        </div>
        <div className="reveal" style={{textAlign:'center',padding:'1.5rem 0'}}>
          <a href="/pdfs/committee/IQAC COMMITTEE COMPOSITION.pdf" target="_blank" style={{display:'inline-block',padding:'0.75rem 2rem',background:'var(--primary-navy)',color:'#fff',fontWeight:'700',fontSize:'0.95rem',borderRadius:'6px',textDecoration:'none',letterSpacing:'0.03em'}}>
            <i className="fas fa-file-alt"></i> Click Here to View Committee Composition
          </a>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="section-title">Quality Policy</h2>
        <div className="reveal">
          <p style={{background:'#f0f4fb',borderLeft:'4px solid var(--primary-blue,#1a3c6e)',padding:'1rem 1.25rem',borderRadius:'0 6px 6px 0',fontSize:'0.97rem',color:'#2c3e50',lineHeight:'1.8',fontStyle:'italic'}}>
            Government Arts and Science College, Sankarankovil shall strive to achieve global standards of excellence in teaching, lifelong learning and research focused on holistic development of students in the emerging domains of knowledge sustaining quality.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default IQAC;
