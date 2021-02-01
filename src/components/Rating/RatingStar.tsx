import SvgStar from '../SVG/Star';

type TProps = {
  index: number;
  rating: number;
};

const RatingStar = ({ index, rating }: TProps): JSX.Element => {
  const fill = rating >= index ? '#FDE68A' : '#C4C4C4';

  return (
    <div className="rating__item">
      <SvgStar
        fill={fill}
        className="rating__item-svg"
        width="14"
        height="13"
      />
    </div>
  );
};

export default RatingStar;
