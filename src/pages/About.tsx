import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const About = () => (
  <Layout>
    <PageBanner
      title="About Us"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
    />

    <section className="section">
      <div className="container">
        <div className="about-content-block reveal">
          <h2>History of the College</h2>
          <p>Government Arts and Science College, Sankarankovil, was founded in 2020 to light the lamp of higher education in the economically and socially backward region of Sankarankovil, Tenkasi District, Tamil Nadu. The primary aim of the institution is to provide quality education to learners from the downtrodden sections of society living in and around Sankarankovil. The majority of the students are first-generation learners.</p>
          <p><strong>The college was inaugurated on 17-06-2020 in a temporary private building at Seevalarayanenthal village, Sankarankovil taluk. The Government of Tamil Nadu allotted 3.31 acres of land to the Department of Higher Education (G.O. No. 52, J1 Department, dated 13-03-2020). Later, the college was shifted to its present permanent building, which was inaugurated by the Honourable Chief Minister of Tamil Nadu on 22 January 2024 through video conferencing. The institution stands as a well-equipped and self-contained campus with all essential amenities.</strong></p>
          <p>The institution is affiliated with Manonmaniam Sundaranar University, Tirunelveli. It is a co-educational institution offering five undergraduate programmes: B.A. English, B.A. Sociology, B.Com, B.Sc. Computer Science, and B.Sc. Statistics. Within a short span of five years, the college has earned recognition for its committed service towards the overall and holistic development of students, both individually and academically. Co-curricular and extracurricular activities, including sports, are actively encouraged to promote the all-round development of learners.</p>
          <p><strong>At present, 691 students are pursuing their studies in the college. The institution is supported by 30 teaching staff and 10 non-teaching staff.</strong></p>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Vision &amp; Mission</h2>
        <div className="vision-mission reveal">
          <div className="vm-card">
            <h3><i className="fas fa-bullseye"></i> Our Vision</h3>
            <ul>
              <li>To Provide Quality Higher Education to all Sections of the Society.</li>
              <li>To Inculcate Knowledge and skills and empower students to be self-reliant individuals.</li>
            </ul>
          </div>
          <div className="vm-card">
            <h3><i className="fas fa-bullseye"></i> Our Mission</h3>
            <ul>
              <li>To provide a quality education in basic Arts, Science, and Humanities.</li>
              <li>To Provide inexpensive educational services to the downtrodden and weaker sections of the society.</li>
              <li>To establish a Centre for imparting knowledge, enhancing skills, and cultivating attitudes among the students.</li>
              <li>To Develop responsible leaders for the future.</li>
              <li>To Develop courage, confidence, and competitiveness in the changing global scenario.</li>
              <li>To Motivate the faculty members in academic, research, and extension activities.</li>
            </ul>
          </div>
          <div className="vm-card">
            <h3><i className="fas fa-bullseye"></i> Motto</h3>
            <p>Education is the whole.</p>
          </div>
          <div className="vm-card">
            <h3><i className="fas fa-bullseye"></i> Broad Objectives</h3>
            <ul>
              <li>To help students from economically weaker sections of society access quality higher education.</li>
              <li>To inculcate punctuality, discipline, and regularity.</li>
              <li>To equip the students to face the challenges of modern society from professional, cultural, and moral perspectives.</li>
              <li>To Enhance the life skills by providing value-based education.</li>
              <li>To create a conducive environment for students to achieve academic excellence to face global challenges.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <div className="about-content-block reveal">
          <h2>Accreditation &amp; Recognition</h2>
          <p>Government Arts and Science College, Sankarankovil holds the following accreditations and recognitions that attest to its quality standards:</p>
          <ul style={{listStyle:'disc',paddingLeft:'1.5rem',color:'#555'}}>
            <li style={{marginBottom:'0.5rem'}}>Government College under the Higher Education Department of Tamil Nadu</li>
            <li style={{marginBottom:'0.5rem'}}>Affiliated to Manonmaniam Sundaranar University, Tirunelveli</li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
