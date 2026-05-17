import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    document.documentElement.style.overflow = '';
  }, [location]);

  const openMenu = () => {
    setMenuOpen(true);
    document.documentElement.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    document.documentElement.style.overflow = '';
  };

  const toggleMenu = () => {
    if (menuOpen) closeMenu(); else openMenu();
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => prev === name ? null : name);
  };

  const isActive = (path: string) => location.pathname === path;
  const isDropdownActive = (paths: string[]) => paths.some(p => location.pathname === p);

  const dropdownGroups: Record<string, { label: string; items: { label: string; path: string }[] }> = {
    about: {
      label: 'About',
      items: [
        { label: 'History of College', path: '/history' },
        { label: 'Vision, Mission & Motto', path: '/vision-mission' },
        { label: 'Commencement of Course', path: '/commencement' },
        { label: "Former Principal's List", path: '/former-principals' },
        { label: 'College Calendar', path: '/college-calendar' },
      ],
    },
    administration: {
      label: 'Administration',
      items: [
        { label: 'Principal', path: '/principal' },
        { label: 'Non Teaching Staff', path: '/non-teaching-staff' },
        { label: 'Committee', path: '/committee' },
        { label: 'Award & Recognition', path: '/award-recognition' },
        { label: 'Maintaining Infrastructure', path: '/maintaining-infrastructure' },
      ],
    },
    academics: {
      label: 'Academics',
      items: [
        { label: 'Courses Offered', path: '/courses-offered' },
        { label: 'Departments', path: '/departments' },
        { label: 'CLP', path: '/clp' },
      ],
    },
    activities: {
      label: 'Activities',
      items: [
        { label: 'NSS', path: '/nss' },
        { label: 'YRC', path: '/yrc' },
        { label: 'RRC', path: '/rrc' },
        { label: 'Sports', path: '/sports' },
      ],
    },
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="mainNav">
        <div className="container">
          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            id="hamburgerBtn"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span></span><span></span><span></span>
          </button>
          <div className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks" ref={navRef}>
            <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>

            {Object.entries(dropdownGroups).map(([key, group]) => (
              <div
                key={key}
                className={`nav-dropdown${openDropdown === key ? ' open' : ''}`}
              >
                <a
                  href="#"
                  className={`dropdown-toggle${isDropdownActive(group.items.map(i => i.path)) ? ' active' : ''}`}
                  onClick={(e) => {
                    if (window.innerWidth <= 900) {
                      e.preventDefault();
                      toggleDropdown(key);
                    }
                  }}
                >
                  {group.label} <span className="nav-caret"></span>
                </a>
                <ul className="dropdown-menu">
                  {group.items.map(item => (
                    <li key={item.path}>
                      <Link to={item.path}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <Link to="/admissions" className={isActive('/admissions') ? 'active' : ''}>Admission</Link>
            <Link to="/examinations" className={isActive('/examinations') ? 'active' : ''}>Examination</Link>
            <Link to="/placement" className={isActive('/placement') ? 'active' : ''}>Placement</Link>
            <Link to="/alumni" className={isActive('/alumni') ? 'active' : ''}>Alumni</Link>
            <Link to="/forms" className={isActive('/forms') ? 'active' : ''}>Forms</Link>
            <Link to="/gallery" className={isActive('/gallery') ? 'active' : ''}>Gallery</Link>
            <Link to="/weblinks" className={isActive('/weblinks') ? 'active' : ''}>Weblinks</Link>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
          </div>
        </div>
      </nav>
      <div
        className={`nav-overlay${menuOpen ? ' show' : ''}`}
        id="navOverlay"
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Navbar;
