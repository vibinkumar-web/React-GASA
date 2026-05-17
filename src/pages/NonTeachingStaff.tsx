import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const NonTeachingStaff = () => (
  <Layout>
    <PageBanner
      title="Non Teaching Staff"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Administration' }, { label: 'Non Teaching Staff' }]}
    />
    <section className="section">
      <div className="container">
        <h2 className="section-title">Administrative &amp; Support Staff</h2>
        <p className="section-subtitle">Our non-teaching staff play a vital role in the smooth functioning of the college, providing essential administrative and support services.</p>
        <div className="reveal" style={{overflowX:'auto'}}>
          <table className="council-table">
            <colgroup>
              <col style={{width:'10%'}} />
              <col style={{width:'60%'}} />
              <col style={{width:'30%'}} />
            </colgroup>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Mr. Srinivasan T</td><td>Bursar/Finance Officer</td></tr>
              <tr><td>2</td><td>Mr. Sundararaja Perumal V, B.com</td><td>Superintendent</td></tr>
              <tr><td>3</td><td>Mrs. Mariammal S, M.Sc., B.Ed., M.Phil.</td><td>Assistant</td></tr>
              <tr><td>4</td><td>Mrs. Backyalakshmi G, B.lit(Tamil)</td><td>Assistant</td></tr>
              <tr><td>5</td><td>Mrs. Petchiammal D</td><td>Junior Assistant</td></tr>
              <tr><td>6</td><td>Ms. Santhiya S, B.sc</td><td>Junior Assistant</td></tr>
              <tr><td>7</td><td>Dr. Yuvarani S, M.Sc., M.Phil., Ph.D.</td><td>Assistant Computer Programmer</td></tr>
              <tr><td>8</td><td>Mr. Kinslin K, B.sc</td><td>Typist</td></tr>
              <tr><td>9</td><td>Mr. Senthilkumaran B</td><td>Office Assistant</td></tr>
              <tr><td>10</td><td>Mrs. Mahadevi K</td><td>Office Assistant</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default NonTeachingStaff;
