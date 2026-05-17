import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const CollegeMagazineCommittee = () => (
  <Layout>
    <PageBanner
      title="College Magazine &amp; Annual Report Preparation Committee"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Committee', path: '/committee' },
        { label: 'College Magazine & Annual Report' },
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
                <td>Dr. K. KALAGOPI</td>
                <td>Associate Professor</td>
                <td>Coordinator</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dr. S. MAHESH PANDI</td>
                <td>Guest Lecturer</td>
                <td>Member</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dr. M. KRISHNAVENI</td>
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

export default CollegeMagazineCommittee;
