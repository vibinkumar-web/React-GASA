import DeptLayout from '../components/DeptLayout';
import { imgUrl } from '../utils/asset';

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

const ComputerScience = () => (
  <DeptLayout deptName="DEPARTMENT OF" highlight="COMPUTER SCIENCE" tabs={TABS}>
    {(activeTab) => (
      <>
        {activeTab === 'home' && (
          <>
            <h2 className="dept-heading">Head of the Department</h2>
            <div className="principal-section" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <div className="principal-photo">
                <a href="/pdfs/faculty/r_shenbagavalli.pdf" target="_blank" title="View Dr. R. Shenbagavalli Profile">
                  <img src={imgUrl("images/Staff/GL-Staff/Computer-GL/Shenbagavalli.png")} alt="Dr. R. Shenbagavalli, HOD Computer Science" style={{objectFit:'cover',cursor:'pointer'}} />
                </a>
              </div>
              <div className="principal-text">
                <h3>Dr. R. Shenbagavalli</h3>
                <p className="designation">Associate Professor &amp; Head — Department of Computer Science &amp; Statistics</p>
                <p>Dr. R. Shenbagavalli heads the Department of Computer Science with significant expertise in computer science and its applications. She is committed to providing students with the technical skills and practical knowledge required to succeed in the rapidly evolving IT industry.</p>
                <p>Under her leadership, the department has fostered a strong culture of innovation, coding, and academic research, with students regularly achieving distinction in university examinations and competitive events.</p>
              </div>
            </div>
            <div className="about-content-block" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <h2 className="dept-heading">History of the Department</h2>
              <p>The Department of Computer Science was established in 2020 as one of the founding departments of Government Arts and Science College, Sankarankovil. Recognising the growing importance of digital literacy, the department was created to bring quality computer science education to students of the Tenkasi district.</p>
              <p>Equipped with a modern computer laboratory and a dedicated faculty team, the department has steadily built a reputation for technical excellence and industry-oriented training.</p>
            </div>
            <div className="about-content-block" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',marginBottom:'2rem'}}>
              <h2 className="dept-heading">About the Department</h2>
              <p>The Department of Computer Science offers the <strong>B.Sc. Computer Science</strong> programme, a three-year undergraduate course affiliated to Manonmaniam Sundaranar University, Tirunelveli. The department is dedicated to producing industry-ready graduates with strong foundations in programming, software development, and emerging technologies.</p>
              <p>The curriculum covers programming languages, data structures, algorithms, database management, networking, and software engineering. Students are encouraged to pursue certifications and participate in coding competitions, hackathons, and technical symposiums.</p>
            </div>
            <h2 className="dept-heading" style={{marginTop:'2rem'}}>Mission, Vision &amp; Motto</h2>
            <div className="vision-mission" style={{marginTop:'1rem'}}>
              <div className="vm-card"><h3>Our Mission</h3><p>To provide quality computing education, foster innovation and logical reasoning, and equip students with technical skills required for the dynamic IT industry.</p></div>
              <div className="vm-card"><h3>Our Vision</h3><p>To be recognized as a centre of academic excellence in Computer Science, bridging the digital divide for rural talent and building ethical software professionals.</p></div>
              <div className="vm-card" style={{gridColumn:'1 / -1'}}><h3>Our Motto</h3><p><em>"Code with purpose, innovate with integrity."</em></p></div>
            </div>
          </>
        )}
        {activeTab === 'faculty' && (
          <>
            <h2 className="dept-heading">Faculty Members</h2>
            <div className="faculty-grid">
              {[
                { name:'DR. R. SHENBAGAVALLI', qual:'B.E(CSE)., MCA, M.Phil., Ph.D.', desig:'Head of the Department', img:'images/Staff/GL-Staff/Computer-GL/Shenbagavalli.png', pdf:'faculty/r_shenbagavalli.pdf', contain:false },
                { name:'T. JEYA RAJ', qual:'M.Sc., M.Phil.,', desig:'GUEST LECTURER', img:'images/Staff/GL-Staff/Computer-GL/jeya raj.JPG', pdf:null, contain:false },
                { name:'T. ILAM PARITHI', qual:'M.Sc., M.Phil.,', desig:'GUEST LECTURER', img:'images/Staff/GL-Staff/Computer-GL/ilamparuthi.JPG', pdf:null, contain:false },
                { name:'MRS. NITHA', qual:'MCA., M.Phil.', desig:'PTA STAFF', img:'images/Staff/PTA-Staff/Nithya.png', pdf:null, contain:false },
                { name:'MR. RAMAR', qual:'M.Sc., M.Phil.,', desig:'PTA STAFF', img:'images/Staff/PTA-Staff/RamarS.jpg', pdf:null, contain:false },
              ].map(f => (
                <div key={f.name} className="faculty-card">
                  {f.pdf ? (
                    <a href={`/pdfs/${f.pdf}`} target="_blank" title="View Profile">
                      <img src={imgUrl(f.img)} alt={f.name} className="faculty-photo" style={f.contain ? {objectFit:'contain',background:'#f5f7fa',padding:'0.5rem',cursor:'pointer'} : {objectFit:'cover',cursor:'pointer'}} />
                    </a>
                  ) : (
                    <img src={imgUrl(f.img)} alt={f.name} className="faculty-photo" style={{objectFit:'cover'}} />
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
              <div className="dept-course-item dci-cs">
                <div className="dci-info"><h3 className="dci-name">B.Sc. Computer Science</h3></div>
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
                <a href="/pdfs/Syllabus/BSc_Computer_Science.pdf" target="_blank" style={{display:'inline-flex',alignItems:'center',gap:'0.9rem',border:'1px solid #cdd5e0',borderRadius:'10px',padding:'1.2rem 2rem',textDecoration:'none',background:'#f0f4ff',color:'var(--primary-navy)',fontWeight:'700'}}>
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

export default ComputerScience;
