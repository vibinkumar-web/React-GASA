import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const rusaCss = `
  .data-table { width:100%; border-collapse:collapse; font-size:0.92rem; margin-top:1.5rem; }
  .data-table thead tr { background:var(--primary-navy); color:#fff; }
  .data-table th { padding:0.8rem 1.1rem; text-align:left; border:1px solid #c0c8dc; }
  .data-table th.center { text-align:center; }
  .data-table tbody tr:nth-child(even) { background:#f8f9fb; }
  .data-table td { padding:0.75rem 1.1rem; border:1px solid #e0e4ed; vertical-align:top; }
  .data-table td.sl { text-align:center; font-weight:600; }
  .data-table td.name-col { font-weight:700; color:var(--primary-navy); }
`;

const RUSA = () => (
  <Layout>
    <style>{rusaCss}</style>
    <PageBanner
      title="RUSA"
      breadcrumbs={[{ label:'Home', path:'/' }, { label:'Committee', path:'/committee' }, { label:'RUSA' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">About RUSA</h2>
        <div className="about-content-block reveal">
          <p>Rashtriya Uchchatar Shiksha Abhiyan (RUSA) is a Centrally Sponsored Scheme aimed at providing strategic funding to eligible state higher educational institutions. The scheme is implemented to improve the overall quality of existing state higher educational institutions.</p>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">RUSA &ndash; Faculty In-charge</h2>
        <div className="reveal" style={{overflowX:'auto'}}>
          <table className="data-table">
            <thead>
              <tr>
                <th className="center" style={{width:'55px'}}>S.No</th>
                <th>Faculty In-charge</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="sl">1</td>
                <td className="name-col">Dr. R. Shenbagavalli</td>
                <td>Associate Professor &amp; Head of Computer Science</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default RUSA;
