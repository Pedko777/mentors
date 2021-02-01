import { RootState } from '../rootReducer';
import { IMentors } from '../../interfaces/Mentors.interface';

export const getFilteredMentorsSelector = (state: RootState): IMentors[] =>
  state.filteredMentors;
