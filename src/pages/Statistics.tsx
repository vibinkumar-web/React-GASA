import DeptLayout from '../components/DeptLayout';

const TABS = [
  { id: 'home', label: 'DEPT. HOME' },
  { id: 'faculty', label: 'FACULTY' },
  { id: 'courses', label: 'COURSES OFFERED' },
  { id: 'syllabus', label: 'SYLLABUS' },
  { id: 'qbank', label: 'QUESTION BANK' },
];

const QBankSection = () => (
  <div style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)'}}>
    <p style={{color:'#555',lineHeight:'1.8'}}>Previous year university question papers and model question banks for all semesters.</p>
    <div style={{marginTop:'1.5rem',display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:'1rem'}}>
      {['Semester I & II','Semester III & IV','Semester V & VI'].map(s => (
        <div key={s} style={{border:'1px solid #e4e9f0',borderRadius:'10px',padding:'1.2rem',display:'flex',alignItems:'center',gap:'0.9rem'}}>
          <span style={{fontSize:'1.6rem'}}>&#128209;</span>
          <div>
            <div style={{fontWeight:'700',color:'var(--primary-navy)',fontSize:'0.92rem'}}>{s}</div>
            <span style={{fontSize:'0.75rem',fontWeight:'700',padding:'0.15rem 0.5rem',borderRadius:'20px',background:'#fff3cd',color:'#856404',border:'1px solid #ffc107'}}>Coming Soon</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Statistics = () => (
  <DeptLayout deptName="DEPARTMENT OF" highlight="STATISTICS" tabs={TABS}>
    {(activeTab) => (
      <>
        {activeTab === 'home' && (
          <>
            <h2 className="dept-heading">Head of the Department</h2>
            <div className="principal-section" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <div className="principal-photo">
                <a href="/pdfs/faculty/r_shenbagavalli.pdf" target="_blank" title="View Dr. R. Shenbagavalli Profile">
                  <img src="/images/Staff/GL-Staff/Computer-GL/Shenbagavalli.png" alt="Dr. R. Shenbagavalli, HOD Statistics (I/C)" style={{objectFit:'cover',cursor:'pointer'}} />
                </a>
              </div>
              <div className="principal-text">
                <h3>DR. R. SHENBAGAVALLI</h3>
                <p className="designation">Associate Professor &amp; Head — Department of Statistics (I/C)</p>
                <p>The Department of Statistics is committed to academic excellence in statistical methods, data analysis, and research-oriented learning. The department focuses on developing students' analytical thinking, problem-solving abilities, and practical data handling skills through quality education and guidance.</p>
                <p>Students are encouraged to achieve strong academic performance and gain exposure to real-world applications in statistics, data analytics, and research fields. The department continuously supports students in building professional knowledge and career-oriented skills for future opportunities.</p>
              </div>
            </div>
            <div className="about-content-block" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <h2 className="dept-heading">History of the Department</h2>
              <p>The Department of Statistics was established in 2020 as part of Government Arts and Science College, Sankarankovil. The department was founded to meet the growing demand for trained statisticians and data analysts in both the public and private sectors.</p>
              <p>Since its founding, the department has conducted seminars and workshops in applied statistics, research methodology, and data interpretation, equipping students for careers in academia, government statistical services, and the data-driven industry.</p>
            </div>
            <div className="about-content-block" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <h2 className="dept-heading">About the Department</h2>
              <p>The Department of Statistics offers the <strong>B.Sc. Statistics</strong> programme, a three-year undergraduate course affiliated to Manonmaniam Sundaranar University, Tirunelveli. The department provides a strong foundation in statistical theory, probability, data analysis, and mathematical methods applicable across diverse fields.</p>
              <p>The programme trains students in both theoretical and applied statistics, equipping them with skills in data collection, analysis, and interpretation. Students are prepared for careers in research, data analytics, actuarial science, and government statistical services.</p>
            </div>
            <h2 className="dept-heading" style={{marginTop:'2rem'}}>Mission, Vision &amp; Motto</h2>
            <div className="vision-mission" style={{marginTop:'1rem'}}>
              <div className="vm-card"><h3>Our Mission</h3><p>To deliver comprehensive education in statistical sciences, fostering analytical, problem-solving, and computational skills for data-driven decision making.</p></div>
              <div className="vm-card"><h3>Our Vision</h3><p>To emerge as a premier center for statistical learning and research, producing competent statisticians who can contribute meaningfully to science, industry, and society.</p></div>
              <div className="vm-card" style={{gridColumn:'1 / -1'}}><h3>Our Motto</h3><p><em>"In data we trust; with statistics we decide."</em></p></div>
            </div>
          </>
        )}
        {activeTab === 'faculty' && (
          <>
            <h2 className="dept-heading">Faculty Members</h2>
            <div className="faculty-grid">
              {[
                { name:'DR. R. SHENBAGAVALLI', qual:'', desig:'Head of the Department (I/C)', img:'images/Staff/GL-Staff/Computer-GL/Shenbagavalli.png', pdf:'faculty/r_shenbagavalli.pdf', contain:false },
                { name:'DR. BANGUSHA DEVI', qual:'', desig:'GUEST LECTURER', img:'images/Logo/sankarankovil-college-logo-1.png', pdf:'faculty/bangusha_devi.pdf', contain:true },
                { name:'DR. M. VELUSAMY', qual:'', desig:'GUEST LECTURER', img:'images/Logo/sankarankovil-college-logo-1.png', pdf:'faculty/m_velusamy.pdf', contain:true },
                { name:'DR. KABINATH', qual:'', desig:'GUEST LECTURER', img:'images/Logo/sankarankovil-college-logo-1.png', pdf:'faculty/m_velusamy.pdf', contain:true },
                { name:'DR. KRISHNAVENI', qual:'', desig:'GUEST LECTURER', img:'images/Logo/sankarankovil-college-logo-1.png', pdf:'faculty/m_velusamy.pdf', contain:true },
                { name:'MR. UTHAYAKUMAR', qual:'M.Sc., M.Phil.,', desig:'PTA STAFF', img:'images/Staff/PTA-Staff/udhaya kumar.JPG', pdf:null, contain:false },
              ].map(f => (
                <div key={f.name} className="faculty-card">
                  {f.pdf ? (
                    <a href={`/pdfs/${f.pdf}`} target="_blank" title="View Profile">
                      <img src={`/${f.img}`} alt={f.name} className="faculty-photo" style={f.contain ? {objectFit:'contain',background:'#f5f7fa',padding:'0.5rem',cursor:'pointer'} : {objectFit:'cover',cursor:'pointer'}} />
                    </a>
                  ) : (
                    <img src={`/${f.img}`} alt={f.name} className="faculty-photo" style={{objectFit:'cover'}} />
                  )}
                  <div className="faculty-info">
                    <h3>{f.name}</h3>
                    {f.qual && <p className="faculty-qual">{f.qual}</p>}
                    <p className="faculty-designation">{f.desig}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {activeTab === 'courses' && (
          <>
            <h2 className="dept-heading" style={{textAlign:'center',textTransform:'uppercase',letterSpacing:'2px'}}>Courses Offered</h2>
            <div className="dept-courses-wrap">
              <div className="dept-course-item dci-stats">
                <div className="dci-info"><h3 className="dci-name">B.Sc. Statistics</h3></div>
                <div className="dci-tags">
                  <span className="dci-tag"><i className="fas fa-clock"></i> 3 Years</span>
                  <span className="dci-tag"><i className="fas fa-layer-group"></i> 6 Semesters</span>
                </div>
              </div>
            </div>
          </>
        )}
        {activeTab === 'syllabus' && (
          <>
            <h2 className="dept-heading">Syllabus</h2>
            <div style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)'}}>
              <p style={{color:'#555',lineHeight:'1.8'}}>The syllabus for this programme is prescribed by Manonmaniam Sundaranar University, Tirunelveli.</p>
              <div style={{marginTop:'1.5rem'}}>
                <a href="/pdfs/Syllabus/BSc_Statistics.pdf" target="_blank" style={{display:'inline-flex',alignItems:'center',gap:'0.9rem',border:'1px solid #cdd5e0',borderRadius:'10px',padding:'1.2rem 2rem',textDecoration:'none',background:'#f0f4ff',color:'var(--primary-navy)',fontWeight:'700'}}>
                  <span style={{fontSize:'1.6rem'}}><i className="fas fa-file-alt"></i></span>
                  <div><div style={{fontSize:'0.95rem'}}>Syllabus</div><div style={{fontSize:'0.78rem',fontWeight:'400',color:'#555',marginTop:'0.1rem'}}>Click to view / download</div></div>
                </a>
              </div>
            </div>
          </>
        )}
        {activeTab === 'qbank' && (
          <>
            <h2 className="dept-heading">Question Bank Archive</h2>
            <QBankSection />
          </>
        )}
      </>
    )}
  </DeptLayout>
);

export default Statistics;
