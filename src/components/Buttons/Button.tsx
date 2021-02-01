interface Props {
  text: string;
  btnStyle?: string;
  svg?: JSX.Element;
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({
  text,
  btnStyle = '',
  svg,
  onClick,
  type,
}) => {
  return (
    <button type={type} className={btnStyle} onClick={onClick}>
      {text}
      {svg}
    </button>
  );
};

export default Button;
