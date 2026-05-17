import { useState } from 'react';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact Us' }]}
      />
      <section className="section">
        <div className="container">
          <div className="contact-grid reveal">
            <div>
              <h2 style={{marginBottom:'var(--gap-md)',fontSize:'1.6rem'}}>Send Us a Message</h2>
              {submitted ? (
                <p style={{color:'green',fontWeight:'600'}}>Thank you! Your message has been received.</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="formName">Full Name</label>
                    <input type="text" id="formName" placeholder="Enter your full name" required
                      value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formEmail">Email Address</label>
                    <input type="email" id="formEmail" placeholder="Enter your email address" required
                      value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formSubject">Subject</label>
                    <input type="text" id="formSubject" placeholder="What is this regarding?" required
                      value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formMessage">Message</label>
                    <textarea id="formMessage" placeholder="Write your message here..." required
                      value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{width:'100%'}}>Send Message</button>
                </form>
              )}
            </div>
            <div>
              <div className="contact-info-card">
                <h4>College Address</h4>
                <p>Government Arts and Science College,</p>
                <p>434/2 Thiruvengadam Road,</p>
                <p>Sankarankovil &mdash; 627 756</p>
                <p>Tenkasi District, Tamil Nadu</p>
              </div>
              <div className="contact-info-card">
                <h4><i className="fas fa-phone"></i> Phone &amp; Email</h4>
                <p><strong>Office:</strong> 04636 &ndash; 291085</p>
                <p><strong>Email:</strong> gascskovil@gmail.com</p>
              </div>
              <div className="contact-info-card">
                <h4>&#128338; College Hours</h4>
                <p><strong>10:00 AM &ndash; 03:30 PM</strong></p>
                <br />
                <h4>&#128338; Office Hours</h4>
                <p><strong>Monday &ndash; Friday:</strong> 10:00 AM &ndash; 05:45 PM</p>
              </div>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.5!2d77.545089!3d9.1771504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06970070dddf15%3A0x7047941a3fcb7042!2sGovernment%20Arts%20and%20Science%20College%20Sankarankovil!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="College location on Google Maps">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
