interface OptionType {
  label: string;
  value: string;
}
interface Props {
  aspects: OptionType[];
  // handleChangeAspect: (aspect: string) => void;
}
const Aspects = ({ aspects }: Props): JSX.Element => {
  return (
    <div className="aspects">
      <ul className="aspects-list">
        {aspects &&
          aspects.map((aspect) => (
            <li
              className="aspects-list-item"
              key={aspect.label}
              onClick={(
                event: React.MouseEvent<HTMLLIElement, MouseEvent>
              ): void => {
                event.preventDefault();
              }}
            >
              <p className="aspects-list-item-text">{aspect.label}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Aspects;
