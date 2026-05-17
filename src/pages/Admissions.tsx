import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const Admissions = () => (
  <Layout>
    <PageBanner
      title="Admissions"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Admissions' }]}
    />

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Admission Procedure</h2>
        <div className="reveal" style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>

          <div style={{background:'#eef4ff',borderLeft:'4px solid #3b6fc9',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#3b6fc9',marginBottom:'0.75rem'}}>General Rules</h3>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'2'}}>
              <li>Fee structure to be exhibited transparently in the prospectus and uploaded on <a href="https://www.tngasa.in" target="_blank" rel="noopener noreferrer" style={{color:'#3b6fc9',fontWeight:'700'}}>www.tngasa.in</a></li>
              <li>Admission in by Merit and Community based</li>
              <li>Rules of Reservation must be followed strictly for each course separately</li>
            </ul>
          </div>

          <h3 style={{color:'#333',fontSize:'1.1rem',fontWeight:'700',marginBottom:'0.25rem'}}>Eligibility Criteria</h3>

          <div style={{background:'#eef4ff',borderLeft:'4px solid #3b6fc9',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#3b6fc9',marginBottom:'0.75rem'}}>B.A. English</h3>
            <p style={{marginBottom:'0.5rem',color:'#444'}}>Ranking based on Part II English mark only</p>
          </div>

          <div style={{background:'#edfdf5',borderLeft:'4px solid #2a9d6e',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#2a9d6e',marginBottom:'0.75rem'}}>B.A. Sociology</h3>
            <p style={{marginBottom:'0.5rem',color:'#444'}}>Ranking based on marks in Part III out of 400 (Except Tamil and English)</p>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'1.9'}}>
              <li>Preference should be given to subject concerned studied</li>
              <li>20% reserved for Vocational Stream</li>
            </ul>
          </div>

          <div style={{background:'#fff8e6',borderLeft:'4px solid #e8a020',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#c47f00',marginBottom:'0.75rem'}}>B.Com</h3>
            <p style={{marginBottom:'0.5rem',color:'#444'}}>Ranking based on marks in Part III out of 400 (Except Tamil and English)</p>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'1.9'}}>
              <li>Should have studied Commerce and Accountancy in HSC</li>
              <li>20% reserved for Commerce Vocational Stream</li>
            </ul>
          </div>

          <div style={{background:'#f4eeff',borderLeft:'4px solid #7c4dcc',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#7c4dcc',marginBottom:'0.75rem'}}>B.Sc. Computer Science</h3>
            <p style={{marginBottom:'0.5rem',color:'#444'}}>Ranking based on marks in Part III out of 400 (Except Tamil and English)</p>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'1.9'}}>
              <li>Should have studied Mathematics</li>
              <li>2/3 of seats reserved for students who have studied Computer Science as a subject in Plus Two</li>
              <li>1/3 of seats are for students who have not studied Computer Science in Plus Two</li>
            </ul>
          </div>

          <div style={{background:'#fff0f4',borderLeft:'4px solid #e05c8a',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#c0396a',marginBottom:'0.75rem'}}>B.Sc. Statistics</h3>
            <p style={{marginBottom:'0.5rem',color:'#444'}}>Ranking based on marks in Part III out of 400 (Except Tamil and English)</p>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'1.9'}}>
              <li>Should have studied Mathematics, Statistics and Business Mathematics</li>
            </ul>
          </div>

          <div style={{background:'#edfdf5',borderLeft:'4px solid #2a9d6e',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#2a9d6e',marginBottom:'0.75rem'}}>Application Process</h3>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'2'}}>
              <li>Applications must be made in <strong>online mode only</strong></li>
              <li>Choices of colleges and courses must be opted at the time of registration</li>
              <li>Application must contain at least one valid <strong>Contact number</strong> and <strong>Email Id</strong></li>
              <li>Online application fee: <strong>Rs. 48/-</strong> &nbsp;|&nbsp; Registration fee: <strong>Rs. 2/-</strong> (for all candidates)</li>
              <li>No application fee for SC/ST candidates; registration fee of Rs. 2/- still applicable</li>
            </ul>
            <p style={{marginTop:'0.75rem',color:'#444',fontWeight:'600'}}>Documents to be scanned and uploaded:</p>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'2'}}>
              <li>Qualifying Examination Mark Sheet / Provisional Mark Sheet</li>
              <li>Community Certificate (wherever applicable)</li>
              <li>Certificate of proof for Differently Abled / Sports Quota / NCC / Ex-Servicemen etc.</li>
              <li>Transfer Certificate</li>
              <li>Eligibility certificate for students from other States / Boards / Universities</li>
            </ul>
          </div>

          <div style={{background:'#fff8e6',borderLeft:'4px solid #e8a020',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#c47f00',marginBottom:'0.75rem'}}>Preparation of Rank List</h3>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'2'}}>
              <li>Candidate must have passed Higher Secondary Examination of Tamil Nadu or an equivalent recognised examination (e.g. CBSE)</li>
              <li>Rank list is prepared based on <strong>Part III marks out of 400</strong> in the Higher Secondary Examination</li>
              <li>Apportionment of seats: <strong>80% Academic / 20% Vocational</strong></li>
              <li>For students who passed +2 prior to 2018&ndash;19, marks can be converted to 400 from 800</li>
            </ul>
          </div>

          <div style={{background:'#f4eeff',borderLeft:'4px solid #7c4dcc',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#7c4dcc',marginBottom:'0.75rem'}}>Rule of Reservation</h3>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'2'}}>
              <li><strong>31%</strong> &mdash; Open Competition (OC)</li>
              <li><strong>26.5%</strong> &mdash; Backward Classes (BC) other than BC Muslims &nbsp;+&nbsp; <strong>3.5%</strong> for BC Muslims</li>
              <li><strong>20%</strong> &mdash; Most Backward Classes (MBC) and Denotified Communities (DNC)</li>
              <li><strong>15%</strong> &mdash; Scheduled Castes (SC) &nbsp;+&nbsp; <strong>3%</strong> for SCA</li>
              <li><strong>1%</strong> &mdash; Scheduled Tribes (ST)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section" style={{paddingTop:'0'}}>
      <div className="container">
        <div style={{background:'linear-gradient(135deg,#1a3a6b 0%,#2a5298 100%)',borderRadius:'12px',padding:'1.75rem 2rem',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'1.5rem',flexWrap:'wrap',boxShadow:'0 6px 24px rgba(26,58,107,0.18)'}}>
          <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
            <span style={{fontSize:'2.2rem',color:'#ffd700'}}><i className="fas fa-file-alt"></i></span>
            <div>
              <p style={{color:'#ffd700',fontWeight:'800',fontSize:'0.8rem',letterSpacing:'0.1em',textTransform:'uppercase',margin:'0 0 0.2rem'}}>Admission &ndash; 2026&ndash;27</p>
              <h3 style={{color:'#fff',fontSize:'1.15rem',fontWeight:'800',margin:'0'}}>Admission Guidelines &mdash; ANNEXURE &ndash; I</h3>
              <p style={{color:'rgba(255,255,255,0.75)',fontSize:'0.82rem',margin:'0.25rem 0 0'}}>Procedure for Admission to UG/PG Courses in Arts &amp; Science Colleges 2026&ndash;2027</p>
            </div>
          </div>
          <a href="/pdfs/2026-27 Admission Guideline.pdf" target="_blank" rel="noopener noreferrer"
             style={{display:'inline-flex',alignItems:'center',gap:'0.5rem',background:'#ffd700',color:'#1a3a6b',fontWeight:'800',fontSize:'0.9rem',padding:'0.75rem 1.5rem',borderRadius:'8px',textDecoration:'none',whiteSpace:'nowrap'}}>
            <i className="fas fa-search"></i> Click Here to View
          </a>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="section-title">UG ADMISSION 2026: RANK LIST / Rank Sheet</h2>
        <p style={{textAlign:'center',marginBottom:'1.5rem'}}>
          <a href="#" target="_blank" style={{display:'inline-flex',alignItems:'center',gap:'0.5rem',background:'#eef4ff',border:'1px solid #3b6fc9',color:'#3b6fc9',fontWeight:'700',padding:'0.7rem 1.5rem',borderRadius:'8px',textDecoration:'none',fontSize:'0.95rem'}}>
            <i className="fas fa-calendar-alt"></i> Click here to download the dates of counselling, and the Certificates to be brought
          </a>
        </p>
        <div style={{overflowX:'auto'}}>
          <table style={{width:'100%',borderCollapse:'collapse',background:'#fff',borderRadius:'12px',boxShadow:'var(--shadow-sm)',overflow:'hidden',fontSize:'0.95rem'}}>
            <thead>
              <tr style={{background:'#1a3a6b',color:'#fff'}}>
                <th style={{padding:'1rem 1.5rem',textAlign:'center',fontWeight:'700',letterSpacing:'1px'}}>S.NO</th>
                <th style={{padding:'1rem 1.5rem',textAlign:'left',fontWeight:'700',letterSpacing:'1px'}}>PROGRAMMES</th>
                <th style={{padding:'1rem 1.5rem',textAlign:'center',fontWeight:'700',letterSpacing:'1px'}}>RANK LIST</th>
              </tr>
            </thead>
            <tbody>
              {[
                { no:1, prog:'Special Quota' },
                { no:2, prog:'B.A [ENGLISH]' },
                { no:3, prog:'B.A [SOCIOLOGY]' },
                { no:4, prog:'B.COM' },
                { no:5, prog:'B.SC [COMPUTER SCIENCE]' },
                { no:6, prog:'B.SC [STATISTICS]' },
              ].map((r,i) => (
                <tr key={r.no} style={{borderBottom:'1px solid #e4e9f0',background:i%2===1?'#f8faff':'#fff'}}>
                  <td style={{padding:'0.9rem 1.5rem',textAlign:'center',fontWeight:'700',color:'#222'}}>{r.no}</td>
                  <td style={{padding:'0.9rem 1.5rem',color:'#333',fontWeight:'600'}}>{r.prog}</td>
                  <td style={{padding:'0.9rem 1.5rem',textAlign:'center'}}>
                    <a href="#" target="_blank" style={{color:'#3b6fc9',fontWeight:'700',textDecoration:'underline'}}>Click here to download your Rank Sheet</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default Admissions;
