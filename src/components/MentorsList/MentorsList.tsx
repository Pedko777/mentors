import Card from '../Card';
import { IMentors } from '../../interfaces/Mentors.interface';

interface Props {
  mentors: IMentors[];
}

const MentorsList = ({ mentors }: Props): JSX.Element => {
  return (
    <ul className="mentors-list">
      {mentors.map((mentor) => (
        <Card key={mentor.id} mentor={mentor} />
      ))}
    </ul>
  );
};

export default MentorsList;
