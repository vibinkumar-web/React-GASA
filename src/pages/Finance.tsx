import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const Finance = () => (
  <Layout>
    <PageBanner
      title="Finance Committee"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Committee', path: '/committee' },
        { label: 'Finance Committee' },
      ]}
    />
    <section className="section">
      <div className="container">
        <h2 className="section-title">Finance Committee</h2>
        <div className="reveal" style={{ overflowX: 'auto' }}>
          <table className="council-table">
            <thead>
              <tr>
                <th style={{ width: '60px' }}>S.No</th>
                <th>Members</th>
                <th style={{ width: '180px' }}>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <strong>Principal</strong><br />
                  Government Arts and Science College,<br />
                  434/2 Thiruvengadam Road,<br />
                  Sankarankovil &mdash; 627 756,<br />
                  Tenkasi District, Tamil Nadu
                </td>
                <td>Chairperson</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <strong>Mr. SRINIVASAN</strong><br />
                  Bursar / Finance Officer<br />
                  Government Arts and Science College,<br />
                  434/2 Thiruvengadam Road,<br />
                  Sankarankovil &mdash; 627 756,<br />
                  Tenkasi District, Tamil Nadu
                </td>
                <td>Special Invitee</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default Finance;
