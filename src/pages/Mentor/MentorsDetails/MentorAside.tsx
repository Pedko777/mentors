import { IMentor } from '../../../interfaces/Mentors.interface';

type Props = {
  mentor: IMentor;
};

const MentorAside = ({ mentor }: Props): JSX.Element => {
  return (
    <>
      <div className="mentors-aside__aspects">
        <h3 className="mentors-details__titles">Professional aspects</h3>
        <ul className="mentors-aside__aspects-list">
          {mentor.lifeAspects &&
            mentor.lifeAspects.map((aspect) => {
              return (
                <li className="mentors-aside__aspects-list-item" key={aspect}>
                  <p className="mentors-aside__aspects-list-item-text">
                    {aspect}
                  </p>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="mentors-aside__profile">
        <h3 className="mentors-details__titles">Profile</h3>
        <p className="mentors-aside__profile-desc">{mentor?.description}</p>
      </div>
    </>
  );
};

export default MentorAside;
