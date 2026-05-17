import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const Principal = () => (
  <Layout>
    <PageBanner
      title="Principal"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Administration' }, { label: 'Principal' }]}
    />
    <section className="section">
      <div className="container">
        <div className="principal-section reveal">
          <div className="principal-photo-wrap">
            <div className="principal-photo">
              <img src="/images/Staff/GL-Staff/Commerce-GL/venugopal.png" alt="Dr. G. Venugopal, Principal" style={{objectFit:'cover'}} />
            </div>
            <a href="/pdfs/faculty/Venugopal CV.pdf" target="_blank" className="profile-btn">
              <i className="fas fa-file-alt"></i> Profile &mdash; Click here
            </a>
          </div>
          <div className="principal-text">
            <h3>Dr. G. VENUGOPAL</h3>
            <p className="designation">Principal (FAC)</p>
            <p>It gives me immense pleasure to welcome you to Government Arts and Science College, Sankarankovil. For nearly six years, our institution has remained steadfast in its commitment to providing quality higher education that blends traditional values with modern pedagogical practices.</p>
            <p>Our dedicated faculty members, state-of-the-art laboratories, well-stocked library, and a supportive campus community create the ideal setting for students to discover their potential and realize their aspirations.</p>
            <p>We believe that education is not merely about academic achievements, but also about nurturing well-rounded individuals who are prepared to contribute meaningfully to society. Our co-curricular and extracurricular programmes — NSS, YRC, Sports, and various clubs — ensure holistic development of every student.</p>
            <p>I invite you to be a part of our vibrant academic community and make the most of the opportunities that Government Arts and Science College has to offer.</p>
            <blockquote>
              &ldquo;Education is not the filling of a pail, but the lighting of a fire. At Government Arts and Science College, we ignite that fire within every student.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Principal;
