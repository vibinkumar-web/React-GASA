import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const clpCss = `
  .clp-list { list-style:none; padding:0; margin:1.25rem 0 0; display:flex; flex-direction:column; gap:0.75rem; }
  .clp-list li { display:flex; align-items:flex-start; gap:0.75rem; font-size:0.95rem; color:#444; line-height:1.65; }
  .clp-list li::before { content:''; display:block; width:8px; height:8px; min-width:8px; border-radius:50%; background:var(--accent-gold); margin-top:0.57rem; }
  .role-badge { display:inline-block; font-size:0.75rem; font-weight:700; padding:0.25rem 0.8rem; border-radius:20px; white-space:nowrap; }
  .badge-chair { background:var(--primary-navy); color:#fff; }
  .badge-coord { background:#8b1c2e; color:#fff; }
  .badge-member { background:#1a6e3c; color:#fff; }
`;

const CLP = () => (
  <Layout>
    <style>{clpCss}</style>
    <PageBanner
      title="Computer Literacy Programme"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Academics' }, { label: 'CLP' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">About CLP</h2>
        <div className="about-content-block reveal">
          <p>Computer Literacy Programme was initiated by the Government of Tamil Nadu in all Government colleges to enrich all undergraduate non-computer science students from the year <strong>2000&ndash;2001</strong>. An examination is conducted by the <strong>Directorate of Collegiate Education, Chennai</strong> at the end of the programme and a certificate is issued.</p>
          <p style={{marginTop:'0.75rem'}}>This programme is regulated by a CLP monitoring committee. All Non-computer science I year UG students benefit from this programme every year.</p>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Aim of the Programme</h2>
        <ul className="clp-list reveal">
          <li>To impart Computer knowledge to all the non-Computer Science students.</li>
          <li>To make all the college going students computer literate.</li>
          <li>To motivate the non-computer science students to apply Computer technology in their respective fields of study.</li>
          <li>To introduce modern Computer technology to staff members for teaching and evaluation techniques.</li>
          <li>The jobs have been installed for visually impaired students.</li>
        </ul>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Syllabus</h2>
        <div className="reveal" style={{display:'flex',flexWrap:'wrap',gap:'0.75rem',marginTop:'1.25rem',justifyContent:'center'}}>
          {['MS-Office','DTP','Networking','Multimedia','Internet','HTML','Tamil Word Processor'].map(s => (
            <span key={s} style={{background:'var(--primary-navy)',color:'#fff',padding:'0.5rem 1.25rem',borderRadius:'6px',fontSize:'0.9rem',fontWeight:'600'}}>{s}</span>
          ))}
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Benefits of CLP</h2>
        <div className="about-content-block reveal">
          <p>The Computer Literacy Program is being conducted for Non-computer science students. The students are being trained on state-of-the-art technologies both theoretically and practically. The orientation of the training is towards job-fetching in the IT market with renowned skills in recent developments.</p>
          <p style={{marginTop:'0.75rem'}}><strong>Course Curriculum:</strong> The students are trained on the basic knowledge of MS-Office, Internet technologies, basics of C language and HTML. A common examination (theory) is conducted for the CLP students throughout Tamil Nadu, at the end of the course. Based on their performance, a Certificate is issued from the Government of Tamil Nadu which is of great potential to them during their placement opportunities.</p>
        </div>
        <ul className="clp-list reveal" style={{marginTop:'1.5rem'}}>
          <li>CLP is a mandatory course for all I year non-computer science UG students, conducted with the support of Government of Tamil Nadu.</li>
          <li>The Tamil Nadu Government conducts a common written Examination and issues certificates to the successful candidates.</li>
          <li>They can register this certificate in employment office for employment opportunity.</li>
        </ul>
        <div className="about-content-block reveal" style={{marginTop:'1.5rem'}}>
          <p>This Programme helps the students to acquire essential knowledge in Computer. The students become familiar with the methods of PowerPoint presentation, e-mailing, and Internet usage. With the help of free laptop issued by the Tamil Nadu Government to the students, they are able to acquire updated knowledge.</p>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="section-title">CLP Committee Members</h2>
        <div className="reveal" style={{overflowX:'auto'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.92rem'}}>
            <thead>
              <tr style={{background:'var(--primary-navy)',color:'#fff'}}>
                <th style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #c0c8dc',width:'60px'}}>S.No.</th>
                <th style={{padding:'0.8rem 1rem',textAlign:'left',border:'1px solid #c0c8dc'}}>Name</th>
                <th style={{padding:'0.8rem 1rem',textAlign:'left',border:'1px solid #c0c8dc'}}>Designation</th>
                <th style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #c0c8dc'}}>Faculty In-charge</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{background:'#f8f9fb'}}>
                <td style={{padding:'0.75rem 1rem',textAlign:'center',border:'1px solid #e0e4ed',fontWeight:'700'}}>1</td>
                <td style={{padding:'0.75rem 1rem',border:'1px solid #e0e4ed',fontWeight:'700',color:'var(--primary-navy)'}}>Dr. G. Venugopal</td>
                <td style={{padding:'0.75rem 1rem',border:'1px solid #e0e4ed'}}>Principal [FAC]</td>
                <td style={{padding:'0.75rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}><span className="role-badge badge-chair">Chair Person</span></td>
              </tr>
              <tr>
                <td style={{padding:'0.75rem 1rem',textAlign:'center',border:'1px solid #e0e4ed',fontWeight:'700'}}>2</td>
                <td style={{padding:'0.75rem 1rem',border:'1px solid #e0e4ed',fontWeight:'700',color:'var(--primary-navy)'}}>Dr. R. Shenbagavalli</td>
                <td style={{padding:'0.75rem 1rem',border:'1px solid #e0e4ed'}}>Associate Professor &amp; Head of Computer Science</td>
                <td style={{padding:'0.75rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}><span className="role-badge badge-coord">Coordinator</span></td>
              </tr>
              <tr style={{background:'#f8f9fb'}}>
                <td style={{padding:'0.75rem 1rem',textAlign:'center',border:'1px solid #e0e4ed',fontWeight:'700'}}>3</td>
                <td style={{padding:'0.75rem 1rem',border:'1px solid #e0e4ed',fontWeight:'700',color:'var(--primary-navy)'}}>Dr. K. Kalagopi</td>
                <td style={{padding:'0.75rem 1rem',border:'1px solid #e0e4ed'}}>Associate Professor &amp; Head of English</td>
                <td style={{padding:'0.75rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}><span className="role-badge badge-member">Member</span></td>
              </tr>
              <tr>
                <td style={{padding:'0.75rem 1rem',textAlign:'center',border:'1px solid #e0e4ed',fontWeight:'700'}}>4</td>
                <td style={{padding:'0.75rem 1rem',border:'1px solid #e0e4ed',fontWeight:'700',color:'var(--primary-navy)'}}>Dr. N. Sukumaran</td>
                <td style={{padding:'0.75rem 1rem',border:'1px solid #e0e4ed'}}>Assistant Professor &amp; Head of Sociology</td>
                <td style={{padding:'0.75rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}><span className="role-badge badge-member">Member</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Faculty Details</h2>
        <div className="reveal" style={{overflowX:'auto'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.92rem'}}>
            <thead>
              <tr style={{background:'var(--primary-navy)',color:'#fff'}}>
                <th style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #c0c8dc',width:'60px'}}>S.No.</th>
                <th style={{padding:'0.8rem 1rem',textAlign:'left',border:'1px solid #c0c8dc'}}>Name of the Faculty</th>
                <th style={{padding:'0.8rem 1rem',textAlign:'left',border:'1px solid #c0c8dc'}}>Qualification</th>
                <th style={{padding:'0.8rem 1rem',textAlign:'left',border:'1px solid #c0c8dc'}}>Date of Joining</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{background:'#f8f9fb'}}>
                <td style={{padding:'0.75rem 1rem',textAlign:'center',border:'1px solid #e0e4ed',fontWeight:'700'}}>1</td>
                <td style={{padding:'0.75rem 1rem',border:'1px solid #e0e4ed',fontWeight:'700',color:'var(--primary-navy)'}}>Mrs. Nithya</td>
                <td style={{padding:'0.75rem 1rem',border:'1px solid #e0e4ed'}}>MCA., M.Phil</td>
                <td style={{padding:'0.75rem 1rem',border:'1px solid #e0e4ed'}}>14-09-2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default CLP;
