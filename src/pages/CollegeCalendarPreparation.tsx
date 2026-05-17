import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const CollegeCalendarPreparation = () => (
  <Layout>
    <PageBanner
      title="College Calendar Preparation"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Committee', path: '/committee' },
        { label: 'College Calendar Preparation' },
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
                <td>Dr. R. SHENBAGAVALLI</td>
                <td>Associate Professor</td>
                <td>Coordinator</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dr. S. YUVARANI</td>
                <td>Computer Programmer</td>
                <td>Member</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default CollegeCalendarPreparation;
