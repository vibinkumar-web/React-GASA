import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const infraCss = `
  .infra-subsection-title { font-size:1rem; font-weight:700; color:var(--primary-navy); text-transform:uppercase; letter-spacing:0.04em; border-left:4px solid #1a3c6e; padding-left:0.75rem; margin:1.75rem 0 0.75rem; }
  .infra-para { font-size:0.95rem; color:#333; line-height:1.8; margin-bottom:0.9rem; }
  .infra-list { list-style:none; padding:0; margin:0.5rem 0 0.75rem 0; }
  .infra-list li { position:relative; padding:0.4rem 0 0.4rem 1.6rem; font-size:0.94rem; color:#333; line-height:1.7; border-bottom:1px solid #eee; }
  .infra-list li:last-child { border-bottom:none; }
  .infra-list li::before { content:''; position:absolute; left:0; top:0.82rem; width:8px; height:8px; border-radius:50%; background:#1a3c6e; }
  .infra-note { background:#f0f4fb; border-left:4px solid #1a3c6e; padding:0.85rem 1.15rem; border-radius:0 6px 6px 0; font-size:0.93rem; color:#2c3e50; line-height:1.75; margin:1rem 0; }
  .infra-section-divider { border:none; border-top:1px solid #e0e4ed; margin:1.75rem 0; }
`;

const MaintainingInfrastructure = () => (
  <Layout>
    <style>{infraCss}</style>
    <PageBanner
      title="Maintaining Infrastructure"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Committee', path: '/committee' }, { label: 'Maintaining Infrastructure' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">Overview</h2>
        <div className="about-content-block reveal">
          <p className="infra-para">The institution has established clear procedures and policies to ensure the proper maintenance and effective use of physical, academic, and support facilities such as Class rooms, Computer Lab, Library and Sports.</p>
          <p className="infra-para">All facilities are regularly maintained through a structured system. Computer facilities are supervised by designated staff, and equipment is periodically checked, serviced, and updated. Safety guidelines are strictly followed, and students are instructed on proper usage before accessing computer resources. The physical facilities are optimally utilized by various departments for academic and co-curricular activities. Additionally, students of the NSS unit actively participate in campus maintenance activities twice a year as part of their programme.</p>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Academic Facilities</h2>
        <div className="reveal">
          <p className="infra-para">Every year, the Government sanctions funds for the utilization and maintenance of academic facilities such as classrooms, computers, and the library. The Governing Council determines the allocation of these funds based on the specific requirements of each department.</p>
          <hr className="infra-section-divider" />
          <h3 className="infra-subsection-title">Classrooms</h3>
          <p className="infra-para">Students are responsible for maintaining cleanliness and ensuring that their classrooms are kept neat and tidy. The college provides well-equipped and well-ventilated classrooms that support a conducive learning environment. Necessary teaching aids such as boards, projectors, and seating arrangements are regularly inspected and repaired when needed.</p>
          <div className="infra-note">Any deliberate damage to classroom property, including benches, desks, electrical fittings, or other infrastructure, shall be borne by the students responsible, either individually or collectively.</div>
          <hr className="infra-section-divider" />
          <h3 className="infra-subsection-title">Computer Lab</h3>
          <p className="infra-para">The college is equipped with a 100 Mbps (1:1) Internet Leased Line and Firewall, which is accessible to all departments at their respective premises.</p>
          <p className="infra-para">The institution has one centralized computer laboratory with a total of 25 computers, supported by both inter-network and intra-network facilities. These labs are utilized by all departments on a rotational and need-based schedule. A staff member is deputed to supervise and manage these laboratories. Students are permitted to use the labs without footwear, and strict usage regulations are prominently displayed at the entrance.</p>
          <div className="infra-note">Students are permitted to use computer facilities in compliance with all prescribed safety protocols. Any damage to equipment or breakage caused during usage must be borne by the students.</div>
          <hr className="infra-section-divider" />
          <h3 className="infra-subsection-title">Library</h3>
          <p className="infra-para">The Library System includes a Central (General) Library and five departmental libraries, which together support the teaching, research, and extension activities of the institution. All students, faculty members, and staff can access library facilities after obtaining membership. The library also houses a vast collection of general and subject-related books.</p>
          <p style={{fontWeight:'700',color:'var(--primary-navy)',margin:'1rem 0 0.5rem',fontSize:'0.95rem'}}>Library Rules and Procedures</p>
          <ul className="infra-list">
            <li>ID card is mandatory for entry into the library.</li>
            <li>ID cards are non-transferable.</li>
            <li>Users must sign in at the entrance register before entering.</li>
            <li>Writing in, marking, or damaging library materials is strictly prohibited.</li>
            <li>Any damaged or defaced book must be replaced by the borrower.</li>
            <li>In case of loss, the borrower must replace the book or pay three times its cost.</li>
            <li>ID card is required to borrow books for photocopying.</li>
            <li>Silence must be maintained at all times.</li>
            <li>Personal belongings are not allowed inside.</li>
            <li>Textbooks, printed materials, and issued books are not permitted inside the library.</li>
            <li>Mobile phones are strictly prohibited.</li>
            <li>Faculty can access lending services on all working days.</li>
            <li>Users must maintain a calm and respectful environment conducive to study.</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2 className="section-title">Sports</h2>
        <div className="about-content-block reveal">
          <p className="infra-para">The sports playgrounds are maintained to promote physical well-being. Equipment is checked regularly, and students are guided by physical education staff for safe usage.</p>
          <p className="infra-para">Various sports and games are conducted annually at the end of the even semester for both students and staff. Events include both individual and team competitions, and winners are honoured with medals and trophies during the College Sports Day.</p>
          <div className="infra-note">Sports equipment is issued to students after proper entry in the issue register, and any damage caused must be compensated by the users. Damaged items are auctioned once every three years.</div>
          <p className="infra-para" style={{marginTop:'0.9rem'}}>All furniture, equipment, and related materials are periodically / yearly audited by internal committees. Stock verification reports are submitted to the Principal, and the concerned departments are held responsible for any discrepancies or missing items.</p>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Canteen</h2>
        <div className="about-content-block reveal">
          <p className="infra-para">The College offers a separate space and building for operating canteen services on contract. It is currently run by a Women Self-Help Group (SHG) that offers hygienic food at affordable rates. The canteen is open on all working days.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default MaintainingInfrastructure;
