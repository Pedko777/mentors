import RatingStar from './RatingStar';

type Trating = {
  rating: number;
};

const Rating = ({ rating }: Trating): JSX.Element => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((index) => {
        return <RatingStar rating={rating} index={index} key={index} />;
      })}
    </div>
  );
};
export default Rating;
