import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const ptaCss = `
  .pta-intro { font-size:0.97rem; color:#333; line-height:1.8; margin-bottom:1.25rem; }
  .pta-subsection-title { font-size:1rem; font-weight:700; color:var(--primary-navy); text-transform:uppercase; letter-spacing:0.04em; border-left:4px solid #1a3c6e; padding-left:0.75rem; margin:1.75rem 0 0.75rem; }
  .pta-list { list-style:none; padding:0; margin:0 0 0.5rem 0; }
  .pta-list li { position:relative; padding:0.45rem 0 0.45rem 1.6rem; font-size:0.95rem; color:#333; line-height:1.7; border-bottom:1px solid #eee; }
  .pta-list li:last-child { border-bottom:none; }
  .pta-list li::before { content:''; position:absolute; left:0; top:0.85rem; width:8px; height:8px; border-radius:50%; background:#1a3c6e; }
  .pta-closing { background:#f0f4fb; border-left:4px solid #1a3c6e; padding:1rem 1.25rem; border-radius:0 6px 6px 0; font-size:0.95rem; color:#2c3e50; line-height:1.75; margin-top:1.5rem; }
  .council-table { width:100%; border-collapse:collapse; font-size:0.92rem; margin-top:0.5rem; }
  .council-table thead tr { background:var(--primary-navy); color:#fff; }
  .council-table th { padding:0.75rem 1rem; text-align:left; border:1px solid #c0c8dc; }
  .council-table tbody tr:nth-child(even) { background:#f8f9fb; }
  .council-table td { padding:0.7rem 1rem; border:1px solid #e0e4ed; }
`;

const PTA = () => (
  <Layout>
    <style>{ptaCss}</style>
    <PageBanner
      title="Parent Teacher Association (PTA)"
      breadcrumbs={[{ label:'Home', path:'/' }, { label:'Committee', path:'/committee' }, { label:'PTA' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">About the PTA</h2>
        <div className="about-content-block reveal">
          <p className="pta-intro">
            The Parent-Teacher Association (PTA) has been functioning in our college since 2020 and was formally registered in 2023 (Reg. No: SRG/Tenkasi/108/2022). Parent-Teacher Associations operate under established guidelines aimed at fostering collaboration between parents, teachers, and the college administration to support student development and maintain academic standards.
          </p>
          <p className="pta-intro">
            The Association places great importance on every parent's perspective. Decisions regarding the development of the college are made in consultation with all members of the PTA. The PTA also plays a vital role in addressing staff shortages by appointing guest lecturers. Additionally, it appoints watchmen and office assistants as needed. PTA funds are maintained in a separate bank account and are utilised based on decisions taken by the Governing Council, under the direction of the Principal.
          </p>
        </div>

        <div className="reveal">
          <h3 className="pta-subsection-title">Key Governance and Rules of the PTA</h3>
          <ul className="pta-list">
            <li><strong>Constitution:</strong> PTAs are constituted in accordance with the guidelines of the University Grants Commission (UGC) and function as formal bodies managed by an Executive Committee.</li>
            <li><strong>Membership:</strong> All parents and teachers are eligible for membership, typically upon payment of an annual fee.</li>
            <li><strong>Executive Committee (EC):</strong> The PTA is governed by an Executive Committee elected during the Annual General Body Meeting. This committee usually includes the Principal (ex-officio President), teaching faculty, and parent representatives.</li>
            <li><strong>Office Bearers &amp; Eligibility:</strong> As per recent directives from the Madurai Bench of the Madras High Court (2025), only parents of current students are eligible to serve as office-bearers, ensuring genuine representation.</li>
            <li><strong>Membership Duration:</strong> A parent's membership automatically ceases once their child completes the course.</li>
            <li><strong>Role and Purpose:</strong> PTAs aim to mobilise resources, provide feedback on student welfare, improve institutional facilities, and strengthen relationships between parents and staff.</li>
            <li><strong>Functioning and Meetings:</strong> The Executive Committee meets periodically to discuss student-related matters.</li>
          </ul>
        </div>

        <div className="reveal">
          <h3 className="pta-subsection-title">Financial Management and Fees</h3>
          <ul className="pta-list">
            <li>PTA funds are utilised for developmental activities of the college and student welfare initiatives.</li>
            <li>Accounts are maintained by a designated Treasurer, typically a staff member.</li>
            <li>Proper documentation of all receipts and expenditures is mandatory.</li>
            <li>The PTA functions as a supportive body to the college administration.</li>
          </ul>
        </div>

        <div className="reveal">
          <h3 className="pta-subsection-title">Registration</h3>
          <p className="pta-intro" style={{marginBottom:'0.5rem'}}>
            The Parent-Teacher Association (PTA) has been functioning in our college since 2020 and was formally registered in 2023 (<strong>Reg. No: SRG/Tenkasi/108/2022</strong>).
          </p>
          <a href="/pdfs/Registration.pdf" target="_blank" rel="noopener" style={{marginTop:'0.75rem',display:'inline-flex',alignItems:'center',gap:'0.5rem',textDecoration:'none',color:'var(--primary-navy)',fontWeight:'600',border:'1px solid var(--primary-navy)',padding:'0.5rem 1.2rem',borderRadius:'6px'}}>
            <i className="fas fa-file-alt"></i> Registration Document &#8599;
          </a>
        </div>

        <div className="reveal" style={{overflowX:'auto',marginTop:'1rem'}}>
          <h3 className="pta-subsection-title">Office Bearers 2025&ndash;2026</h3>
          <table className="council-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Position</th>
                <th>Mobile No.</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name:'Dr. G. VENUGOPAL', desig:'Principal [FAC]', pos:'President', mob:'9566153465' },
                { name:'Mr. S. SUGNTHA ANBU', desig:'Parent', pos:'Vice President', mob:'9688182912' },
                { name:'Dr. K. KALA GOPI', desig:'Asso. Prof. of Tamil', pos:'Secretary', mob:'9626760542' },
                { name:'Mrs. S. SANGEETHA', desig:'Parent', pos:'Joint Secretary', mob:'—' },
                { name:'Dr. R. SHENBAGAVALLI', desig:'Asso. Professor of Computer Science', pos:'Treasurer', mob:'9498194813' },
                { name:'Mr. K. MADASAMY', desig:'Parent', pos:'Executive Member', mob:'—' },
                { name:'Mr. Anand', desig:'Advocate', pos:'Executive Member', mob:'9865107885' },
              ].map((r, i) => (
                <tr key={r.name}>
                  <td>{i + 1}</td>
                  <td><strong>{r.name}</strong></td>
                  <td>{r.desig}</td>
                  <td>{r.pos}</td>
                  <td>{r.mob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="reveal">
          <p className="pta-closing">
            We proudly record that the Parent-Teacher Association has consistently worked for the benefit of the college and in the best interests of the students. We remain committed to further contributing to the institution's growth by enhancing and upgrading infrastructural facilities in the years to come.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default PTA;
