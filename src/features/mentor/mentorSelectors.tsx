import { RootState } from '../rootReducer';
import { IMentor } from '../../interfaces/Mentors.interface';

export const getMentorSelector = (state: RootState): IMentor | null =>
  state.mentor;
