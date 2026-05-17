import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const Examinations = () => (
  <Layout>
    <PageBanner
      title="Examinations"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Examinations' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">Student Portals &amp; Important Links</h2>
        <div className="courses-grid reveal" style={{gridTemplateColumns:'repeat(2,minmax(0,300px))',justifyContent:'center'}}>
          <div className="course-card">
            <div className="icon"><i className="fas fa-money-bill-wave"></i></div>
            <h3>Exam Fee Payment</h3>
            <p>Pay your semester examination fees online through the Manonmaniam Sundaranar University official student portal.</p>
            <a href="https://msuniv.com/exam-fees" target="_blank" rel="noopener" className="btn btn-outline">Pay Exam Fees</a>
          </div>
          <div className="course-card">
            <div className="icon"><i className="fas fa-chart-line"></i></div>
            <h3>Results Portal</h3>
            <p>Check your end-semester examination results published by Manonmaniam Sundaranar University on their official results portal.</p>
            <a href="https://www.msuniv.ac.in/msuniv_exam_result.php" target="_blank" rel="noopener" className="btn btn-outline">View Results</a>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Examination System</h2>
        <div className="about-content-block reveal">
          <p>Government Arts and Science College, Sankarankovil conducts its examinations under the guidelines of Manonmaniam Sundaranar University, Tirunelveli. The evaluation system is designed to assess both theoretical knowledge and practical competence of every student.</p>

          <h3 style={{marginTop:'1.5rem',color:'var(--primary-navy)'}}>Continuous Internal Assessment (CIA)</h3>
          <p>Each course carries <strong>25 marks</strong> for internal assessment, comprising two written tests, assignments, and attendance. Three CIA tests are conducted per semester. A minimum of <strong>75% attendance</strong> is mandatory for eligibility to appear in end-semester examinations.</p>

          <h3 style={{marginTop:'1.5rem',color:'var(--primary-navy)'}}>End-Semester Examination (ESE)</h3>
          <p>The remaining <strong>75 marks</strong> are evaluated through a comprehensive written examination at the end of each semester. Practical courses include laboratory examinations and viva-voce sessions conducted by internal and external examiners.</p>

          <h3 style={{marginTop:'1.5rem',color:'var(--primary-navy)'}}>Grading System</h3>
          <p>The college follows a <strong>10-point CGPA system</strong> in accordance with UGC guidelines. Grade sheets and consolidated mark statements are issued to students upon successful completion of each semester.</p>

          <h3 style={{marginTop:'1.5rem',color:'var(--primary-navy)'}}>Supplementary Examinations</h3>
          <p>Students who fail to clear any paper are given the opportunity to appear for <strong>supplementary examinations</strong> conducted on final year Students. This ensures no student is denied the chance to progress in their academic journey.</p>

          <h3 style={{marginTop:'1.5rem',color:'var(--primary-navy)'}}>Results</h3>
          <p>Examination results are published by Manonmaniam Sundaranar University within 30 days of the last examination. Students can access their results online through the university portal. Revaluation and photocopy requests can be submitted within the prescribed period.</p>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="section-title">Examination Cell</h2>
        <div className="about-content-block reveal">
          <p>The Examination Cell of our college is functioning for the conduct of Internal Examinations, Model Examinations and End-Semester Examinations of all UG Courses. All the Examinations are being conducted as per the norms prescribed by the MS University and on Centralized System.</p>
          <p style={{marginTop:'0.75rem'}}>To perform all the examinations related work, the Examination Cell consists of the following Faculty Team:</p>
        </div>

        <div className="reveal" style={{overflowX:'auto',marginTop:'2rem'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.92rem'}}>
            <thead>
              <tr style={{background:'var(--primary-navy)',color:'#fff'}}>
                <th style={{padding:'0.8rem 1.1rem',textAlign:'left',border:'1px solid #c0c8dc'}}>Name</th>
                <th style={{padding:'0.8rem 1.1rem',textAlign:'left',border:'1px solid #c0c8dc'}}>Designation</th>
                <th style={{padding:'0.8rem 1.1rem',textAlign:'center',border:'1px solid #c0c8dc'}}>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{background:'#f8f9fb'}}>
                <td style={{padding:'0.75rem 1.1rem',border:'1px solid #e0e4ed',fontWeight:'700',color:'var(--primary-navy)'}}>Dr. Shenbagavalli R.</td>
                <td style={{padding:'0.75rem 1.1rem',border:'1px solid #e0e4ed'}}>Associate Professor &amp; Head of Computer Science &amp; Statistics</td>
                <td style={{padding:'0.75rem 1.1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>
                  <span style={{background:'var(--primary-navy)',color:'#fff',fontSize:'0.75rem',fontWeight:'700',padding:'0.25rem 0.75rem',borderRadius:'20px'}}>Co-ordinator</span>
                </td>
              </tr>
              <tr>
                <td style={{padding:'0.75rem 1.1rem',border:'1px solid #e0e4ed',fontWeight:'700',color:'var(--primary-navy)'}}>Dr. Bangusha Devi S.</td>
                <td style={{padding:'0.75rem 1.1rem',border:'1px solid #e0e4ed'}}>Guest Lecturer in Statistics</td>
                <td style={{padding:'0.75rem 1.1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>
                  <span style={{background:'var(--accent-blue)',color:'#fff',fontSize:'0.75rem',fontWeight:'700',padding:'0.25rem 0.75rem',borderRadius:'20px'}}>Member</span>
                </td>
              </tr>
              <tr style={{background:'#f8f9fb'}}>
                <td style={{padding:'0.75rem 1.1rem',border:'1px solid #e0e4ed',fontWeight:'700',color:'var(--primary-navy)'}}>Dr. Velusamy M.</td>
                <td style={{padding:'0.75rem 1.1rem',border:'1px solid #e0e4ed'}}>Guest Lecturer in Statistics</td>
                <td style={{padding:'0.75rem 1.1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>
                  <span style={{background:'var(--accent-blue)',color:'#fff',fontSize:'0.75rem',fontWeight:'700',padding:'0.25rem 0.75rem',borderRadius:'20px'}}>Member</span>
                </td>
              </tr>
              <tr>
                <td style={{padding:'0.75rem 1.1rem',border:'1px solid #e0e4ed',fontWeight:'700',color:'var(--primary-navy)'}}>Dr. Kabinath D.</td>
                <td style={{padding:'0.75rem 1.1rem',border:'1px solid #e0e4ed'}}>Guest Lecturer in Statistics</td>
                <td style={{padding:'0.75rem 1.1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>
                  <span style={{background:'var(--accent-blue)',color:'#fff',fontSize:'0.75rem',fontWeight:'700',padding:'0.25rem 0.75rem',borderRadius:'20px'}}>Member</span>
                </td>
              </tr>
              <tr style={{background:'#f8f9fb'}}>
                <td style={{padding:'0.75rem 1.1rem',border:'1px solid #e0e4ed',fontWeight:'700',color:'var(--primary-navy)'}}>Dr. Krishnaveni M.</td>
                <td style={{padding:'0.75rem 1.1rem',border:'1px solid #e0e4ed'}}>Guest Lecturer in Statistics</td>
                <td style={{padding:'0.75rem 1.1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>
                  <span style={{background:'var(--accent-blue)',color:'#fff',fontSize:'0.75rem',fontWeight:'700',padding:'0.25rem 0.75rem',borderRadius:'20px'}}>Member</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default Examinations;
