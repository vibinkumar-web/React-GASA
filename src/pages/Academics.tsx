import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';

const Academics = () => (
  <Layout>
    <PageBanner
      title="Academics"
      breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Academics' }]}
    />
  </Layout>
);

export default Academics;
