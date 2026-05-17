import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const History = () => (
  <Layout>
    <PageBanner
      title="History of College"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'History of College' }]}
    />
    <section className="section">
      <div className="container">
        <div className="about-content-block reveal">
          <h2>History of the College</h2>
          <p>Government Arts and Science College, Sankarankovil, was founded in 2020 to light the lamp of higher education in the economically and socially backward region of Sankarankovil, Tenkasi District, Tamil Nadu. The primary aim of the institution is to provide quality education to learners from the downtrodden sections of society living in and around Sankarankovil. The majority of the students are first-generation learners.</p>
          <p>The college was inaugurated on <strong>17 June 2020</strong> at private temporary premises in Seevalarayanenthal village, Sankarankovil taluk. Later on, the college was moved to the present permanent Government building which was inaugurated by the Honourable Chief Minister of Tamil Nadu on <strong>22 January 2024</strong> through video-conferencing mode.</p>
          <p>Government Arts and Science College is located on Tiruvengadam Road, a campus covering <strong>3.31 acres</strong> of land allotted to the Department of Higher Education [G.O.No.52, J1 Department, dated 13-03-2020]. It stands self-contained and prominent with all amenities.</p>
          <p>The institution is affiliated with Manonmaniam Sundaranar University, Tirunelveli. It is a co-educational institution offering five UG Programmes — B.A. English, B.A. Sociology, B.Com Commerce, B.Sc. Computer Science, and B.Sc. Statistics. Within a short span of five years, the College has registered its name for its committed service towards the round and holistic development of the students individually and academically. Co-curricular and extracurricular activities including sports are encouraged to ensure multi-dimensional personality development of the learners.</p>
          <p>Currently, <strong>691 students</strong> are pursuing their studies at this college. Additionally, <strong>30 teaching staff</strong> and <strong>10 non-teaching staff</strong> are working here.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default History;
