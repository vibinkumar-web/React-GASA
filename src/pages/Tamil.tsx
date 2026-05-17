import DeptLayout from '../components/DeptLayout';

const TABS = [
  { id: 'home', label: 'DEPT. HOME' },
  { id: 'faculty', label: 'FACULTY' },
  { id: 'syllabus', label: 'SYLLABUS' },
  { id: 'qbank', label: 'QUESTION BANK' },
];

const QBankSection = () => (
  <div style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)'}}>
    <p style={{color:'#555',lineHeight:'1.8'}}>Previous year university question papers and model question banks for all semesters.</p>
    <div style={{marginTop:'1.5rem',display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:'1rem'}}>
      {['Semester I & II','Semester III & IV'].map(s => (
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

const Tamil = () => (
  <DeptLayout deptName="DEPARTMENT OF" highlight="TAMIL" tabs={TABS}>
    {(activeTab) => (
      <>
        {activeTab === 'home' && (
          <>
            <h2 className="dept-heading">Head of the Department</h2>
            <div className="principal-section" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <div className="principal-photo">
                <a href="/pdfs/faculty/k_kalagopi.pdf" target="_blank" title="View Dr. K. Kalagopi's Profile">
                  <img src="/images/Staff/GL-Staff/Tamil-GL/kala gopi.jpeg" alt="Dr. K. Kalagopi, HOD Tamil" style={{objectFit:'cover',cursor:'pointer'}} />
                </a>
              </div>
              <div className="principal-text">
                <h3>DR. K. KALAGOPI</h3>
                <p className="designation">Associate Professor &amp; Head — Department of Tamil</p>
                <p>Dr. K. Kalagopi leads the Department of Tamil with a deep commitment to Tamil language and literature. Under her guidance, the department actively promotes Tamil heritage through academic programmes and cultural activities.</p>
                <p>She is dedicated to nurturing students' interest in classical and modern Tamil literature, preparing them for both academic and professional pursuits.</p>
              </div>
            </div>
            <div className="about-content-block" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <h2 className="dept-heading">History of the Department</h2>
              <p>The Department of Tamil was established in 2020 as one of the founding departments of Government Arts and Science College, Sankarankovil. Situated in the culturally rich southern Tamil Nadu, the department was envisioned as a centre to nurture and preserve the great tradition of Tamil literature and language.</p>
              <p>Since its establishment, the department teaches Part I Tamil to the first and second year students. The Department of Tamil has promoted Tamil heritage through literary clubs, cultural events, classical poetry recitations, and inter-collegiate Tamil competitions, keeping the vibrant literary tradition alive in the institution.</p>
            </div>
            <div className="about-content-block" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <h2 className="dept-heading">About the Department</h2>
              <p>The Department of Tamil offers the <strong>B.A. Tamil</strong> programme, a three-year undergraduate course affiliated to Manonmaniam Sundaranar University, Tirunelveli. The department is dedicated to preserving and promoting Tamil language, literature, and culture among students from the region.</p>
              <p>The department covers classical Sangam literature, medieval Tamil poetry, modern Tamil prose, and the rich literary tradition of Tamil Nadu. Students are trained through seminars, literary club activities, and participation in inter-collegiate Tamil events, preparing them for careers in education, journalism, civil services, and further postgraduate studies.</p>
            </div>
            <div className="vision-mission" style={{marginTop:'1rem'}}>
              <div className="vm-card"><h3>Our Mission</h3><p>To impart profound knowledge in Tamil language and literature, instilling ethical values and promoting linguistic research and creative writing among students.</p></div>
              <div className="vm-card"><h3>Our Vision</h3><p>To be a beacon of Tamil literary excellence, preserving the cultural heritage of the language while adapting it to modern technological and academic advancements.</p></div>
              <div className="vm-card" style={{gridColumn:'1 / -1'}}><h3>Our Motto</h3><p><em>"தமிழ் என்பது நமது உயிர்மூச்சு."</em> (Tamil is our breath of life.) — We celebrate and sustain the world's oldest living classical language.</p></div>
            </div>
          </>
        )}
        {activeTab === 'faculty' && (
          <>
            <h2 className="dept-heading">Faculty Members</h2>
            <div className="faculty-grid">
              {[
                { name:'DR. K. KALAGOPI', qual:'M.A., M.Phil., Ph.D.', desig:'Head of the Department', img:'images/Staff/GL-Staff/Tamil-GL/kala gopi.jpeg', pdf:'faculty/k_kalagopi.pdf', contain:false },
                { name:'DR. C. MANOGARAMMAL', qual:'M.A., M.Phil., Ph.D.', desig:'GUEST LECTURER', img:'images/Staff/GL-Staff/Tamil-GL/manoharammal.jpeg', pdf:'faculty/c_manogarammal.pdf', contain:false },
                { name:'Dr. S. MAHESHPANDI', qual:'M.A., B.Ed., M.Phil., Ph.D.,', desig:'GUEST LECTURER', img:'images/Staff/GL-Staff/Tamil-GL/mahespandi.jpeg', pdf:'faculty/s_maheshpandi.pdf', contain:false },
                { name:'MRS. CHANDRA', qual:'M.A.', desig:'PTA STAFF', img:'images/Logo/sankarankovil-college-logo-1.png', pdf:null, contain:true },
              ].map(f => (
                <div key={f.name} className="faculty-card">
                  {f.pdf ? (
                    <a href={`/pdfs/${f.pdf}`} target="_blank" title="View Profile">
                      <img src={`/${f.img}`} alt={f.name} className="faculty-photo" style={f.contain ? {objectFit:'contain',background:'#f5f7fa',padding:'0.5rem',cursor:'pointer'} : {objectFit:'cover',cursor:'pointer'}} />
                    </a>
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
        {activeTab === 'syllabus' && (
          <>
            <h2 className="dept-heading">Syllabus</h2>
            <div style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)'}}>
              <p style={{color:'#555',lineHeight:'1.8'}}>The syllabus for this programme is prescribed by Manonmaniam Sundaranar University, Tirunelveli.</p>
              <div style={{marginTop:'1.5rem'}}>
                <a href="/pdfs/syllabus/tamil_syllabus.pdf" target="_blank" style={{display:'inline-flex',alignItems:'center',gap:'0.9rem',border:'1px solid #cdd5e0',borderRadius:'10px',padding:'1.2rem 2rem',textDecoration:'none',background:'#f0f4ff',color:'var(--primary-navy)',fontWeight:'700'}}>
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

export default Tamil;
