import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import MentorsList from '../../components/MentorsList';
import TitleBox from '../../components/TitleBox';
import { getMentorsSelector } from '../../features/mentors/mentorsSelectors';
import { getMentorsRequest } from '../../features/mentors/actions/mentorsActionsCreators';

const Home = (): JSX.Element => {
  const mentors = useSelector(getMentorsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMentorsRequest());
  }, [dispatch]);

  return (
    <Layout>
      <Layout.Header />
      <Layout.Content>
        <TitleBox title="Popular experts" />
        <MentorsList mentors={mentors} />
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
};

export default Home;
