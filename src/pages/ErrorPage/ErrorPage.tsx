import ErrorMessage from './ErrorMessage';
import Layout from '../../components/Layout';

const ErrorPage = (): JSX.Element => {
  return (
    <Layout>
      <Layout.Header />
      <Layout.Content>
        <ErrorMessage />
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
};

export default ErrorPage;
