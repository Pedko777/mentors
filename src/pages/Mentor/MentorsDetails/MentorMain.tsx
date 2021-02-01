import Avatar from '../../../components/Avatar';
import Rating from '../../../components/Rating';
import { IMentor } from '../../../interfaces/Mentors.interface';
import { getName, getFirstLetterOfSurname } from '../../../helpers/helpers';

type Props = {
  mentor: IMentor;
};
const MentorMain = ({ mentor }: Props): JSX.Element => {
  const firstName = getName(mentor.fullName);
  const lastName = getFirstLetterOfSurname(mentor.fullName);

  return (
    <div className="mentor-main">
      <div className="mentor-main__avatar-box">
        <Avatar avatar={null} />
      </div>
      <div className="mentor-main__desc">
        <div>
          <h3 className="mentor-main__desc-title">
            {firstName} {lastName}
          </h3>
          <h4 className="mentor-main__desc-position">{mentor?.profession}</h4>
        </div>
        <div>
          <h5 className="mentor-main__desc-rate">Rate: ${mentor?.rate}/h</h5>
        </div>
      </div>
      <div className="mentor-main__rating">
        <Rating rating={mentor.rating} />
      </div>
      <div className="mentor-main__desc-reviews">
        <h5 className="mentor-main__desc-reviews-text">based on 17 reviews</h5>
      </div>
    </div>
  );
};

export default MentorMain;
