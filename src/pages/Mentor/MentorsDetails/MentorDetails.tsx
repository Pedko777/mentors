import { IMentor, IReviews } from '../../../interfaces/Mentors.interface';
import Button from '../../../components/Buttons';
import MentorAside from './MentorAside';
import MentorMain from './MentorMain';
import MentorReviews from './MentorReviews';
import { useSelector, useDispatch } from 'react-redux';
import {
  addLikeMentor,
  deleteLikeMentor,
} from '../../../features/favorites/favoritesActions';
import SvgHeart from '../../../components/SVG/Heart';
import { getFavoritesSelector } from './../../../features/favorites/favoritesSelectors';

type Props = {
  id: string;
  mentor: IMentor;
  reviews: IReviews[];
  onOpen: () => void;
};

const MentorDetails = ({ mentor, reviews, onOpen }: Props): JSX.Element => {
  const dispatch = useDispatch();

  const favorites = useSelector(getFavoritesSelector);

  const isLiked = favorites.find(
    (favMentor) => Number(favMentor.id) === Number(mentor.id)
  );

  const onLike = () => {
    dispatch(addLikeMentor(mentor));
  };

  const onDislike = () => {
    if (isLiked) {
      dispatch(deleteLikeMentor(mentor));
    }
  };

  return (
    <div className="mentors-details__container">
      <div className="mentors-details__left-side">
        {mentor && <MentorMain mentor={mentor} />}
        <div className="mentors-details__btn-box mentors-details__btn-box--contact">
          <Button
            type="button"
            text="Contact me"
            btnStyle="button"
            onClick={onOpen}
          />
        </div>
        {isLiked ? (
          <div className="mentors-details__btn-box">
            <Button
              type="button"
              text="Liked"
              btnStyle="button button--with-flex"
              onClick={onDislike}
              svg={<SvgHeart className="button__svg-white" />}
            />
          </div>
        ) : (
          <div className="mentors-details__btn-box">
            <Button
              text="Like"
              type="button"
              btnStyle="button-white button--with-flex"
              onClick={onLike}
              svg={<SvgHeart className="button__svg-blue" />}
            />
          </div>
        )}
      </div>
      <div className="mentors-details__right-side">
        {mentor && <MentorAside mentor={mentor} />}
        <MentorReviews reviews={reviews} />
      </div>
    </div>
  );
};

export default MentorDetails;
