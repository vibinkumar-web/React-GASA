import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const iccCss = `
  .icc-list { list-style:none; padding:0; margin:0.75rem 0 0 0; }
  .icc-list li { padding:0.45rem 0 0.45rem 1.8rem; position:relative; font-size:0.95rem; color:#333; }
  .icc-list li::before { content:''; position:absolute; left:0; top:0.75rem; width:10px; height:10px; border-radius:50%; background:#c9a84c; }
  .icc-section-heading { margin-top:1.75rem; color:var(--primary-navy); font-size:1.05rem; font-weight:700; }
  .data-table { width:100%; border-collapse:collapse; font-size:0.92rem; margin-top:1.5rem; }
  .data-table thead tr { background:var(--primary-navy); color:#fff; }
  .data-table th { padding:0.8rem 1.1rem; text-align:left; border:1px solid #c0c8dc; }
  .data-table th.center { text-align:center; }
  .data-table tbody tr:nth-child(even) { background:#f8f9fb; }
  .data-table td { padding:0.75rem 1.1rem; border:1px solid #e0e4ed; vertical-align:top; }
  .data-table td.sl { text-align:center; font-weight:600; }
  .data-table td.name-col { font-weight:700; color:var(--primary-navy); }
  .role-badge { display:inline-block; font-size:0.75rem; font-weight:700; padding:0.25rem 0.75rem; border-radius:20px; color:#fff; white-space:nowrap; }
  .badge-coord { background:var(--primary-navy); }
  .badge-member { background:#1a6e3c; }
  .contact-box { background:#f0f4fa; border-left:4px solid var(--primary-navy); border-radius:6px; padding:1rem 1.5rem; margin-top:1.5rem; font-size:0.95rem; color:#333; }
  .contact-box strong { color:var(--primary-navy); }
`;

const ICC = () => (
  <Layout>
    <style>{iccCss}</style>
    <PageBanner
      title="Internal Complaints Committee (ICC)"
      breadcrumbs={[{ label:'Home', path:'/' }, { label:'Committee', path:'/committee' }, { label:'ICC' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">About ICC</h2>
        <div className="about-content-block reveal">
          <p><strong>Dr. R. Shenbagavalli</strong>, Associate Professor &amp; Head, Department of Computer Science is the Coordinator of the Internal Complaint Committee (ICC).</p>
          <p style={{marginTop:'0.75rem'}}>As per the guidelines of UGC and the Supreme Court, an Anti-Sexual Harassment Committee has been established by the college to provide a healthy atmosphere to the students of the college. The committee deals with issues relating to sexual harassment and is formed to prevent sexual assault, rape and other related crimes on girl students.</p>

          <p className="icc-section-heading" style={{marginTop:'1.25rem'}}><strong>Goal</strong></p>
          <p>Prevention of sexual harassment to ensure safe environment for girl students for their studies.</p>

          <h3 className="icc-section-heading">Objectives</h3>
          <ul className="icc-list">
            <li>To develop guidelines and norms for policies against sexual harassment.</li>
            <li>To develop principles and procedures to combat sexual harassment.</li>
            <li>To work out details for the implementation of these policies.</li>
            <li>To prepare a detailed plan of actions, both short and long term.</li>
            <li>To organize gender sensitization awareness programme.</li>
            <li>To deal with cases of discrimination and sexual harassment in a time bound manner, aiming at ensuring support services to the victimized.</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">What is Sexual Harassment?</h2>
        <div className="about-content-block reveal">
          <p>For this purpose, sexual harassment includes unwelcome sexually determined behavior (whether directly or by implication) such as:</p>
          <ul className="icc-list">
            <li>Verbal or Physical threats.</li>
            <li>Insulting, Abusive, Embarrassing or Patronizing behavior or Comments.</li>
            <li>Offensive gestures, Language, Rumors, Gossip or Jokes.</li>
            <li>Humiliating, Intimidating, Demeaning and/or Persistent criticism, Open hostility.</li>
            <li>Suggestive comments or Body language.</li>
            <li>Isolation or Exclusion from normal work or study place.</li>
            <li>Publishing, Circulating or Displaying pornographic, Racist, Sexually suggestive or Otherwise offensive pictures or Other materials.</li>
            <li>Unwanted physical contact, Ranging from an invasion of space to a serious assault.</li>
          </ul>

          <h3 className="icc-section-heading">The following is also covered by the committee</h3>
          <ul className="icc-list">
            <li>Eve-teasing</li>
            <li>Unsavory remarks</li>
            <li>Jokes causing or likely to cause awkwardness or embarrassment</li>
            <li>Innuendos and taunts</li>
            <li>Gender based insults or sexist remarks</li>
            <li>Unwelcome sexual overtone in any manner such as over telephone and the like</li>
            <li>Touching or brushing against any part of the body and the like</li>
            <li>Displaying pornographic or other offensive or derogatory pictures, cartoons, pamphlets or sayings</li>
            <li>Forcible physical touch or molestation</li>
            <li>Physical confinement against one's will and any other act likely to violate one's privacy</li>
          </ul>

          <p style={{marginTop:'1rem'}}>The Anti Sexual Harassment Cell assures that all complaints of students, teaching and non-teaching staff are treated with dignity and respect, and complaints shall be maintained confidential.</p>
          <p style={{marginTop:'0.5rem'}}><strong>False Reporting:</strong> Intentionally making a false report or providing false information is grounds for indiscipline.</p>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="section-title">Composition of the Committee</h2>
        <div className="reveal" style={{overflowX:'auto'}}>
          <table className="data-table">
            <thead>
              <tr>
                <th className="center" style={{width:'55px'}}>S.NO</th>
                <th>Name</th>
                <th>Designation</th>
                <th style={{width:'130px'}}>Position</th>
                <th style={{width:'130px'}}>Mobile No.</th>
                <th>Email ID</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name:'Dr. R. Shenbagavalli', desig:'Associate Professor', role:'Coordinator', badge:'badge-coord', mob:'9487247711', email:'shenba3000@gmail.com' },
                { name:'Dr. K. Kalagopi', desig:'Associate Professor', role:'Member', badge:'badge-member', mob:'9444834449', email:'kkalagopi77@gmail.com' },
                { name:'Dr. N. Sukumaran', desig:'Assistant Professor', role:'Member', badge:'badge-member', mob:'9486609345', email:'sukumaran77450@gmail.com' },
                { name:'Dr. D. Selvam', desig:'Physical Director', role:'Member', badge:'badge-member', mob:'9894876058', email:'dselvam1978@gmail.com' },
                { name:'Mrs. Divya', desig:'Sub-Inspector', role:'Member', badge:'badge-member', mob:'8838471805', email:'—' },
              ].map((r, i) => (
                <tr key={r.name}>
                  <td className="sl">{i + 1}</td>
                  <td className="name-col">{r.name}</td>
                  <td>{r.desig}</td>
                  <td><span className={`role-badge ${r.badge}`}>{r.role}</span></td>
                  <td>{r.mob}</td>
                  <td>{r.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="contact-box reveal">
          <strong>For any Complaints, Queries &amp; Assistance</strong><br />
          <i className="fas fa-phone"></i> Contact: <strong>9994159306</strong>
        </div>
      </div>
    </section>
  </Layout>
);

export default ICC;
