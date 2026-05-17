import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const NSS = () => (
  <Layout>
    <PageBanner
      title="National Service Scheme (NSS)"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Activities' }, { label: 'NSS' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">About NSS</h2>
        <div className="about-content-block reveal">
          <p>The <strong>National Service Scheme (NSS)</strong> is a Central Government initiative under the Ministry of Youth Affairs and Sports, launched in 1969 during the birth-centenary year of Mahatma Gandhi. Its motto, <em>&ldquo;Not Me But You,&rdquo;</em> reflects its core aim of developing the personality and character of student volunteers through community service.</p>
          <p>The NSS unit at Government Arts and Science College, Sankarankovil actively mobilises students to engage in social welfare work in the surrounding communities of Tenkasi district. Volunteers contribute to nation-building activities while developing leadership skills, social responsibility, and a spirit of selfless service.</p>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <div className="reveal" style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
          <div style={{background:'#eef4ff',borderLeft:'4px solid #3b6fc9',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#3b6fc9',marginBottom:'0.75rem'}}><i className="fas fa-bullseye"></i> Symbol of NSS</h3>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'2'}}>
              <li>The symbol for the NSS has been based on the Giant Rath Wheel of the world-famous Konark Sun Temple situated in Odisha, India.</li>
              <li>The wheel portrays the cycle of creation, preservation and release.</li>
              <li>The eight bars in the wheel represent 24 hours of a day.</li>
              <li>The <strong>red colour</strong> indicates that the volunteer is full of young blood that is lively, active, energetic and full of high spirit.</li>
              <li>The <strong>navy blue colour</strong> indicates the cosmos of which the NSS is a tiny part, ready to contribute its share for the welfare of mankind.</li>
            </ul>
          </div>
          <div style={{background:'#edfdf5',borderLeft:'4px solid #2a9d6e',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#2a9d6e',marginBottom:'0.75rem'}}><i className="fas fa-hands"></i> Motto of NSS</h3>
            <p style={{color:'#555',fontSize:'1.1rem',fontWeight:'700',fontStyle:'italic'}}>&ldquo;NOT ME BUT YOU&rdquo;</p>
          </div>
          <div style={{background:'#fff8e6',borderLeft:'4px solid #e8a020',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#c47f00',marginBottom:'0.75rem'}}><i className="fas fa-star"></i> Theme of NSS</h3>
            <p style={{color:'#555',fontSize:'1.05rem',fontWeight:'700',fontStyle:'italic'}}>&ldquo;HEALTHY YOUTH FOR WEALTHY NATION&rdquo;</p>
          </div>
          <div style={{background:'#f4eeff',borderLeft:'4px solid #7c4dcc',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#7c4dcc',marginBottom:'0.75rem'}}><i className="fas fa-bullseye"></i> Aims and Objectives of NSS</h3>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'2'}}>
              <li>To understand the community in which they work.</li>
              <li>To identify the needs and problems of the community and involve them in problem-solving process.</li>
              <li>To develop among themselves a sense of social and civic responsibility.</li>
              <li>To utilize their knowledge in finding practical solutions to individual and community problems.</li>
              <li>To develop competence required for group-living and sharing of responsibilities.</li>
              <li>To gain skills in mobilizing community participation.</li>
              <li>To acquire leadership qualities and democratic attitude.</li>
              <li>To develop capacity to meet emergencies and natural disasters.</li>
              <li>To practice national integration and social harmony.</li>
            </ul>
          </div>
          <div style={{background:'#fff0f4',borderLeft:'4px solid #e05c8a',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#c0396a',marginBottom:'0.75rem'}}><i className="fas fa-users"></i> Types of Activities</h3>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'2'}}>
              <li><strong>Regular Activities</strong> (120 hours)</li>
              <li><strong>Special Camp Activities</strong> (120 hours)</li>
              <li>All NSS volunteers who have served for at least 2 years and performed <strong>240 hours</strong> of work are entitled to a certificate from the university.</li>
              <li>Special Camps are held annually, funded by the Government of India, and are usually located in a rural village.</li>
            </ul>
            <p style={{marginTop:'1rem',color:'#444',fontWeight:'600'}}>Volunteers may be involved in activities such as:</p>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'2'}}>
              <li>Cleaning</li><li>Plantation</li><li>Blood Donation Camps</li><li>Awareness Rallies</li><li>Health Care Camps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="section-title">Key Activities</h2>
        <div className="reveal" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5rem',maxWidth:'1050px',margin:'0 auto'}}>
          {[
            { icon:'fa-shield-alt', title:'Blood Donation Drives', desc:'Regular blood donation camps organised in association with government hospitals to meet the blood requirements of patients in Tenkasi district.' },
            { icon:'fa-leaf', title:'Environmental Initiatives', desc:'Tree plantation drives, cleanliness campaigns, and plastic-free awareness programmes conducted on campus and in nearby villages.' },
            { icon:'fa-book', title:'Literacy Campaigns', desc:'NSS volunteers conduct literacy and awareness programmes in rural areas, supporting adult education and voter awareness drives.' },
            { icon:'fa-home', title:'Annual Special Camp', desc:'Every year, NSS volunteers adopt a nearby village for 7 days to carry out social welfare activities — health camps, sanitation work, and community development.' },
            { icon:'fa-utensils', title:'Disaster Relief', desc:'NSS volunteers are trained to assist during natural calamities and relief operations, working with district administration and NGOs.' },
            { icon:'fa-users', title:'Social Awareness', desc:'Programmes on gender equality, anti-drug campaigns, road safety, and digital literacy are conducted to raise awareness.' },
          ].map(c => (
            <div key={c.title} className="course-card">
              <div className="icon"><i className={`fas ${c.icon}`}></i></div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">NSS Unit 209 &amp; 210 — Co-ordinators</h2>
        <div className="reveal" style={{overflowX:'auto'}}>
          <table className="council-table">
            <thead><tr><th>Unit</th><th>Co-ordinator</th><th>Unit Type</th></tr></thead>
            <tbody>
              <tr><td><strong>Unit 209</strong></td><td>Dr. N. Sukumaran</td><td>Boys Unit</td></tr>
              <tr><td><strong>Unit 210</strong></td><td>Dr. C. Manogarammal</td><td>Girls Unit</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default NSS;
