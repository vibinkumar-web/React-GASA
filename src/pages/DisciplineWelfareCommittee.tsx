import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const DisciplineWelfareCommittee = () => (
  <Layout>
    <PageBanner
      title="Discipline Committee"
      breadcrumbs={[
        { label: 'Home', path: '/' },
        { label: 'Committee', path: '/committee' },
        { label: 'Discipline Committee' },
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
                <th>Name</th>
                <th>Position (Chairperson/Member)</th>
                <th>Category</th>
                <th>Contact Numbers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr. G. VENUGOPAL<br /><em>Principal [FAC]</em></td>
                <td>Chairperson</td>
                <td>Principal of the College</td>
                <td>9566153465</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dr. R. SHENBAGAVALLI<br /><em>Associate Professor</em></td>
                <td>Member</td>
                <td>Senior Faculty Member of the College</td>
                <td>9487247711</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dr. K. KALA GOPI<br /><em>Associate Professor</em></td>
                <td>Member</td>
                <td>Lady Faculty Member</td>
                <td>9626760542</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Dr. N. SUKUMARAN<br /><em>Assistant Professor</em></td>
                <td>Member</td>
                <td>IQAC &amp; NSS Coordinator</td>
                <td>9486609345</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Dr. D. SELVAM<br /><em>Physical Director</em></td>
                <td>Member</td>
                <td>Physical Director</td>
                <td>9894876058</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default DisciplineWelfareCommittee;
