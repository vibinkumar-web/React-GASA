import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const antiRaggingCss = `
  .policy-list { list-style:none; padding:0; margin:1rem 0 0 0; }
  .policy-list li { padding:0.5rem 0 0.5rem 1.8rem; position:relative; font-size:0.95rem; color:#333; border-bottom:1px solid #eee; }
  .policy-list li:last-child { border-bottom:none; }
  .policy-list li::before { content:''; position:absolute; left:0; top:0.82rem; width:10px; height:10px; border-radius:50%; background:#c0392b; }
  .contact-box { background:var(--primary-navy); border-radius:8px; padding:1.25rem 2rem; margin-top:1.5rem; display:inline-flex; flex-direction:column; align-items:center; text-align:center; border:1px solid rgba(255,255,255,0.15); }
  .contact-box p { margin:0.3rem 0; font-size:0.95rem; color:#ffffff; display:flex; align-items:center; justify-content:center; gap:0.45rem; }
  .contact-box strong { color:#c9a84c; font-size:1rem; }
  .contact-box a { color:#7dd3fc; text-decoration:none; font-weight:600; }
`;

const AntiRagging = () => (
  <Layout>
    <style>{antiRaggingCss}</style>
    <PageBanner
      title="Anti-Ragging Committee"
      breadcrumbs={[{ label:'Home', path:'/' }, { label:'Committee', path:'/committee' }, { label:'Anti-Ragging' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">Objective</h2>
        <div className="about-content-block reveal">
          <p>The primary objective of establishing an Anti-Ragging Cell within our educational institution is to create a safe, respectful and conducive environment for all students, free from any form of physical, mental or emotional harassment.</p>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Anti-Ragging Policy</h2>
        <div className="about-content-block reveal">
          <p>Under the Anti-Ragging Policy, the following behaviors are strictly prohibited:</p>
          <ul className="policy-list">
            <li>Any form of physical violence, including hitting, punching, kicking, or physically restraining another individual, whether in a direct or indirect manner.</li>
            <li>Using derogatory language, insults, threats or verbal intimidation to demean, humiliate or harass another person.</li>
            <li>Engaging in behaviors such as coercion, manipulation, or psychological abuse with the intent to instill fear, anxiety or distress in others.</li>
            <li>Breaching any policies, guidelines, or regulations established by the institution or the Anti-Ragging Cell to prevent and address incidents of ragging.</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="section-title">Complaints Procedure</h2>
        <div className="about-content-block reveal">
          <ul className="policy-list">
            <li>Any individual who witnesses or experiences an incident of ragging is encouraged to report it immediately to designated authorities.</li>
            <li>Confidentiality is maintained throughout the reporting and investigation process to protect the privacy and safety of the individuals involved.</li>
            <li>Complaints can be submitted anonymously if preferred, and information is shared on a need-to-know basis to safeguard the identities of victims.</li>
          </ul>
          <div className="contact-box">
            <p><strong>Helpline Numbers</strong></p>
            <p><i className="fas fa-phone"></i> 1800-180-5522 &nbsp;|&nbsp; 04295-224229</p>
            <p><i className="fas fa-globe"></i> <a href="http://www.antiragging.in" target="_blank" rel="noopener">www.antiragging.in</a></p>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Anti-Ragging Committee Composition</h2>
        <p className="reveal" style={{color:'#555',marginBottom:'1rem'}}>Ragging is strictly prohibited in the college. The institution follows the regulations of the UGC and the State Government to prevent ragging in higher educational institutions.</p>
        <div className="reveal" style={{overflowX:'auto'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.92rem'}}>
            <thead>
              <tr style={{background:'var(--primary-navy)',color:'#fff'}}>
                <th style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #c0c8dc',width:'55px'}}>S.No.</th>
                <th style={{padding:'0.8rem 1rem',textAlign:'left',border:'1px solid #c0c8dc'}}>Name</th>
                <th style={{padding:'0.8rem 1rem',textAlign:'left',border:'1px solid #c0c8dc'}}>Designation</th>
                <th style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #c0c8dc',width:'130px'}}>Position</th>
                <th style={{padding:'0.8rem 1rem',textAlign:'center',border:'1px solid #c0c8dc',width:'140px'}}>Mobile No.</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name:'Dr. G. Venugopal', desig:'Principal [FAC]', pos:'Chairman', mob:'9566153465' },
                { name:'Dr. R. Shenbagavalli', desig:'Asso. Professor of Computer Science', pos:'Member', mob:'9498194813' },
                { name:'Dr. K. Kalagopi', desig:'Asso. Prof. of Tamil', pos:'Member', mob:'9626760542' },
                { name:'Dr. N. Sukumaran', desig:'Asst. Prof. of Sociology', pos:'Member', mob:'9486609345' },
                { name:'Dr. D. Selvam', desig:'Physical Director', pos:'Member', mob:'9894876058' },
                { name:'Mr. V. Sundaraja Perumal', desig:'Superintendent', pos:'Member', mob:'9443004549' },
                { name:'Mr. S. Sungtha Anbu', desig:'Parent', pos:'Member', mob:'9688182912' },
                { name:'Mrs. Shanmugavadivu', desig:'Inspector of Police', pos:'Member', mob:'9498194813' },
                { name:'Mrs. K. Vijayalakshmi', desig:'Advocate', pos:'Member', mob:'9487604946' },
              ].map((r, i) => (
                <tr key={r.name} style={i % 2 === 0 ? {background:'#f8f9fb'} : {}}>
                  <td style={{padding:'0.75rem 1rem',textAlign:'center',border:'1px solid #e0e4ed',fontWeight:'700'}}>{i + 1}</td>
                  <td style={{padding:'0.75rem 1rem',border:'1px solid #e0e4ed',fontWeight:'700',color:'var(--primary-navy)'}}>{r.name}</td>
                  <td style={{padding:'0.75rem 1rem',border:'1px solid #e0e4ed'}}>{r.desig}</td>
                  <td style={{padding:'0.75rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>{r.pos}</td>
                  <td style={{padding:'0.75rem 1rem',textAlign:'center',border:'1px solid #e0e4ed'}}>{r.mob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </Layout>
);

export default AntiRagging;
