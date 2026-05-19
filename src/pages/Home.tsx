import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { imgUrl } from '../utils/asset';

const Home = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = lightboxImg ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxImg]);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="hero">
        <img src={imgUrl("images/General-Images/unnamed.jpg")} alt="Government Arts and Science College, Sankarankovil" className="hero-img" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Government Arts and Science College, Sankarankovil</h1>
          <span className="hero-badge">Empowering Minds &bull; Transforming Futures &bull; Since June 2020</span>
        </div>
      </section>

      {/* About College Preview */}
      <section className="section about-section">
        <div className="container">
          <h2 className="section-title">About Our College</h2>
          <div className="about-section-layout">
            <div className="about-card reveal">
              <div className="about-card-img">
                <img src={imgUrl("images/General-Images/unnamed.jpg")} alt="Government Arts and Science College, Sankarankovil" />
                <div className="about-img-badge">Est. 2020</div>
              </div>
              <div className="about-card-body">
                <span className="about-tag">Government Institution</span>
                <h3 className="about-card-heading">Empowering Communities Through Education</h3>
                <p className="about-card-desc">Affiliated to Manonmaniam Sundaranar University, the college is located on a 3.31-acre campus at 434/2 Thiruvengadam Road, Sankarankovil, Tenkasi District. The permanent <strong>Government Arts and Science College</strong> building was inaugurated by the Honourable Chief Minister of Tamil Nadu on <strong>22 January 2024</strong>.</p>
                <div className="about-stats">
                  <div className="about-stat">
                    <span className="about-stat-num">690+</span>
                    <span className="about-stat-label">Students</span>
                  </div>
                  <div className="about-stat">
                    <span className="about-stat-num">5</span>
                    <span className="about-stat-label">UG Programmes</span>
                  </div>
                  <div className="about-stat">
                    <span className="about-stat-num">30</span>
                    <span className="about-stat-label">Teaching Staff</span>
                  </div>
                </div>
                <Link to="/about" className="btn btn-primary">Discover More</Link>
              </div>
            </div>

            {/* Right Column: Quick Links + Notifications */}
            <div className="about-right-col">
              {/* Quick Links Sidebar */}
              <div className="quick-links-sidebar reveal">
                <div className="quick-links-header">
                  <span className="quick-links-icon"><i className="fas fa-graduation-cap"></i></span>
                  <h3 className="quick-links-title">Admission Quick Links</h3>
                </div>
                <ul className="quick-links-list">
                  <li>
                    <Link to="/admissions" className="quick-link-item">
                      <span className="quick-link-arrow">&#8250;</span>
                      <span>Admission Guidelines 2026&ndash;27</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses-offered" className="quick-link-item">
                      <span className="quick-link-arrow">&#8250;</span>
                      <span>Courses Offered</span>
                    </Link>
                  </li>
                  <li>
                    <a href="/pdfs/admission.pdf" className="quick-link-item">
                      <span className="quick-link-arrow">&#8250;</span>
                      <span>Admission details</span>
                    </a>
                  </li>
                  <li>
                    <Link to="/admissions#eligibility" className="quick-link-item">
                      <span className="quick-link-arrow">&#8250;</span>
                      <span>Eligibility Criteria</span>
                    </Link>
                  </li>
                </ul>
                <a href="https://www.tngasa.in/" className="quick-links-cta">Apply Online &rarr;</a>
              </div>

              {/* Notification Card */}
              <div className="notification-card reveal">
                <div className="notification-header">
                  <span className="notification-icon"><i className="fas fa-bell"></i></span>
                  <h3 className="notification-title">Notifications</h3>
                </div>
                <ul className="notification-list">
                  <li>
                    <button
                      className="notification-item"
                      onClick={() => setLightboxImg(imgUrl('images/Notification/TNEA - 2026.jpeg'))}
                    >
                      <span className="notification-dot"></span>
                      <span>TNEA &ndash; 2026</span>
                      <span className="notification-new">NEW</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImg(null)}>&times;</button>
            <img src={lightboxImg} alt="TNEA 2026 Notification" className="lightbox-img" />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Home;
