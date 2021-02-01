type TProps = {
  title: string;
};

const TitleBox = ({ title }: TProps): JSX.Element => {
  return (
    <div className="content__title">
      <h1>{title}</h1>
    </div>
  );
};

export default TitleBox;
