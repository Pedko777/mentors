import { ChangeEvent } from 'react';

interface Props {
  options: string[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  id: string;
  name: string;
}

const CustomSelect = ({
  options,
  onChange,
  value,
  id,
  name,
}: Props): JSX.Element => {
  return (
    <select
      className="form__input "
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      placeholder="Search"
    >
      <option value="" id={id} disabled>
        {'Search...'}
      </option>
      {options.map((profession) => (
        <option value={profession} id={id} key={profession}>
          {profession}
        </option>
      ))}
    </select>
  );
};
export default CustomSelect;
