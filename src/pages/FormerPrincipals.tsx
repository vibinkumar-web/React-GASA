import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const FormerPrincipals = () => (
  <Layout>
    <PageBanner
      title="Former Principal's List"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: "Former Principal's List" }]}
    />
    <section className="section">
      <div className="container">
        <h2 className="section-title">List of Principals</h2>
        <div className="reveal" style={{overflowX:'auto'}}>
          <table className="council-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Qualification</th>
                <th>From</th>
                <th>To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mr. S. Suresh <span style={{fontSize:'0.8rem',color:'#888'}}>(FAC)</span></td>
                <td>M.Com., M.Phil.</td>
                <td>15.06.2020</td>
                <td>17.11.2021</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dr. P. Victoria Thangam</td>
                <td>M.Sc., M.Phil., B.Ed., Ph.D.</td>
                <td>17.11.2021</td>
                <td>07.05.2025</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dr. G. Venugopal <span style={{fontSize:'0.8rem',color:'#888'}}>(FAC)</span></td>
                <td>M.Com., B.Ed., M.Phil., M.B.A., Ph.D.</td>
                <td>08.05.2025</td>
                <td>Till Date</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default FormerPrincipals;
