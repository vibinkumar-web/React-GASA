import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const RedCrossIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="32" height="32" style={{flexShrink:0}}>
    <rect width="60" height="60" rx="6" fill="#fff"/>
    <rect x="22" y="6" width="16" height="48" rx="3" fill="#e00"/>
    <rect x="6" y="22" width="48" height="16" rx="3" fill="#e00"/>
  </svg>
);

const YRC = () => (
  <Layout>
    <PageBanner
      title="Youth Red Cross (YRC)"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Activities' }, { label: 'YRC' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">About YRC</h2>
        <div className="about-content-block reveal">
          <p><strong>&ldquo;Youth Red Cross&rdquo;</strong> is one of the wings of the Indian Red Cross Society. It is a movement organized at the college level for students between 18 and 25 years of age. A qualified professor is recognized as the leader and is called the Programme Officer, under whose guidance the students are trained to manage the affairs of the group, electing their own Office-Bearers.</p>
          <p>Government Arts and Science College, Sankarankovil established the YRC unit in the academic year <strong>2022&ndash;2023</strong>. It is a voluntary relief movement whose purpose is to protect life, health, and to ensure respect for human life.</p>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <div className="reveal" style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
          <div style={{background:'#eef4ff',borderLeft:'4px solid #3b6fc9',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#3b6fc9',marginBottom:'0.75rem',display:'flex',alignItems:'center',gap:'0.5rem'}}><RedCrossIcon /> Indian Red Cross Society</h3>
            <p style={{color:'#555',lineHeight:'1.9'}}>Jean Henry Dunant, also known as the <strong>&ldquo;Father of Red Cross,&rdquo;</strong> was born in Geneva, Switzerland, on May 8, 1828. The Red Cross was founded in Geneva in 1863. It is a non-profit organization dedicated to humanitarian aid. The most essential component of its parent organization, the Indian Red Cross, is the Youth Red Cross — a student-led initiative for students in colleges and technical schools.</p>
          </div>
          <div style={{background:'#edfdf5',borderLeft:'4px solid #2a9d6e',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#2a9d6e',marginBottom:'0.75rem'}}><i className="fas fa-bullseye"></i> Objectives of Youth Red Cross</h3>
            <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555',lineHeight:'2'}}>
              <li>To create awareness among students to care for their own health and also others.</li>
              <li>To promote mutual understanding, friendship, and cooperation among all peoples.</li>
              <li>To relieve the sufferings of individuals and to give priority to the most urgent cases of distress.</li>
              <li>To provide an atmosphere towards the all-round development of its members.</li>
            </ul>
          </div>
          <div style={{background:'#fff8e6',borderLeft:'4px solid #e8a020',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#c47f00',marginBottom:'0.75rem'}}><i className="fas fa-hands"></i> Motto</h3>
            <p style={{color:'#555',fontSize:'1.1rem',fontWeight:'700',fontStyle:'italic'}}>&ldquo;Health, Service and Friendship&rdquo;</p>
          </div>
          <div style={{background:'#f4eeff',borderLeft:'4px solid #7c4dcc',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#7c4dcc',marginBottom:'0.75rem'}}><i className="fas fa-search"></i> Vision</h3>
            <p style={{color:'#555',lineHeight:'1.9'}}>To be the most effective and dependable institution in this remote area for improving the lives of patients with humanitarian concerns and, as a result, making a man whole by providing unselfish service.</p>
          </div>
          <div style={{background:'#fff0f4',borderLeft:'4px solid #e05c8a',borderRadius:'8px',padding:'1.5rem'}}>
            <h3 style={{color:'#c0396a',marginBottom:'0.75rem'}}><i className="fas fa-pen"></i> YRC Member Pledge</h3>
            <p style={{color:'#555',lineHeight:'1.9',fontStyle:'italic'}}>&ldquo;I pledge to look after my own and other&rsquo;s health, to assist the sick and suffering, especially children, and to regard youth from all over the world as my friends.&rdquo;</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="section-title">Key Activities</h2>
        <div className="reveal" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1.5rem',maxWidth:'1050px',margin:'0 auto'}}>
          {[
            { icon:'fa-tint', title:'Blood Donation Camp', desc:'YRC organises blood grouping camps and donation drives in collaboration with government hospitals, encouraging students to become regular blood donors.' },
            { icon:'fa-eye', title:'Eye Checkup Camp', desc:'Free eye check-up camps are organised for rural communities and college students in partnership with government health departments.' },
            { icon:'fa-leaf', title:'Tree Saplings Plantation', desc:'Regular tree plantation drives are conducted on campus and in surrounding villages to promote environmental awareness and green cover.' },
            { icon:'fa-stethoscope', title:'Rally & Training Programmes', desc:'Volunteers participate in awareness rallies and training programmes organized by the Indian Red Cross Society, Tamil Nadu State Branch.' },
            { icon:'fa-utensils', title:'Health & Social Awareness', desc:'Programmes on personal hygiene, communicable disease prevention, thalassaemia, and HIV/AIDS awareness are conducted to reduce stigma and spread knowledge.' },
            { icon:'fa-flask', title:'Relief Activities', desc:'YRC volunteers participate in relief and rehabilitation work during floods, droughts, and other natural calamities alongside district administration.' },
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
        <h2 className="section-title">Youth Red Cross Committee</h2>
        <div className="reveal" style={{overflowX:'auto'}}>
          <table className="council-table">
            <thead><tr><th>Sl.No</th><th>Name</th><th>Designation</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Dr. K. Kalagopi<br/><span style={{fontSize:'0.85rem',color:'#777'}}>Associate Professor &amp; Head of Tamil Dept.</span></td><td>Co-ordinator</td></tr>
              <tr><td>2</td><td>Vennila D</td><td>Guest Lecturer, Dept. of Sociology</td></tr>
              <tr><td>3</td><td>Dr. J. Sidharathul Munthaga</td><td>Guest Lecturer, Dept. of Commerce</td></tr>
              <tr><td>4</td><td>Dr. T. Ilam Parithi</td><td>Guest Lecturer, Dept. of Computer Science</td></tr>
              <tr><td>5</td><td>Dr. Velusamy M.</td><td>Guest Lecturer, Dept. of Statistics</td></tr>
              <tr><td>6</td><td>Dr. R. Balamurugan M.A</td><td>Guest Lecturer, Dept. of English</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default YRC;
