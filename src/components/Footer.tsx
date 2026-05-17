import { Link } from 'react-router-dom';

const MAPS_URL = "https://www.google.com/maps/place/Government+Arts+and+Science+College+Sankarankovil/@9.1771504,77.545089,17z/data=!3m1!4b1!4m6!3m5!1s0x3b06970070dddf15:0x7047941a3fcb7042!8m2!3d9.1771504!4d77.5476639!16s%2Fg%2F11vx674_cq?entry=ttu&g_ep=EgoyMDI2MDMxNy4wIKXMDSoASAFQAw%3D%3D";

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-top-bar"></div>
    <div className="footer-main">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-mark">GASC</div>
            <p className="footer-college-name">Government Arts and Science College</p>
            <p className="footer-location">Sankarankovil &mdash; 627 756, Tenkasi District, Tamil Nadu</p>
            <p className="footer-about">Empowering students through quality education, research, and holistic development.</p>
          </div>

          <div className="footer-col">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/departments">Departments</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5 className="footer-heading">Contact</h5>
            <ul className="footer-contact-list">
              <li>
                <span className="fci">&#9679;</span>
                <span>434/2 Thiruvengadam Road, Sankarankovil &mdash; 627 756,<br />Tenkasi District, Tamil Nadu</span>
              </li>
              <li>
                <span className="fci">&#9679;</span>
                <span>04636 &ndash; 291085</span>
              </li>
              <li>
                <span className="fci">&#9679;</span>
                <span>gascskovil@gmail.com</span>
              </li>
            </ul>
            <a href={MAPS_URL} target="_blank" rel="noopener" className="footer-maps-btn">View on Google Maps &#8599;</a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <span>&copy; 2026 Government Arts and Science College, Sankarankovil. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
