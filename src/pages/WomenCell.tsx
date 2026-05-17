import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const css = `
  .wc-intro {
    font-size: 0.97rem;
    color: #333;
    line-height: 1.8;
    margin-bottom: 1.25rem;
  }
  .wc-subsection-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary-navy);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border-left: 4px solid var(--primary-blue, #1a3c6e);
    padding-left: 0.75rem;
    margin: 1.75rem 0 0.75rem;
  }
  .wc-list {
    list-style: none;
    padding: 0;
    margin: 0 0 0.5rem 0;
  }
  .wc-list li {
    position: relative;
    padding: 0.45rem 0 0.45rem 1.6rem;
    font-size: 0.95rem;
    color: #333;
    line-height: 1.7;
    border-bottom: 1px solid #eee;
  }
  .wc-list li:last-child { border-bottom: none; }
  .wc-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.85rem;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary-blue, #1a3c6e);
  }
`;

const WomenCell = () => (
  <Layout>
    <style>{css}</style>
    <PageBanner
      title="Women Cell"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Committee', path: '/committee' },
        { label: 'Women Cell' },
      ]}
    />
    <section className="section">
      <div className="container">
        <h2 className="section-title">Women Cell</h2>

        <div className="reveal">
          <h3 className="wc-subsection-title">Objectives</h3>
          <ul className="wc-list">
            <li>To create awareness among students about gender equality.</li>
            <li>To help students develop a positive and respectful attitude towards women.</li>
            <li>To encourage female students to participate more and become responsible, value-based leaders.</li>
            <li>To promote a society with equal social and economic rights for all, as stated in the Indian Constitution.</li>
            <li>To support rural women by informing them about their social and legal rights and helping them stand against violence and discrimination.</li>
            <li>To build awareness, good values, and leadership skills among members.</li>
          </ul>
        </div>

        <div className="reveal">
          <h3 className="wc-subsection-title">Activities</h3>
          <ul className="wc-list">
            <li>Awareness programs on issues related to sexual harassment.</li>
            <li>Celebration of Women's Day.</li>
            <li>Special seminars on confidence building and personality development for women.</li>
          </ul>
        </div>

        <div className="reveal" style={{ overflowX: 'auto' }}>
          <h3 className="wc-subsection-title">Composition of Women Cell</h3>
          <table className="council-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Mobile No.</th>
                <th>Mail ID</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><strong>Dr. K. KALA GOPI</strong></td>
                <td>Associate Professor of Tamil</td>
                <td>9626760542</td>
                <td><a href="mailto:Kkalagopi77@gmail.com">Kkalagopi77@gmail.com</a></td>
                <td>Coordinator</td>
              </tr>
              <tr>
                <td>2</td>
                <td><strong>Dr. RAMALAKSHMI</strong></td>
                <td>Guest Lecturer in Commerce</td>
                <td>9942120344</td>
                <td><a href="mailto:ramalakshmi1986@gmail.com">ramalakshmi1986@gmail.com</a></td>
                <td>Member</td>
              </tr>
              <tr>
                <td>3</td>
                <td><strong>Dr. C. MANOGARAMMAL</strong></td>
                <td>Guest Lecturer in Tamil</td>
                <td>7502079115</td>
                <td><a href="mailto:mano5mku@gmail.com">mano5mku@gmail.com</a></td>
                <td>Member</td>
              </tr>
              <tr>
                <td>4</td>
                <td><strong>Dr. S. BANGUSHA DEVI</strong></td>
                <td>Guest Lecturer in Statistics</td>
                <td>7904689479</td>
                <td><a href="mailto:Bangusha89@gmail.com">Bangusha89@gmail.com</a></td>
                <td>Member</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  </Layout>
);

export default WomenCell;
