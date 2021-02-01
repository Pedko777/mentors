import Layout from '../../components/Layout';
import MentorsList from '../../components/MentorsList';
import TitleBox from '../../components/TitleBox';
import { useSelector } from 'react-redux';
import SearchForm from './SearchForm/SearchForm';
import { getFilteredMentorsSelector } from './../../features/filteredMentors/filterMentorsSelectors';

const SearchPage = (): JSX.Element => {
  const mentors = useSelector(getFilteredMentorsSelector);

  return (
    <Layout>
      <Layout.Header />
      <Layout.Content>
        <TitleBox title="Search" />
        <SearchForm />
        <MentorsList mentors={mentors} />
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
};

export default SearchPage;
