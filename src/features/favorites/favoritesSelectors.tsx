import { createSelector } from 'reselect';
import { RootState } from '../../features/rootReducer';
import { IMentors } from '../../interfaces/Mentors.interface';

export const getFavoritesSelector = (state: RootState): IMentors[] =>
  state.favorites;

export const getFavoritesLengthSelectors = createSelector(
  getFavoritesSelector,
  (favorites) => {
    return favorites.length;
  }
);
