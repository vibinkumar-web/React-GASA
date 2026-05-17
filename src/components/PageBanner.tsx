import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

const PageBanner = ({ title, breadcrumbs }: PageBannerProps) => (
  <section className="page-banner">
    <div className="container">
      <h1>{title}</h1>
      <p className="breadcrumb">
        {breadcrumbs.map((item, i) => (
          <span key={i}>
            {i > 0 && ' » '}
            {item.path ? <Link to={item.path}>{item.label}</Link> : item.label}
          </span>
        ))}
      </p>
    </div>
  </section>
);

export default PageBanner;
