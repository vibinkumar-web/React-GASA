import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const Departments = () => (
  <Layout>
    <PageBanner
      title="Our Departments"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Academics' }, { label: 'Departments' }]}
    />
    <section className="section">
      <div className="container">
        <p className="section-subtitle">Government Arts and Science College, Sankarankovil comprises 5 well-equipped departments offering a wide spectrum of programmes. Each department is staffed by experienced, dedicated faculty committed to nurturing academic excellence.</p>
        <div className="dept-grid reveal">

          <div className="dept-card">
            <div className="dept-card-img">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=150&fit=crop" alt="Department of Commerce" />
            </div>
            <div className="dept-card-top"><h3>Department of Commerce</h3></div>
            <div className="dept-card-body">
              <p>B.Com programme with practical training in accounting, finance, and taxation. Tally and GST certification courses included.</p>
              <div className="dept-card-footer">
                <div className="dept-card-hod">
                  <p className="hod-label">Head of Department</p>
                  <p className="hod-name">DR. G. VENUGOPAL</p>
                  <p className="hod-desig">Assoc. Prof. &amp; Head</p>
                </div>
                <Link to="/commerce" className="btn btn-outline">Explore</Link>
              </div>
            </div>
          </div>

          <div className="dept-card">
            <div className="dept-card-img">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=150&fit=crop" alt="Department of Computer Science" />
            </div>
            <div className="dept-card-top"><h3 style={{fontSize:'0.78rem',letterSpacing:'0'}}>Department of Computer Science</h3></div>
            <div className="dept-card-body">
              <p>B.Sc. Computer Science with industry-standard computing labs. Focus on programming, data science, and software engineering with placement support.</p>
              <div className="dept-card-footer">
                <div className="dept-card-hod">
                  <p className="hod-label">Head of Department</p>
                  <p className="hod-name">DR. R. SHENBAGAVALLI</p>
                  <p className="hod-desig">Assoc. Prof. &amp; Head</p>
                </div>
                <Link to="/computer-science" className="btn btn-outline">Explore</Link>
              </div>
            </div>
          </div>

          <div className="dept-card">
            <div className="dept-card-img">
              <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=150&fit=crop" alt="Department of English" />
            </div>
            <div className="dept-card-top"><h3>Department of English</h3></div>
            <div className="dept-card-body">
              <p>Offers B.A. English with emphasis on literature, linguistics, and communication skills. Language lab and literary club activities enhance practical competency.</p>
              <div className="dept-card-footer">
                <div className="dept-card-hod">
                  <p className="hod-label">Head of Department</p>
                  <p className="hod-name">DR. K. KALAGOPI</p>
                  <p className="hod-desig">Assoc. Prof. &amp; Head (I/C)</p>
                </div>
                <Link to="/english" className="btn btn-outline">Explore</Link>
              </div>
            </div>
          </div>

          <div className="dept-card">
            <div className="dept-card-img">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=150&fit=crop" alt="Department of Sociology" />
            </div>
            <div className="dept-card-top"><h3>Department of Sociology</h3></div>
            <div className="dept-card-body">
              <p>B.A. Sociology exploring social structures, community development, and research methodology. Regular field studies and social surveys enrich the learning experience.</p>
              <div className="dept-card-footer">
                <div className="dept-card-hod">
                  <p className="hod-label">Head of Department</p>
                  <p className="hod-name">DR. N. SUKUMARAN</p>
                  <p className="hod-desig">Assist. Prof. &amp; Head</p>
                </div>
                <Link to="/sociology" className="btn btn-outline">Explore</Link>
              </div>
            </div>
          </div>

          <div className="dept-card">
            <div className="dept-card-img">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=150&fit=crop" alt="Department of Statistics" />
            </div>
            <div className="dept-card-top"><h3>Department of Statistics</h3></div>
            <div className="dept-card-body">
              <p>B.Sc. Statistics with specializations in applied statistics, data analytics, and probability theory. Hands-on training in statistical software such as R and SPSS.</p>
              <div className="dept-card-footer">
                <div className="dept-card-hod">
                  <p className="hod-label">Head of Department</p>
                  <p className="hod-name">DR. R. SHENBAGAVALLI</p>
                  <p className="hod-desig">Assoc. Prof. &amp; Head (I/C)</p>
                </div>
                <Link to="/statistics" className="btn btn-outline">Explore</Link>
              </div>
            </div>
          </div>

          <div className="dept-card">
            <div className="dept-card-img">
              <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=150&fit=crop" alt="Department of Tamil" />
            </div>
            <div className="dept-card-top"><h3>Department of Tamil</h3></div>
            <div className="dept-card-body">
              <p>B.A. Tamil covering classical Sangam literature, medieval poetry, modern Tamil prose, and Tamil linguistics with a rich cultural perspective.</p>
              <div className="dept-card-footer">
                <div className="dept-card-hod">
                  <p className="hod-label">Head of Department</p>
                  <p className="hod-name">DR. K. KALAGOPI</p>
                  <p className="hod-desig">Assoc. Prof. &amp; Head</p>
                </div>
                <Link to="/tamil" className="btn btn-outline">Explore</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </Layout>
);

export default Departments;
