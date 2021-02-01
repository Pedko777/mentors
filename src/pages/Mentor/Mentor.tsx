import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Layout from '../../components/Layout';
import MentorDetails from './MentorsDetails';
import reviews from '../../assets/data/reviews.json';
import Modal from '../../components/Modal';
import MentorModal from './MentorModal';
import { useSelector, useDispatch } from 'react-redux';
import { getMentorSelector } from '../../features/mentor/mentorSelectors';
import { getMentorsByIdRequest } from '../../features/mentor/actions/mentorActionsCreators';

interface RouteParams {
  mentorId: string;
}

type MentorProps = RouteComponentProps<RouteParams>;

const Mentor = ({ match }: MentorProps): JSX.Element => {
  const mentor = useSelector(getMentorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMentorsByIdRequest(match.params.mentorId));
  }, [dispatch, match.params.mentorId]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <Layout>
      <Layout.Header />
      <Layout.Content>
        {mentor && (
          <MentorDetails
            mentor={mentor}
            reviews={reviews}
            onOpen={toggleModal}
            id={match.params.mentorId}
          />
        )}

        <Modal
          onClose={toggleModal}
          isOpen={isOpen}
          shouldCloseOnOverlayClick={false}
        >
          {mentor && <MentorModal mentor={mentor} />}
        </Modal>
      </Layout.Content>
      <Layout.Footer />
    </Layout>
  );
};

export default Mentor;
