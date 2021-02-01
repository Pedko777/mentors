import Rating from '../../../components/Rating';
import LoadBtn from '../../../components/Buttons/LoadBtn';
import Avatar from '../../../components/Avatar';
import { IReviews } from '../../../interfaces/Mentors.interface';
import { getName, getFirstLetterOfSurname } from '../../../helpers/helpers';

type Props = {
  reviews: IReviews[];
};

const MentorReviews = ({ reviews }: Props): JSX.Element => {
  return (
    <div className="mentor__reviews">
      <h3 className="mentors-details__titles">Reviews</h3>
      <ul className="mentor__reviews-list">
        {reviews.map((mentor) => {
          const firstName = getName(mentor.fullName);
          const lastName = getFirstLetterOfSurname(mentor.fullName);

          const description =
            mentor.description.split(' ').slice(0, 30).join(' ') + '...';
          return (
            <li key={mentor.id} className="mentor__reviews-list-item">
              <div className="mentor__reviews-list-item-avatar">
                <Avatar avatar={mentor.photo} />
              </div>
              <div className="mentor__reviews-desc">
                <div className="mentors__reviews-desc-wrapper">
                  <div>
                    <h4 className="mentor__reviews-desc-title">
                      {firstName} {lastName}
                    </h4>
                  </div>
                  <div className="mentor__reviews-desc-rating">
                    <Rating rating={mentor.rating} />
                  </div>
                </div>

                <p className="mentor__reviews-desc-text">{description}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mentor__reviews-btn">
        <LoadBtn text="See more reviews" />
      </div>
    </div>
  );
};
export default MentorReviews;
