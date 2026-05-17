import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const formsCss = `
  .forms-intro { text-align:center; max-width:640px; margin:0 auto 3rem; color:#555; font-size:1rem; line-height:1.7; }
  .forms-category { margin-bottom:3.5rem; }
  .forms-category-title { display:flex; align-items:center; gap:0.75rem; font-size:1.15rem; font-weight:700; color:var(--primary-navy); text-transform:uppercase; letter-spacing:0.8px; margin-bottom:1.25rem; padding-bottom:0.6rem; border-bottom:2px solid var(--accent-gold); }
  .forms-category-title .cat-icon { width:32px; height:32px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:1rem; flex-shrink:0; }
  .forms-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:1.25rem; }
  .form-card { background:#fff; border:1px solid #e4e9f0; border-radius:12px; padding:1.4rem 1.5rem; display:flex; align-items:flex-start; gap:1rem; box-shadow:0 2px 8px rgba(0,0,0,0.05); transition:box-shadow 0.22s,transform 0.22s,border-color 0.22s; }
  .form-card:hover { box-shadow:0 6px 20px rgba(0,0,0,0.1); transform:translateY(-3px); border-color:var(--accent-gold); }
  .form-card-icon { width:46px; height:46px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-size:1.3rem; flex-shrink:0; }
  .form-card-body { flex:1; min-width:0; }
  .form-card-body h4 { font-size:0.95rem; font-weight:700; color:var(--primary-navy); margin:0 0 0.3rem; line-height:1.35; }
  .form-card-body p { font-size:0.82rem; color:#777; margin:0 0 0.9rem; line-height:1.5; }
  .form-dl-btn { display:inline-flex; align-items:center; gap:0.4rem; font-size:0.8rem; font-weight:700; padding:0.38rem 0.9rem; border-radius:6px; border:2px solid var(--primary-navy); color:var(--primary-navy); background:transparent; text-decoration:none; transition:background 0.18s,color 0.18s; white-space:nowrap; }
  .form-dl-btn:hover { background:var(--primary-navy); color:#fff; }
  .form-dl-btn.available { border-color:#1a6e3d; color:#1a6e3d; }
  .form-dl-btn.available:hover { background:#1a6e3d; color:#fff; }
  .icon-blue { background:#e8f0fe; color:#1a56db; }
  .icon-green { background:#dcfce7; color:#15803d; }
  .icon-red { background:#fee2e2; color:#b91c1c; }
`;

const Forms = () => (
  <Layout>
    <style>{formsCss}</style>
    <PageBanner
      title="Forms & Downloads"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Forms & Downloads' }]}
    />

    <section className="section">
      <div className="container">
        <p className="forms-intro reveal">
          Download official documents, forms, and academic resources published by Government Arts and Science College, Sankarankovil. All files are in PDF format unless stated otherwise.
        </p>

        <div className="forms-category reveal">
          <h3 className="forms-category-title">
            <span className="cat-icon icon-blue"><i className="fas fa-book"></i></span>
            Academic Documents
          </h3>
          <div className="forms-grid">
            <div className="form-card">
              <div className="form-card-icon icon-blue"><i className="fas fa-calendar-alt"></i></div>
              <div className="form-card-body">
                <h4>Academic Calendar 2025–2026</h4>
                <p>Official academic calendar for the academic year 2025–2026.</p>
                <a href="/pdfs/Academic%20Calendar%202025-2026.pdf" target="_blank" className="form-dl-btn available">&#8595; Download PDF</a>
              </div>
            </div>
            <div className="form-card">
              <div className="form-card-icon icon-blue"><i className="fas fa-book"></i></div>
              <div className="form-card-body">
                <h4>College Hand Book</h4>
                <p>Official college hand book with rules, regulations, and academic guidelines.</p>
                <a href="/pdfs/HAND%20BOOK%2001-09-25.pdf" target="_blank" className="form-dl-btn available">&#8595; Download PDF</a>
              </div>
            </div>
          </div>
        </div>

        <div className="forms-category reveal">
          <h3 className="forms-category-title">
            <span className="cat-icon icon-green"><i className="fas fa-graduation-cap"></i></span>
            Forms for Students
          </h3>
          <div className="forms-grid">
            {[
              { title:'Attendance Certificate', desc:'Application form to obtain an attendance certificate for scholarship or other official purposes.', pdf:'formsforstudents/Attendance%20Certificate%20pdf..pdf' },
              { title:'Bonafide Certificate', desc:'Bonafide Certificate application form for students requiring proof of enrollment.', pdf:'formsforstudents/Bonafide%20Certificate.pdf' },
              { title:'Conduct Certificate', desc:'Application form for obtaining a conduct certificate from the college.', pdf:'formsforstudents/Conduct%20Certificate%20snkl.pdf' },
              { title:'Transfer Certificate Application', desc:'Form for students requesting a Transfer Certificate from the institution.', pdf:'formsforstudents/Transfer%20certificate%20Application.pdf' },
              { title:'No Due Form', desc:'No Due clearance form to be submitted during Transfer Certificate or semester completion.', pdf:'formsforstudents/NO%20DUE%20FORM.pdf' },
              { title:'Fresh BC & MBC Form', desc:'Fresh scholarship application form for Backward Classes and Most Backward Classes students.', pdf:'formsforstudents/Fresh%20BC%20%26%20MBC.pdf' },
              { title:'Renewal BC & MBC Form', desc:'Renewal scholarship application form for Backward Classes and Most Backward Classes students.', pdf:'formsforstudents/Renewal%20BC%20%26%20MBC.pdf' },
              { title:'Fresh SC & ST Form', desc:'Fresh scholarship application form for Scheduled Caste and Scheduled Tribe students.', pdf:'formsforstudents/Fresh%20SC%20%26%20ST.pdf' },
              { title:'Renewal SC & ST Form', desc:'Renewal scholarship application form for Scheduled Caste and Scheduled Tribe students.', pdf:'formsforstudents/Renewal%20SC%20%26%20ST.pdf' },
            ].map(f => (
              <div key={f.title} className="form-card">
                <div className="form-card-icon icon-green"><i className="fas fa-file-alt"></i></div>
                <div className="form-card-body">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                  <a href={`/pdfs/${f.pdf}`} target="_blank" className="form-dl-btn available">&#8595; Download PDF</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="forms-category reveal">
          <h3 className="forms-category-title">
            <span className="cat-icon icon-red"><i className="fas fa-users"></i></span>
            Forms for Faculty &amp; Staff
          </h3>
          <div className="forms-grid">
            {[
              { title:'Leave Form', desc:'General leave application form for teaching and non-teaching staff.', pdf:'formsforstaff/Leave%20form%20pdf.pdf' },
              { title:'ML Leave', desc:'Medical Leave application form for staff, to be submitted with a medical certificate.', pdf:'formsforstaff/ML%20LEAVE.pdf' },
              { title:'Application of Continuity Leave', desc:'Application form for staff requesting continuity/extension of leave.', pdf:'formsforstaff/Application%20of%20Continuity%20Leave.pdf' },
              { title:'Joining Duty Form (ML)', desc:'Form to be submitted by staff when joining duty after Medical Leave.', pdf:'formsforstaff/Joining%20Duty%20form%20ML.pdf' },
              { title:'Application of On Duty', desc:'On Duty application form for staff attending official assignments outside college.', pdf:'formsforstaff/Application%20of%20On%20duty.pdf' },
              { title:'OD Joining', desc:'Form to be submitted by staff when joining back after On Duty.', pdf:'formsforstaff/OD%20Joining.pdf' },
              { title:'Permission for SEP', desc:'Permission application form for staff participating in Special Extension Programme.', pdf:'formsforstaff/permission%20for%20SEP.pdf' },
              { title:'Service Certificate', desc:'Application form to obtain a service certificate from the college administration.', pdf:'formsforstaff/Service%20Certificate.pdf' },
            ].map(f => (
              <div key={f.title} className="form-card">
                <div className="form-card-icon icon-red"><i className="fas fa-file-alt"></i></div>
                <div className="form-card-body">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                  <a href={`/pdfs/${f.pdf}`} target="_blank" className="form-dl-btn available">&#8595; Download PDF</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Forms;
