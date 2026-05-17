import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const placementCss = `
  .placement-incharge-card { background:#f8f9fb; border-left:4px solid var(--primary-navy); border-radius:8px; padding:1.5rem 2rem; margin-top:1.5rem; display:inline-block; min-width:280px; }
  .placement-incharge-card .pi-name { font-size:1.1rem; font-weight:700; color:var(--primary-navy); margin-bottom:0.25rem; }
  .placement-incharge-card p { margin:0.2rem 0; font-size:0.93rem; color:#444; }
  .placement-incharge-card .pi-contact { margin-top:0.75rem; font-size:0.9rem; }
  .motto-box { background:var(--primary-navy); color:#fff; border-radius:8px; padding:1rem 2rem; display:inline-block; font-size:1.05rem; font-style:italic; font-weight:600; margin-bottom:1.5rem; }
  .objectives-list { list-style:none; padding:0; margin:1rem 0 0 0; }
  .objectives-list li { padding:0.4rem 0 0.4rem 1.8rem; position:relative; font-size:0.95rem; color:#333; }
  .objectives-list li::before { content:''; position:absolute; left:0; top:0.65rem; width:10px; height:10px; border-radius:50%; background:#c9a84c; }
  .data-table { width:100%; border-collapse:collapse; font-size:0.92rem; margin-top:1.5rem; }
  .data-table thead tr { background:var(--primary-navy); color:#fff; }
  .data-table th { padding:0.8rem 1.1rem; text-align:left; border:1px solid #c0c8dc; }
  .data-table th.center, .data-table td.center { text-align:center; }
  .data-table tbody tr:nth-child(even) { background:#f8f9fb; }
  .data-table td { padding:0.75rem 1.1rem; border:1px solid #e0e4ed; }
  .data-table td.name-col { font-weight:700; color:var(--primary-navy); }
`;

const Placement = () => (
  <Layout>
    <style>{placementCss}</style>
    <PageBanner
      title="Placement / Career Guidance"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Placement' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">Career Guidance &amp; Placement Cell</h2>
        <div className="about-content-block reveal">
          <div className="motto-box">&#8220; Unleashing Opportunities and Building Success &#8221;</div>
          <p>Career Guidance and Placement cell was established in 2022 with intention of providing awareness on job opportunities and to imbue the skills, ethical values to the students and enhance them to meet the Organizational needs. The Career Guidance and Placement cell are the integral part of the institution and Placement cell provide all possible assistance to the students and to find employability. We produce graduates who are all equipped to handle working norms of industry in commerce with public and private sector.</p>
          <h3 style={{marginTop:'1.5rem',color:'var(--primary-navy)'}}>Objectives</h3>
          <ul className="objectives-list">
            <li>To aim at overall grooming of students to meet industry requirement.</li>
            <li>To train the students with different skill set and personality development to excel in career growth.</li>
            <li>To enrich the knowledge of student community with latest technology innovation and industry practices.</li>
            <li>To enhance creative and analytical professionals to achieve empowerment of the society.</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Placement In Charge</h2>
        <div className="reveal">
          <div className="placement-incharge-card">
            <div className="pi-name">Dr. N. Sukumaran M.A., M.Phil., Ph.D</div>
            <p>Assistant Professor &amp; Head</p>
            <p>Department of Sociology</p>
            <p>Government Arts and Science College, Sankarankovil &mdash; 627 756</p>
            <div className="pi-contact">
              <p><i className="fas fa-phone"></i> 9487329304</p>
              <p><i className="fas fa-envelope"></i> sukumaran77450@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="section-title">Placement Assistance</h2>
        <div className="reveal" style={{overflowX:'auto'}}>
          <table className="data-table">
            <thead>
              <tr>
                <th style={{width:'60px'}} className="center">Sl. No.</th>
                <th>Name</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="center">1</td><td className="name-col">Dr. Subbulakshmi A.</td><td>English</td></tr>
              <tr><td className="center">2</td><td className="name-col">Dr. Ramalakshmi T.</td><td>Commerce</td></tr>
              <tr><td className="center">3</td><td className="name-col">Dr. Jayaraj T.</td><td>Computer Science</td></tr>
              <tr><td className="center">4</td><td className="name-col">Dr. Bangusha Devi S.</td><td>Statistics</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default Placement;
