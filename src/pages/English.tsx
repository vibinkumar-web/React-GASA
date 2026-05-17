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

const English = () => (
  <DeptLayout deptName="DEPARTMENT OF" highlight="ENGLISH" tabs={TABS}>
    {(activeTab) => (
      <>
        {activeTab === 'home' && (
          <>
            <h2 className="dept-heading">Head of the Department</h2>
            <div className="principal-section" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <div className="principal-photo">
                <a href="/pdfs/faculty/k_kalagopi.pdf" target="_blank" title="View Dr. K. Kalagopi's Profile">
                  <img src="/images/Staff/GL-Staff/Tamil-GL/kala gopi.jpeg" alt="Dr. K. Kalagopi, HOD English (Incharge)" style={{objectFit:'cover',cursor:'pointer'}} />
                </a>
              </div>
              <div className="principal-text">
                <h3>DR. K. KALAGOPI</h3>
                <p className="designation">Associate Professor &amp; Head — Department of English (I/C)</p>
                <p>The Department of English is dedicated to promoting academic excellence in language, literature, and communication studies. The department encourages students to develop strong communication skills, creative thinking, and literary knowledge through quality learning experiences and academic activities.</p>
                <p>Students are guided to enhance their academic and professional abilities while actively participating in cultural and literary programs. The department focuses on creating an inclusive learning environment that supports personal growth, confidence, and future career opportunities.</p>
              </div>
            </div>
            <div className="about-content-block" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <h2 className="dept-heading">History of the Department</h2>
              <p>The Department of English was established in the year 2020 when Government Arts and Science College, Sankarankovil was founded. Since its inception, the department has been committed to developing English language proficiency and literary awareness among students from rural and semi-urban backgrounds of the Tenkasi district.</p>
              <p>Over the years, the department has grown in size and academic stature, conducting seminars, workshops, and guest lectures to supplement classroom learning. The department plays a key role in strengthening communication skills across all disciplines of the college.</p>
            </div>
            <div className="about-content-block" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <h2 className="dept-heading">About the Department</h2>
              <p>The Department of English offers the <strong>B.A. English</strong> programme, a three-year undergraduate course affiliated to Manonmaniam Sundaranar University, Tirunelveli. The department is committed to developing proficiency in English language, literature, and communication among students from rural and semi-urban backgrounds.</p>
              <p>The department emphasises both classical and contemporary English literature, linguistics, and communication skills. Students are trained through language lab sessions, literary club activities, seminars, and guest lectures by eminent scholars.</p>
            </div>
            <h2 className="dept-heading" style={{marginTop:'2rem'}}>Mission, Vision &amp; Motto</h2>
            <div className="vision-mission" style={{marginTop:'1rem'}}>
              <div className="vm-card"><h3>Our Mission</h3><p>To empower students with excellent communication skills, critical thinking, and a deep appreciation for literature, preparing them for global opportunities.</p></div>
              <div className="vm-card"><h3>Our Vision</h3><p>To be a premier centre for literary studies and language proficiency, transforming students into confident professionals and responsible citizens.</p></div>
              <div className="vm-card" style={{gridColumn:'1 / -1'}}><h3>Our Motto</h3><p><em>"Languages are the keys to knowledge."</em></p></div>
            </div>
          </>
        )}
        {activeTab === 'faculty' && (
          <>
            <h2 className="dept-heading">Faculty Members</h2>
            <div className="faculty-grid">
              {[
                { name:'DR. K. KALAGOPI', qual:'M.A., M.Phil., Ph.D.', desig:'Associate Professor & Head (I/C)', img:'images/Staff/GL-Staff/Tamil-GL/kala gopi.jpeg', pdf:'faculty/k_kalagopi.pdf' },
                { name:'DR. A. SUBBULAKSHMI', qual:'M.A., Ph.D.', desig:'GUEST LECTURER', img:'images/Staff/GL-Staff/Eng-GL/Dr SUBBLULAKSHMI.jpeg', pdf:'faculty/a_subbulakshmi.pdf' },
                { name:'Mrs. SHUNMUGAPRIYA S.', qual:'M.A.', desig:'GUEST LECTURER', img:'images/Staff/GL-Staff/Eng-GL/shunmugapriya.jpg', pdf:'faculty/s_shunmugapriya.pdf' },
                { name:'Mrs. R. MANI KALA BHARATHI', qual:'M.A., M.Phil.,', desig:'GUEST LECTURER', img:'images/Staff/GL-Staff/Eng-GL/DSC_2572.JPG', pdf:'faculty/r_manikalabharathi.pdf' },
                { name:'DR. R. BALAMURUGAN', qual:'M.A., M.Ed., M.Phil., Ph.D.,', desig:'GUEST LECTURER', img:'images/Staff/GL-Staff/Eng-GL/Dr BALAMURUGAN.jpg', pdf:'faculty/r_balamurugan.pdf' },
                { name:'MRS. AMALA', qual:'M.A., B.Ed.,', desig:'PTA STAFF', img:'images/Logo/sankarankovil-college-logo-1.png', pdf:null },
                { name:'MRS. RAJADEVI', qual:'M.A.,', desig:'PTA STAFF', img:'images/Staff/GL-Staff/Eng-GL/Raja devi.jpeg', pdf:null },
                { name:'MRS. ETHAYAMEENA', qual:'M.A.,', desig:'PTA STAFF', img:'images/Logo/sankarankovil-college-logo-1.png', pdf:null },
              ].map(f => (
                <div key={f.name} className="faculty-card">
                  {f.pdf ? (
                    <a href={`/pdfs/${f.pdf}`} target="_blank" title="View Profile"><img src={`/${f.img}`} alt={f.name} className="faculty-photo" style={{objectFit:'cover',cursor:'pointer'}} /></a>
                  ) : (
                    <img src={`/${f.img}`} alt={f.name} className="faculty-photo" style={{objectFit:'contain',background:'#f5f7fa',padding:'0.5rem'}} />
                  )}
                  <div className="faculty-info">
                    <h3>{f.name}</h3>
                    <p className="faculty-qual">{f.qual}</p>
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
              <div className="dept-course-item dci-english">
                <div className="dci-info"><h3 className="dci-name">B.A. English</h3></div>
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
                <a href="/pdfs/Syllabus/BA_English.pdf" target="_blank" style={{display:'inline-flex',alignItems:'center',gap:'0.9rem',border:'1px solid #cdd5e0',borderRadius:'10px',padding:'1.2rem 2rem',textDecoration:'none',background:'#f0f4ff',color:'var(--primary-navy)',fontWeight:'700'}}>
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

export default English;
