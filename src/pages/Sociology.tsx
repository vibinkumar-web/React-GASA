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

const Sociology = () => (
  <DeptLayout deptName="DEPARTMENT OF" highlight="SOCIOLOGY" tabs={TABS}>
    {(activeTab) => (
      <>
        {activeTab === 'home' && (
          <>
            <h2 className="dept-heading">Head of the Department</h2>
            <div className="principal-section" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <div className="principal-photo">
                <a href="/pdfs/faculty/n_sukumaran.pdf" target="_blank" title="View Dr. N. Sukumaran Profile">
                  <img src="/images/Logo/sankarankovil-college-logo-1.png" alt="Dr. N. Sukumaran, HOD Sociology" style={{objectFit:'contain',background:'#f5f7fa',padding:'0.5rem',cursor:'pointer'}} />
                </a>
              </div>
              <div className="principal-text">
                <h3>Dr. N. Sukumaran</h3>
                <p className="designation">Assistant Professor &amp; Head — Department of Sociology</p>
                <p>Dr. N. Sukumaran heads the Department of Sociology with deep expertise in social theory, community development, and sociological research. His scholarly work and commitment to student welfare have made the department a centre of learning and social awareness.</p>
                <p>Under his guidance, students have conducted meaningful field studies in the Tenkasi district, contributing to community-based research and social welfare activities. He actively mentors students for civil services and higher education opportunities.</p>
              </div>
            </div>
            <div className="about-content-block" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <h2 className="dept-heading">History of the Department</h2>
              <p>The Department of Sociology was established in 2020 as part of Government Arts and Science College, Sankarankovil. It was created to address the strong social science foundation needed by communities in southern Tamil Nadu, particularly for students aspiring to civil services and social work.</p>
              <p>Since its founding, the department has actively engaged with local communities, conducting field studies and awareness programmes. It has fostered a culture of social inquiry and critical sociological thinking among students of the Tenkasi region.</p>
            </div>
            <div className="about-content-block" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <h2 className="dept-heading">About the Department</h2>
              <p>The Department of Sociology offers the <strong>B.A. Sociology</strong> programme, a three-year undergraduate course affiliated to Manonmaniam Sundaranar University, Tirunelveli. The department explores the dynamics of human society, social structures, culture, and change, equipping students to understand and address real-world social issues.</p>
              <p>The programme emphasises social theory, research methodology, and field studies. Students gain insights into community development, social welfare, gender studies, tribal studies, and social movements, preparing them for roles in NGOs, civil services, social work, and research.</p>
            </div>
            <h2 className="dept-heading" style={{marginTop:'2rem'}}>Mission, Vision &amp; Motto</h2>
            <div className="vision-mission" style={{marginTop:'1rem'}}>
              <div className="vm-card"><h3>Our Mission</h3><p>To cultivate a deep sociological understanding through academic rigor, critical thinking, and community engagement, empowering students to drive meaningful social change.</p></div>
              <div className="vm-card"><h3>Our Vision</h3><p>To build an enlightened, inclusive society by producing sociologically informed citizens who are committed to social justice, equity, and human welfare.</p></div>
              <div className="vm-card" style={{gridColumn:'1 / -1'}}><h3>Our Motto</h3><p><em>"Understanding society is the first step to changing it."</em></p></div>
            </div>
          </>
        )}
        {activeTab === 'faculty' && (
          <>
            <h2 className="dept-heading">Faculty Members</h2>
            <div className="faculty-grid">
              {[
                { name:'DR. N. SUKUMARAN', qual:'M.A., M.Phil., Ph.D., MSW, MLM', desig:'Head of the Department', img:'images/Logo/sankarankovil-college-logo-1.png', pdf:'faculty/n_sukumaran.pdf', contain:true },
                { name:'Mrs. VENNILA D', qual:'M.A.,', desig:'GUEST LECTURER', img:'images/Staff/GL-Staff/Socio-GL/vennila.jpg', pdf:'faculty/d_vennila.pdf', contain:false },
                { name:'DR. PALPANDI P', qual:'M.A., Ph.D.', desig:'GUEST LECTURER', img:'images/Staff/GL-Staff/Socio-GL/Dr. Palpandi.jpg', pdf:'faculty/palpandi.pdf', contain:false },
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
              <div className="dept-course-item dci-sociology">
                <div className="dci-info"><h3 className="dci-name">B.A. Sociology</h3></div>
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
                <a href="/pdfs/Syllabus/BA-Sociology.pdf" target="_blank" style={{display:'inline-flex',alignItems:'center',gap:'0.9rem',border:'1px solid #cdd5e0',borderRadius:'10px',padding:'1.2rem 2rem',textDecoration:'none',background:'#f0f4ff',color:'var(--primary-navy)',fontWeight:'700'}}>
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

export default Sociology;
