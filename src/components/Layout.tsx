import { type ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import CollegeHeader from './CollegeHeader';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import ScrollReveal from './ScrollReveal';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <TopBar />
      <CollegeHeader />
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <BackToTop />
      <ScrollReveal />
    </>
  );
};

export default Layout;
