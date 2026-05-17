import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const committeeCss = `
  .mandatory-committee-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.1rem;
  }
  @media (max-width: 900px) {
    .mandatory-committee-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 560px) {
    .mandatory-committee-grid { grid-template-columns: 1fr; }
  }

  .committee-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.9rem;
    padding: 2rem 1.2rem;
    background: #fff;
    border-radius: 12px;
    border: 1px solid #e2e8f4;
    box-shadow: 0 2px 8px rgba(26,42,108,0.07);
    text-decoration: none;
    text-align: center;
    color: var(--primary-navy);
    transition: background 0.22s ease, color 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
  }
  .committee-card:hover {
    background: var(--primary-navy);
    color: #fff;
    border-color: var(--primary-navy);
    box-shadow: 0 8px 24px rgba(26,42,108,0.18);
  }

  .committee-card-icon {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: var(--primary-navy);
    transition: background 0.22s ease, color 0.22s ease;
    flex-shrink: 0;
  }
  .committee-card:hover .committee-card-icon {
    background: var(--accent-gold);
    color: var(--primary-navy);
  }

  .committee-card-name {
    font-size: 0.88rem;
    font-weight: 600;
    line-height: 1.45;
    color: inherit;
  }

  .committee-card-chevron { display: none; }
`;

const committees = [
  { to: '/iqac',                         icon: 'fa-award',           name: 'IQAC' },
  { to: '/nirf-aishe',                   icon: 'fa-chart-bar',       name: 'NIRF & AISHE' },
  { to: '/anti-ragging',                 icon: 'fa-shield-alt',      name: 'Anti-Ragging' },
  { to: '/rusa',                         icon: 'fa-university',      name: 'RUSA' },
  { to: '/college-website-committee',    icon: 'fa-globe',           name: 'College Website' },
  { to: '/umis-data-maintenance',        icon: 'fa-database',        name: 'UMIS Data Maintenance' },
  { to: '/sports-committee',             icon: 'fa-running',         name: 'Sports Committee' },
  { to: '/discipline-welfare-committee', icon: 'fa-gavel',           name: 'Discipline Committee' },
  { to: '/icc',                          icon: 'fa-balance-scale',   name: 'Internal Complaints Committee (ICC)' },
  { to: '/sc-st-welfare-committee',      icon: 'fa-hands-helping',   name: 'SC & ST Welfare Committee' },
  { to: '/college-calendar-preparation', icon: 'fa-calendar-alt',    name: 'College Calendar Preparation' },
  { to: '/college-magazine-committee',   icon: 'fa-newspaper',       name: 'College Magazine & Annual Report' },
  { to: '/pwd-coordination-committee',   icon: 'fa-wheelchair',      name: 'PWD Coordination Committee' },
  { to: '/pta',                          icon: 'fa-users',           name: 'PTA' },
  { to: '/finance',                      icon: 'fa-rupee-sign',      name: 'Finance' },
  { to: '/women-cell',                   icon: 'fa-venus',           name: "Women Cell" },
];

const Committee = () => (
  <Layout>
    <style>{committeeCss}</style>
    <PageBanner
      title="Committee"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Administration' }, { label: 'Committee' }]}
    />

    <section className="section">
      <div className="container">
        <h2 className="section-title">College Governing Council</h2>
        <div className="reveal" style={{overflowX:'auto'}}>
          <table className="council-table">
            <thead>
              <tr><th>S.NO</th><th>Name</th><th>Designation</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Dr. G. VENUGOPAL</td><td>PRINCIPAL [FAC]</td></tr>
              <tr><td>2</td><td>Dr R. SHENBAGAVALLI</td><td>ASSOCIATE PROF. &amp; HEAD OF COM.SCIENCE &amp; STATISTICS</td></tr>
              <tr><td>3</td><td>Dr K. KALAGOPI</td><td>ASSOCIATE PROF. &amp; HEAD OF TAMIL AND ENGLISH</td></tr>
              <tr><td>4</td><td>Dr N. SUKUMARAN</td><td>ASSISTANT PROF. &amp; HEAD OF SOCIOLOGY</td></tr>
              <tr><td>5</td><td>Dr D. SELVAM</td><td>PHYSICAL DIRECTOR</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Mandatory Committee</h2>
        <div className="mandatory-committee-grid reveal">
          {committees.map(({ to, icon, name }) => (
            <Link key={to} to={to} className="committee-card">
              <div className="committee-card-icon">
                <i className={`fas ${icon}`}></i>
              </div>
              <span className="committee-card-name">{name}</span>
              <i className="fas fa-chevron-right committee-card-chevron"></i>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Committee;
