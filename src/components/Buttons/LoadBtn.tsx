type TProps = {
  text: string;
};

const LoadBtn = ({ text }: TProps): JSX.Element => {
  return <button className="load-button">{text}</button>;
};
export default LoadBtn;
