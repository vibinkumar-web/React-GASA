import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const SportsCommittee = () => (
  <Layout>
    <PageBanner
      title="Sports Committee"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Committee', path: '/committee' },
        { label: 'Sports Committee' },
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
                <td>Dr. D. SELVAM</td>
                <td>Physical Director</td>
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
                <td>Dr. M. VELUSAMY</td>
                <td>Guest Lecturer</td>
                <td>Member</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Mrs. S. SHUNMUGAPRIYA</td>
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

export default SportsCommittee;
