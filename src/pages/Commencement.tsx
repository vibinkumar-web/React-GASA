import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const Commencement = () => (
  <Layout>
    <PageBanner
      title="Commencement of Course"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Commencement of Course' }]}
    />
    <section className="section">
      <div className="container">
        <div className="about-content-block reveal">
          <h2>Establishment &amp; Commencement</h2>
          <p>Government Arts and Science College, Sankarankovil was established under the Government of Tamil Nadu and commenced academic operations on <strong>17 June 2020</strong>. The college was set up with the primary objective of bringing quality higher education within reach of students from the economically and socially backward communities of Tenkasi District.</p>
          <p>All five undergraduate programmes were commenced simultaneously in the academic year <strong>2020&ndash;21</strong>, affiliated to Manonmaniam Sundaranar University, Tirunelveli. The college is a co-educational institution and follows the CBCS (Choice Based Credit System) curriculum prescribed by the university.</p>
        </div>
      </div>
    </section>
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Courses Details</h2>
        <div className="reveal" style={{overflowX:'auto'}}>
          <table className="council-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Programme</th>
                <th>Department</th>
                <th>Year of Commencement</th>
                <th>Sanctioned Strength</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>B.A. English</td><td>English</td><td>June 2020</td><td>64</td><td>3 Years (6 Semesters)</td></tr>
              <tr><td>2</td><td>B.A. Sociology</td><td>Sociology</td><td>June 2020</td><td>64</td><td>3 Years (6 Semesters)</td></tr>
              <tr><td>3</td><td>B.Com</td><td>Commerce</td><td>June 2020</td><td>64</td><td>3 Years (6 Semesters)</td></tr>
              <tr><td>4</td><td>B.Sc. Computer Science</td><td>Computer Science</td><td>June 2020</td><td>48</td><td>3 Years (6 Semesters)</td></tr>
              <tr><td>5</td><td>B.Sc. Statistics</td><td>Statistics</td><td>June 2020</td><td>48</td><td>3 Years (6 Semesters)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default Commencement;
