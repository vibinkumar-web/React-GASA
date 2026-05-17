import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const Sports = () => (
  <Layout>
    <PageBanner
      title="Sports"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Activities' }, { label: 'Sports' }]}
    />

    <section className="section" style={{background:'var(--bg-light)',paddingBottom:'0'}}>
      <div className="container">
        <h2 className="section-title">Physical Director</h2>
        <div className="principal-section reveal" style={{maxWidth:'700px',margin:'0 auto 2rem'}}>
          <div className="principal-photo">
            <a href="/pdfs/faculty/d_selvam.pdf" target="_blank" title="View Profile">
              <img src="/images/Logo/sankarankovil-college-logo-1.png" alt="D. Selvam, Physical Director" style={{objectFit:'contain',background:'#f5f7fa',padding:'0.5rem',cursor:'pointer'}} />
            </a>
          </div>
          <div className="principal-text">
            <h3>D. Selvam</h3>
            <p className="designation">Physical Director</p>
            <p>Mr. D. Selvam serves as the Physical Director of Government Arts and Science College, Sankarankovil. He is responsible for organizing and overseeing all sports and physical education activities of the college, guiding students to participate in inter-collegiate, university-level, and state-level tournaments.</p>
            <p>Under his supervision, students have excelled in various sports events conducted by Manonmaniam Sundaranar University. He is committed to fostering a culture of fitness, teamwork, and sportsmanship among the student community.</p>
            <p><a href="/pdfs/faculty/d_selvam.pdf" target="_blank" style={{color:'var(--primary-navy)',fontWeight:'600'}}><i className="fas fa-file-alt"></i> View Full Profile (PDF)</a></p>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="section-title">Sports at GASC Sankarankovil</h2>
        <div className="about-content-block reveal">
          <p>The Sports Department of Government Arts and Science College, Sankarankovil is committed to nurturing athletic talent and promoting physical fitness among students. The college believes that sports and physical education are integral to the all-round development of a student, instilling discipline, teamwork, and perseverance.</p>
          <p>Students are encouraged and supported to participate in inter-collegiate, university-level, and state-level tournaments conducted under the Manonmaniam Sundaranar University and the Sports Development Authority of Tamil Nadu (SDAT).</p>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Sports Offered</h2>
        <div className="courses-grid reveal">
          {[
            { icon:'fa-running', title:'Athletics', desc:'Track and field events including sprints, long jump, high jump, shot put, and relay races. Students participate in university athletics championships annually.' },
            { icon:'fa-baseball-ball', title:'Cricket', desc:'Inter-departmental and inter-collegiate cricket tournaments are organised. The college fields its own cricket team for MSU zonal and university competitions.' },
            { icon:'fa-volleyball-ball', title:'Volleyball & Throwball', desc:"Both men's and women's volleyball and throwball teams participate in inter-collegiate tournaments. Regular practice sessions are held on the college ground." },
            { icon:'fa-bolt', title:'Kabaddi & Kho-Kho', desc:'Traditional Indian sports like kabaddi and kho-kho are actively promoted. The college has produced players who have represented at university and state levels.' },
            { icon:'fa-chess', title:'Chess & Carrom', desc:'Indoor games chess and carrom are conducted regularly. Inter-collegiate chess tournaments have seen participation from students across Tenkasi and Tirunelveli districts.' },
            { icon:'fa-table-tennis', title:'Badminton', desc:'Badminton courts are available for students. Both singles and doubles events are conducted in inter-house and inter-collegiate tournaments.' },
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

    <section className="section">
      <div className="container">
        <h2 className="section-title">Sports Achievements &amp; Facilities</h2>
        <div className="about-content-block reveal">
          <p>The college organises an annual <strong>Sports Day</strong> celebration with track and field events, cultural march past, and prize distribution. Students who excel in university-level and state-level competitions receive certificates, trophies, and cash awards from the college.</p>
          <p>The campus has open ground space for outdoor sports activities. The Physical Education Department provides coaching and guidance to students, and eligible students can apply for <strong>sports fee concession</strong> and government scholarships available for sportspersons under Tamil Nadu government schemes.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Sports;
