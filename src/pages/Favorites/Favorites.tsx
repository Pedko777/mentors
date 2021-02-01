import Layout from '../../components/Layout';
import TitleBox from '../../components/TitleBox';
import { useSelector } from 'react-redux';
import MentorsList from './../../components/MentorsList/MentorsList';
import { getFavoritesSelector } from '../../features/favorites/favoritesSelectors';

const Favorites = (): JSX.Element => {
  const favorites = useSelector(getFavoritesSelector);
  return (
    <Layout>
      <Layout.Header />
      <Layout.Content>
        <TitleBox title="Favorites" />
        <MentorsList mentors={favorites} />
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
};

export default Favorites;
