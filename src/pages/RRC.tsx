import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const RRC = () => (
  <Layout>
    <PageBanner
      title="Red Ribbon Club (RRC)"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Activities' }, { label: 'Red Ribbon Club' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">RRC Co-ordinator</h2>
        <div className="principal-section reveal" style={{background:'#fff',padding:'2rem',borderRadius:'12px',boxShadow:'var(--shadow-sm)',justifyContent:'center',textAlign:'center',maxWidth:'700px',margin:'0 auto'}}>
          <div className="principal-photo">
            <img src="/images/Logo/sankarankovil-college-logo-1.png" alt="Dr. N. Sukumaran, RRC Co-ordinator" style={{objectFit:'contain',background:'#f5f7fa',padding:'0.5rem'}} />
          </div>
          <div className="principal-text" style={{textAlign:'center'}}>
            <h3>DR. N. SUKUMARAN</h3>
            <p className="designation">RRC Co-ordinator</p>
            <p style={{color:'#555',marginTop:'0.25rem'}}>Assistant Professor &amp; Head<br />Department of Sociology</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Red Ribbon Club</h2>
        <div className="reveal" style={{display:'flex',alignItems:'center',gap:'2.5rem',flexWrap:'wrap'}}>
          <div style={{flex:'0 0 auto'}}>
            <img src="/images/General-Images/Picture2.jpg" alt="Red Ribbon Club" style={{width:'280px',maxWidth:'100%',borderRadius:'10px',border:'2px solid #ccc',display:'block'}} />
          </div>
          <div style={{flex:'1',minWidth:'220px'}}>
            <p style={{color:'#444',lineHeight:'1.9'}}>The <strong>Red Ribbon Club (RRC)</strong> at Government Arts and Science College, Sankarankovil is dedicated to spreading awareness on HIV/AIDS prevention and promoting voluntary blood donation. The club regularly organises awareness camps on AIDS and blood donation in rural areas, reaching out to communities that need information the most.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="reveal" style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
          <div style={{background:'#fff0f4',borderLeft:'4px solid #c0392b',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#c0392b',marginBottom:'0.75rem'}}>&#127970; Goal of RRC</h3>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'2'}}>
              <li>To provide youth with correct information on HIV/AIDS prevention, treatment, care, and support</li>
              <li>To create awareness among students, youth, and the public about the causes and spread of HIV/AIDS</li>
              <li>To work towards building an HIV/AIDS-free India</li>
            </ul>
          </div>
          <div style={{background:'#eef4ff',borderLeft:'4px solid #3b6fc9',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#3b6fc9',marginBottom:'0.75rem'}}><i className="fas fa-bullseye"></i> Main Objectives of RRC</h3>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'2'}}>
              <li>To train youth as peer educators and change agents by developing leadership, communication, advocacy, and teamwork skills</li>
              <li>To provide a platform for students to actively participate in the fight against HIV/AIDS</li>
              <li>To promote voluntary blood donation among youth</li>
              <li>To motivate and build the capacity of youth through skills like leadership, negotiation, and teamwork</li>
              <li>To guide and counsel students on preventive measures for maintaining good health</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default RRC;
