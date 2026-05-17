import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const PWDCoordinationCommittee = () => (
  <Layout>
    <PageBanner
      title="PWD Coordination Committee"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Committee', path: '/committee' },
        { label: 'PWD Coordination Committee' },
      ]}
    />
    <section className="section">
      <div className="container">
        <h2 className="section-title">Committee Members</h2>
        <div className="reveal" style={{ overflowX: 'auto' }}>
          <table className="council-table">
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Name &amp; Designation</th>
                <th>Position</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><strong>Dr. G. VENUGOPAL</strong><br /><em>Principal [FAC]</em></td>
                <td>Chairperson</td>
                <td>9566153465</td>
              </tr>
              <tr>
                <td>2</td>
                <td><strong>Dr. R. SHENBAGAVALLI</strong><br /><em>Associate Professor</em></td>
                <td>Member</td>
                <td>9487247711</td>
              </tr>
              <tr>
                <td>3</td>
                <td><strong>Dr. K. KALA GOPI</strong><br /><em>Associate Professor</em></td>
                <td>Member</td>
                <td>9626760542</td>
              </tr>
              <tr>
                <td>4</td>
                <td><strong>Mr. V. SUNDARAJAPERUMAL</strong><br /><em>Superintendent</em></td>
                <td>Member</td>
                <td>7502079115</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default PWDCoordinationCommittee;
