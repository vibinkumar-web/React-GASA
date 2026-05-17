import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const VisionMission = () => (
  <Layout>
    <PageBanner
      title="Vision, Mission & Motto"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Vision, Mission & Motto' }]}
    />
    <section className="section">
      <div className="container">
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
  </Layout>
);

export default VisionMission;
