import Avatar from '../../../components/Avatar';
import { Call, Chat, Facebook, Email } from '../../../components/SVG';
import { IMentor } from '../../../interfaces/Mentors.interface';

import { getName, getFirstLetterOfSurname } from '../../../helpers/helpers';
import ContactButton from '../../../components/Buttons/ContactButton';
type Props = {
  mentor: IMentor;
};

const MentorModal = ({ mentor }: Props): JSX.Element => {
  const firstName = getName(mentor.fullName);
  const lastName = getFirstLetterOfSurname(mentor.fullName);

  return (
    <div className="mentor-modal">
      <div className="mentor-modal__top">
        <div className="mentor-modal__top-avatar">
          <Avatar avatar={null} />
        </div>
        <div className="mentor-modal__top-desc">
          <h3 className="mentor-modal__top-desc-title">
            {firstName} {lastName}
          </h3>
          <h4 className="mentor-modal__top-desc-position">
            {mentor?.profession}
          </h4>
        </div>
      </div>
      <div className="mentor-modal__contacts">
        <div className="mentor-modal__contacts-item">
          <div className="mentor-modal__contacts-item-icon mentor-modal__contacts-item-icon--call">
            <ContactButton>
              <Call />
            </ContactButton>
          </div>
          <div>
            <span className="mentor-modal__contacts-item-text">Call</span>
          </div>
        </div>
        <div className="mentor-modal__contacts-item">
          <div className="mentor-modal__contacts-item-icon mentor-modal__contacts-item-icon--chat">
            <ContactButton>
              <Chat />
            </ContactButton>
          </div>
          <div>
            <span className="mentor-modal__contacts-item-text">Chat</span>
          </div>
        </div>
        <div className="mentor-modal__contacts-item">
          <div className="mentor-modal__contacts-item-icon mentor-modal__contacts-item-icon--facebook">
            <ContactButton>
              <Facebook />
            </ContactButton>
          </div>
          <div>
            <span className="mentor-modal__contacts-item-text">Facebook</span>
          </div>
        </div>
        <div className="mentor-modal__contacts-item">
          <div className="mentor-modal__contacts-item-icon mentor-modal__contacts-item-icon--email">
            <ContactButton>
              <Email />
            </ContactButton>
          </div>
          <div>
            <span className="mentor-modal__contacts-item-text">Email</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorModal;
