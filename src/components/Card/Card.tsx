import { Link } from 'react-router-dom';
import routes from '../../pages';
import { IMentors } from '../../interfaces/Mentors.interface';
import Avatar from '../Avatar';
import Rating from '../Rating';
import { getName, getFirstLetterOfSurname } from '../../helpers/helpers';

interface Props {
  mentor: IMentors;
}
const Card = ({ mentor }: Props): JSX.Element => {
  const firstName = getName(mentor.fullName);
  const lastName = getFirstLetterOfSurname(mentor.fullName);

  return (
    <li className="mentors-list__card">
      <div className="mentors-list__card-photo">
        <Avatar avatar={null} />
      </div>
      <div className="mentors-list__card-desc">
        <h3 className="mentors-list__card-desc-name">
          <span>{firstName}</span>
          <span> {lastName}</span>
        </h3>
        <p className="mentors-list__card-desc-position">{mentor.profession}</p>
      </div>
      <Rating rating={mentor.rate} />
      <div className="mentors-list__card-link">
        <Link
          to={{ pathname: `${routes.mentor}/${mentor.id}` }}
          className="mentors-list__card-link-text"
        >
          Learn more
        </Link>
      </div>
    </li>
  );
};

export default Card;
