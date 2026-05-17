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

const Commerce = () => (
  <DeptLayout deptName="DEPARTMENT OF" highlight="COMMERCE" tabs={TABS}>
    {(activeTab) => (
      <>
        {activeTab === 'home' && (
          <>
            <h2 className="dept-heading">Head of the Department</h2>
            <div className="principal-section" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <div className="principal-photo">
                <a href="/pdfs/faculty/Venugopal CV.pdf" target="_blank" title="View Dr. G. Venugopal's Profile">
                  <img src="/images/Staff/GL-Staff/Commerce-GL/venugopal.png" alt="Dr. G. Venugopal, HOD Commerce" style={{objectFit:'cover',cursor:'pointer'}} />
                </a>
              </div>
              <div className="principal-text">
                <h3>DR. G. VENUGOPAL</h3>
                <p className="designation">Associate Professor &amp; Head — Department of Commerce</p>
                <p>Dr. G. Venugopal leads the Department of Commerce with extensive expertise in commerce and business studies. He provides academic leadership and mentors students towards their professional goals in commerce and finance.</p>
                <p>Under his guidance, students are well-prepared for placement opportunities in the banking, finance, and corporate sectors as well as for higher studies in M.Com, MBA, and professional accountancy courses like CA and CMA.</p>
              </div>
            </div>
            <div className="about-content-block" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <h2 className="dept-heading">History of the Department</h2>
              <p>The Department of Commerce was established in 2020 alongside the college. From its founding, the department has focused on delivering quality commerce education to students from the Tenkasi region, preparing them for the demands of a rapidly evolving economic landscape.</p>
              <p>Since inception, the department has organised industry visits, guest lectures by chartered accountants, and certification workshops to bridge the gap between academic learning and industry requirements.</p>
            </div>
            <div className="about-content-block" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <h2 className="dept-heading">About the Department</h2>
              <p>The Department of Commerce offers the <strong>B.Com</strong> programme, a three-year undergraduate course affiliated to Manonmaniam Sundaranar University, Tirunelveli. The department prepares students for careers in accounting, finance, banking, taxation, and business management.</p>
              <p>The curriculum covers core commerce subjects including Financial Accounting, Business Law, Corporate Accounting, Income Tax, and Auditing. Value-added certification courses in <strong>Tally ERP</strong> and <strong>GST</strong> are integrated to enhance employability.</p>
            </div>
            <h2 className="dept-heading" style={{marginTop:'2rem'}}>Mission, Vision &amp; Motto</h2>
            <div className="vision-mission" style={{marginTop:'1rem'}}>
              <div className="vm-card"><h3>Our Mission</h3><p>To impart quality commerce education, bridging the gap between academic learning and industry prerequisites, and to foster entrepreneurial skills.</p></div>
              <div className="vm-card"><h3>Our Vision</h3><p>To produce competent business professionals and entrepreneurs capable of navigating and leading the dynamic global business environment effectively.</p></div>
              <div className="vm-card" style={{gridColumn:'1 / -1'}}><h3>Our Motto</h3><p><em>"Commerce is the engine of a nation's prosperity."</em></p></div>
            </div>
          </>
        )}
        {activeTab === 'faculty' && (
          <>
            <h2 className="dept-heading">Faculty Members</h2>
            <div className="faculty-grid">
              {[
                { name:'DR. G. VENUGOPAL', qual:'M.COM., M.Phil., MBA., Ph.D.', desig:'Head of the Department', img:'images/Staff/GL-Staff/Commerce-GL/venugopal.png', pdf:'faculty/Venugopal CV.pdf' },
                { name:'DR. T. RAMALAKSHMI', qual:'M.COM., Ph.D.', desig:'GUEST LECTURER', img:'images/Staff/GL-Staff/Commerce-GL/Dr RAMALAKSHMI.jpeg', pdf:'faculty/t_ramalakshmi.pdf' },
                { name:'DR. J. SIDHARATHULMUNTHAGA', qual:'M.COM., Ph.D.', desig:'GUEST LECTURER', img:'images/Staff/GL-Staff/Commerce-GL/Dr Siddhartual Muthanga.jpeg', pdf:'faculty/j_sidharathul_munthaga.pdf' },
                { name:'MRS. VALLIMAYIL', qual:'M.Com., M.Phil.,', desig:'PTA STAFF', img:'images/Staff/GL-Staff/Commerce-GL/Mrs. Vallimayil.jpg', pdf:null },
                { name:'MR. A. PEREZHIL PRADHAP SINGH', qual:'M.Com.,', desig:'PTA STAFF', img:'images/Staff/PTA-Staff/P.PRATAP SINGH.jpeg', pdf:null },
              ].map(f => (
                <div key={f.name} className="faculty-card">
                  {f.pdf ? (
                    <a href={`/pdfs/${f.pdf}`} target="_blank" title="View Profile"><img src={`/${f.img}`} alt={f.name} className="faculty-photo" style={{objectFit:'cover',cursor:'pointer'}} /></a>
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
              <div className="dept-course-item dci-commerce">
                <div className="dci-info"><h3 className="dci-name">B.Com</h3></div>
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
                <a href="/pdfs/Syllabus/B.Com.pdf" target="_blank" style={{display:'inline-flex',alignItems:'center',gap:'0.9rem',border:'1px solid #cdd5e0',borderRadius:'10px',padding:'1.2rem 2rem',textDecoration:'none',background:'#f0f4ff',color:'var(--primary-navy)',fontWeight:'700'}}>
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

export default Commerce;
