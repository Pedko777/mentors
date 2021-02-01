import { RootState } from '../../features/rootReducer';
import { IMentors } from '../../interfaces/Mentors.interface';

export const getMentorsSelector = (state: RootState): IMentors[] =>
  state.mentors;
