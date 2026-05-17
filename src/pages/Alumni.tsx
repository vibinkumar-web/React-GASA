import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const alumniCss = `
  .objectives-list { list-style:none; padding:0; margin:1.25rem 0 0; display:flex; flex-direction:column; gap:0.75rem; }
  .objectives-list li { display:flex; align-items:flex-start; gap:0.75rem; font-size:0.95rem; color:#444; line-height:1.65; }
  .objectives-list li::before { content:''; display:block; width:8px; height:8px; min-width:8px; border-radius:50%; background:var(--accent-gold); margin-top:0.55rem; }
  .role-badge { display:inline-block; font-size:0.75rem; font-weight:700; padding:0.25rem 0.8rem; border-radius:20px; white-space:nowrap; }
  .badge-president { background:var(--primary-navy); color:#fff; }
  .badge-vp { background:#1565c0; color:#fff; }
  .badge-secretary { background:#8b1c2e; color:#fff; }
  .badge-jt-sec { background:#1a6e3c; color:#fff; }
  .badge-treasurer { background:#b45309; color:#fff; }
  .badge-exec { background:#5c3190; color:#fff; }
  .reg-link-box { margin-top:2.5rem; padding:1.25rem 1.5rem; background:#f0f3fa; border-left:4px solid var(--primary-navy); border-radius:8px; display:flex; align-items:center; gap:1rem; flex-wrap:wrap; }
  .reg-link-box p { margin:0; font-size:0.95rem; font-weight:600; color:var(--primary-navy); flex:1; }
  .reg-link-box a { font-size:0.85rem; font-weight:700; padding:0.5rem 1.2rem; border-radius:6px; background:var(--primary-navy); color:#fff; text-decoration:none; white-space:nowrap; }
`;

const Alumni = () => (
  <Layout>
    <style>{alumniCss}</style>
    <PageBanner
      title="Alumni Association"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Alumni' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">Government Arts and Science College Alumni Association, Sankarankovil</h2>
        <div className="about-content-block reveal">
          <p>The Alumni Association was established in March 2023. The GASC Alumni Association was registered as a society under the Tamil Nadu Act 27 of 1975 on 29th October 2025. The institution maintains an alumni network keeping former students connected. It is hoped that in future many alumni will give back to their alma mater through donations, volunteering and other forms of support.</p>
          <p style={{marginTop:'0.75rem'}}>Our alumni play a role in mentoring current students, offering guidance and advice based on their experiences. About five graduating cohorts have left the college, making valuable contributions to the society as well-rounded individuals.</p>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">The Objectives</h2>
        <p className="reveal" style={{color:'#555',marginBottom:'0.5rem'}}>The following are the core objectives of the alumni association:</p>
        <ul className="objectives-list reveal">
          <li>To maintain and strengthen the bond between former students and their alma mater, creating a sense of community and belonging.</li>
          <li>To provide mentorship, internship, scholarships and other forms of support to current students.</li>
          <li>To assist the institution in promoting achievements, programs, and events to a wider audience.</li>
          <li>To recognize and honor outstanding achievements of alumni in various fields to inspire and motivate current and future students.</li>
          <li>To offer opportunities for alumni to continue their education, such as postgraduate courses, certifications or workshops.</li>
          <li>To assist the institution with advocacy, volunteer work, and resources to further its mission and goals.</li>
        </ul>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="section-title">The Role of the Alumni</h2>
        <div className="about-content-block reveal">
          <p>Several alumni have achieved career success and are actively referring their juniors for job opportunities. Some have pursued advanced degrees at different institutions. Altogether, the Alumni Association works diligently to benefit the college and its students.</p>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">List of Executive Committee Members</h2>
        <p className="reveal" style={{textAlign:'center',fontWeight:'600',color:'var(--primary-navy)',marginBottom:'1.75rem',fontSize:'0.95rem',letterSpacing:'0.3px'}}>
          Government Arts and Science College Alumni Association, Sankarankovil
        </p>
        <div className="reveal" style={{overflowX:'auto'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.92rem'}}>
            <thead>
              <tr style={{background:'var(--primary-navy)',color:'#fff'}}>
                <th style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #c0c8dc',width:'60px'}}>S.No.</th>
                <th style={{padding:'0.8rem 1rem',textAlign:'left',border:'1px solid #c0c8dc'}}>Name &amp; Details</th>
                <th style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #c0c8dc'}}>Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{background:'#f8f9fb'}}>
                <td style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #e0e4ed',fontWeight:'700'}}>1</td>
                <td style={{padding:'0.8rem 1rem',border:'1px solid #e0e4ed'}}><strong style={{color:'var(--primary-navy)'}}>Dr. G. Venugopal</strong><br/><span style={{fontSize:'0.82rem',color:'#777'}}>Principal [FAC]</span></td>
                <td style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}><span className="role-badge badge-president">President</span></td>
              </tr>
              <tr>
                <td style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #e0e4ed',fontWeight:'700'}}>2</td>
                <td style={{padding:'0.8rem 1rem',border:'1px solid #e0e4ed'}}><strong style={{color:'var(--primary-navy)'}}>Ramar M.</strong><br/><span style={{fontSize:'0.82rem',color:'#777'}}>B.Com (2020&ndash;2021 Batch)</span></td>
                <td style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}><span className="role-badge badge-vp">Vice President</span></td>
              </tr>
              <tr style={{background:'#f8f9fb'}}>
                <td style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #e0e4ed',fontWeight:'700'}}>3</td>
                <td style={{padding:'0.8rem 1rem',border:'1px solid #e0e4ed'}}><strong style={{color:'var(--primary-navy)'}}>Dr. Shenbagavalli R.</strong><br/><span style={{fontSize:'0.82rem',color:'#777'}}>Associate Professor &amp; Head of Computer Science</span></td>
                <td style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}><span className="role-badge badge-secretary">Secretary</span></td>
              </tr>
              <tr>
                <td style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #e0e4ed',fontWeight:'700'}}>4</td>
                <td style={{padding:'0.8rem 1rem',border:'1px solid #e0e4ed'}}><strong style={{color:'var(--primary-navy)'}}>Rajan M.</strong><br/><span style={{fontSize:'0.82rem',color:'#777'}}>B.Sc. Computer Science (2020&ndash;2021 Batch)</span></td>
                <td style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}><span className="role-badge badge-jt-sec">Joint Secretary</span></td>
              </tr>
              <tr style={{background:'#f8f9fb'}}>
                <td style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #e0e4ed',fontWeight:'700'}}>5</td>
                <td style={{padding:'0.8rem 1rem',border:'1px solid #e0e4ed'}}><strong style={{color:'var(--primary-navy)'}}>Dr. K. Kalagopi</strong><br/><span style={{fontSize:'0.82rem',color:'#777'}}>Associate Professor &amp; Head of Tamil Department</span></td>
                <td style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}><span className="role-badge badge-treasurer">Treasurer</span></td>
              </tr>
              <tr>
                <td style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #e0e4ed',fontWeight:'700'}}>6</td>
                <td style={{padding:'0.8rem 1rem',border:'1px solid #e0e4ed'}}><strong style={{color:'var(--primary-navy)'}}>Nellai Ranjith G.</strong><br/><span style={{fontSize:'0.82rem',color:'#777'}}>B.A. Sociology (2020&ndash;2021 Batch)</span></td>
                <td style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}><span className="role-badge badge-exec">Executive Committee Member</span></td>
              </tr>
              <tr style={{background:'#f8f9fb'}}>
                <td style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #e0e4ed',fontWeight:'700'}}>7</td>
                <td style={{padding:'0.8rem 1rem',border:'1px solid #e0e4ed'}}><strong style={{color:'var(--primary-navy)'}}>Sudariyappan M.</strong><br/><span style={{fontSize:'0.82rem',color:'#777'}}>B.A. English (2020&ndash;2021 Batch)</span></td>
                <td style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}><span className="role-badge badge-exec">Executive Committee Member</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="reg-link-box reveal">
          <p>Alumni Association Registration Details</p>
          <a href="/pdfs/Alumini.pdf" target="_blank" rel="noopener">Click Here</a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Alumni;
