import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const SCSTWelfareCommittee = () => (
  <Layout>
    <PageBanner
      title="SC &amp; ST Welfare Committee"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Committee', path: '/committee' },
        { label: 'SC & ST Welfare Committee' },
      ]}
    />
    <section className="section">
      <div className="container">
        <h2 className="section-title">Committee Members</h2>
        <div className="reveal" style={{ overflowX: 'auto' }}>
          <table className="council-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Faculty Incharge</th>
                <th>Designation</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr. N. SUKUMARAN</td>
                <td>Assistant Professor</td>
                <td>Coordinator</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dr. T. ILAMPARITHI</td>
                <td>Guest Lecturer</td>
                <td>Member</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dr. D. KABINATH</td>
                <td>Guest Lecturer</td>
                <td>Member</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default SCSTWelfareCommittee;
