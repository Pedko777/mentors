import { IMentors, IMentor } from '../interfaces/Mentors.interface';

export default interface IAppState {
  mentors: IMentors[];
  mentor: IMentor | null;
  favorites: IMentors[] | [];
  filteredMentors: IMentors[];
}
