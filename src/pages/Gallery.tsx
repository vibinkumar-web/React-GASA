import { useState } from 'react';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const galleryCss = `
  .gallery-others-wrap { margin-top:0.5rem; }
  .gallery-sub-section { margin-bottom:3rem; }
  .gallery-sub-title { display:flex; align-items:center; gap:0.6rem; font-size:1.05rem; font-weight:700; color:var(--primary-navy); text-transform:uppercase; letter-spacing:0.6px; padding-bottom:0.55rem; margin-bottom:1.1rem; border-bottom:2px solid var(--accent-gold); }
  .gallery-sub-icon { font-size:1.1rem; }
`;

type Filter = 'all' | 'campus' | 'events' | 'graduation' | 'staff' | 'news' | 'others';

const Gallery = () => {
  const [filter, setFilter] = useState<Filter>('all');

  const mainItems = [
    { cat: 'campus', src: 'images/Campus/DSC_2406.JPG', cap: 'Campus — View 1' },
    { cat: 'campus', src: 'images/Campus/DSC_2423.JPG', cap: 'Campus — View 2' },
    { cat: 'campus', src: 'images/Campus/DSC_2429.JPG', cap: 'Campus — View 3' },
    { cat: 'campus', src: 'images/Campus/DSC_2432.JPG', cap: 'Campus — View 4' },
    { cat: 'campus', src: 'images/Campus/DSC_2435.JPG', cap: 'Campus — View 5' },
    { cat: 'events', src: 'images/Events/1.jpeg', cap: 'College Day & Sports Day' },
    { cat: 'events', src: 'images/Events/2.jpeg', cap: 'College Day & Sports Day' },
    { cat: 'events', src: 'images/Events/3.jpeg', cap: 'College Day & Sports Day' },
    { cat: 'events', src: 'images/Events/4.jpeg', cap: 'College Day & Sports Day' },
    { cat: 'events', src: 'images/Events/5.jpeg', cap: 'College Day & Sports Day' },
    { cat: 'graduation', src: 'images/First Graduation day/1.jpeg', cap: 'First Graduation Day — 1' },
    { cat: 'graduation', src: 'images/First Graduation day/2.jpeg', cap: 'First Graduation Day — 2' },
    { cat: 'graduation', src: 'images/First Graduation day/3.jpeg', cap: 'First Graduation Day — 3' },
    { cat: 'graduation', src: 'images/First Graduation day/4.jpeg', cap: 'First Graduation Day — 4' },
    { cat: 'staff', src: 'images/Staff/General-Staff/Staffs.jpeg', cap: 'College Staff — 1' },
  ];

  const showMain = filter === 'all' || ['campus','events','graduation','staff'].includes(filter);
  const showOthers = filter === 'all' || filter === 'others';
  const showNews = filter === 'all' || filter === 'news';

  const filtered = showMain ? (filter === 'all' ? mainItems : mainItems.filter(i => i.cat === filter)) : [];

  return (
    <Layout>
      <style>{galleryCss}</style>
      <PageBanner
        title="Photo Gallery"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]}
      />
      <section className="section">
        <div className="container">
          <div className="gallery-filters">
            {(['all','campus','events','graduation','staff','news','others'] as Filter[]).map(f => (
              <button key={f} className={`filter-btn${filter===f?' active':''}`} onClick={() => setFilter(f)}>
                {f.charAt(0).toUpperCase()+f.slice(1)}
              </button>
            ))}
          </div>

          {filtered.length > 0 && (
            <div className="gallery-grid">
              {filtered.map((item, i) => (
                <div key={i} className="gallery-item">
                  <img src={`/${item.src}`} alt={item.cap} />
                  <div className="gallery-caption">{item.cap}</div>
                </div>
              ))}
            </div>
          )}

          {showOthers && (
            <div className="gallery-others-wrap">
              <div className="gallery-sub-section">
                <h3 className="gallery-sub-title"><span className="gallery-sub-icon"><i className="fas fa-users"></i></span> PTA Meeting</h3>
                <div className="gallery-grid">
                  {[1,2,3,4,5].map(n => (
                    <div key={n} className="gallery-item"><img src={`/images/PTA, Meeting/${n}.jpg`} alt={`PTA Meeting ${n}`} /><div className="gallery-caption">PTA Meeting — {n}</div></div>
                  ))}
                </div>
              </div>
              <div className="gallery-sub-section">
                <h3 className="gallery-sub-title"><span className="gallery-sub-icon"><i className="fas fa-plane"></i></span> Exposure Visit +2</h3>
                <div className="gallery-grid">
                  {[1,2,3,4,5,6].map(n => (
                    <div key={n} className="gallery-item"><img src={`/images/Exposure-visit-2/${n}.jpg`} alt={`Exposure Visit +2 — ${n}`} /><div className="gallery-caption">Exposure Visit +2 — {n}</div></div>
                  ))}
                </div>
              </div>
              <div className="gallery-sub-section">
                <h3 className="gallery-sub-title"><span className="gallery-sub-icon"><i className="fas fa-graduation-cap"></i></span> First Year Orientation Programme</h3>
                <div className="gallery-grid">
                  {[1,2].map(n => (
                    <div key={n} className="gallery-item"><img src={`/images/First year Orientation Programme/${n}.jpg`} alt={`Orientation Programme ${n}`} /><div className="gallery-caption">Orientation Programme — {n}</div></div>
                  ))}
                </div>
              </div>
              <div className="gallery-sub-section">
                <h3 className="gallery-sub-title"><span className="gallery-sub-icon"><i className="fas fa-landmark"></i></span> Red Ribbon Club (RRC)</h3>
                <div className="gallery-grid">
                  {[1,2].map(n => (
                    <div key={n} className="gallery-item"><img src={`/images/RRC/${n}.jpeg`} alt={`Red Ribbon Club ${n}`} /><div className="gallery-caption">Red Ribbon Club (RRC) — {n}</div></div>
                  ))}
                </div>
              </div>
              <div className="gallery-sub-section">
                <h3 className="gallery-sub-title"><span className="gallery-sub-icon"><i className="fas fa-brain"></i></span> Gender Psychology</h3>
                <div className="gallery-grid">
                  <div className="gallery-item"><img src="/images/Gender-psychology/PHOTO-2025-11-23-13-09-25.jpg" alt="Gender Psychology 1" /><div className="gallery-caption">Gender Psychology — 1</div></div>
                  <div className="gallery-item"><img src="/images/Gender-psychology/PHOTO-2025-11-23-13-09-25 (2).jpg" alt="Gender Psychology 2" /><div className="gallery-caption">Gender Psychology — 2</div></div>
                </div>
              </div>
              <div className="gallery-sub-section">
                <h3 className="gallery-sub-title"><span className="gallery-sub-icon"><i className="fas fa-ambulance"></i></span> Road Safety Club</h3>
                <div className="gallery-grid">
                  <div className="gallery-item"><img src="/images/Road Safety Club/IMG_20260123_115146494.jpg" alt="Road Safety Club 1" /><div className="gallery-caption">Road Safety Club — 1</div></div>
                  <div className="gallery-item"><img src="/images/Road Safety Club/IMG_20260123_115227146_HDR.jpg" alt="Road Safety Club 2" /><div className="gallery-caption">Road Safety Club — 2</div></div>
                </div>
              </div>
            </div>
          )}

          {showNews && (
            <div className="gallery-others-wrap">
              <div className="gallery-sub-section">
                <h3 className="gallery-sub-title"><span className="gallery-sub-icon"><i className="fas fa-newspaper"></i></span> News &amp; Updates</h3>
                <div className="gallery-grid">
                  {[
                    'News image 1.jpeg','PHOTO-2025-07-03-06-51-07.jpg','PHOTO-2025-07-06-17-00-01.jpg',
                    'PHOTO-2025-07-22-16-39-17.jpg','PHOTO-2025-08-11-07-33-32.jpg',
                    'PHOTO-2025-12-19-16-46-48.jpg','PHOTO-2026-01-29-12-53-44.jpg','PHOTO-2026-01-29-12-53-44_1.jpg'
                  ].map((f,i) => (
                    <div key={i} className="gallery-item"><img src={`/images/News/${f}`} alt={`News ${i+1}`} /><div className="gallery-caption">News — {i+1}</div></div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
