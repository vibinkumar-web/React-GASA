import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const CollegeCalendar = () => (
  <Layout>
    <PageBanner
      title="College Calendar"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'College Calendar' }]}
    />
    <section className="section">
      <div className="container">
        <h2 className="section-title">Academic Calendar</h2>
        <div className="academic-content reveal" style={{display:'block'}}>
          <div className="main-content" style={{overflowX:'auto', maxWidth:'900px', margin:'0 auto'}}>
            <table className="council-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Event</th>
                  <th>Period / Date</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Commencement of Odd Semester Classes</td><td>June</td></tr>
                <tr><td>2</td><td>CIA &ndash; I (Internal Test)</td><td>August</td></tr>
                <tr><td>3</td><td>CIA &ndash; II (Internal Test)</td><td>September</td></tr>
                <tr><td>4</td><td>CIA &ndash; III (Internal Test) / MODEL EXAM / PRACTICAL</td><td>October</td></tr>
                <tr><td>5</td><td>End Semester Examination &ndash; Odd Semester</td><td>November</td></tr>
                <tr><td>6</td><td>Semester Holidays</td><td>November &ndash; December</td></tr>
                <tr><td>7</td><td>Commencement of Even Semester Classes</td><td>December</td></tr>
                <tr><td>8</td><td>CIA &ndash; I (Internal Test)</td><td>January</td></tr>
                <tr><td>9</td><td>CIA &ndash; II (Internal Test)</td><td>February</td></tr>
                <tr><td>10</td><td>CIA &ndash; III (Internal Test) / MODEL EXAM / PRACTICAL</td><td>March</td></tr>
                <tr><td>11</td><td>End Semester Examination &ndash; Even Semester</td><td>April &ndash; May</td></tr>
                <tr><td>12</td><td>Summer Vacation</td><td>May &ndash; June</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default CollegeCalendar;
