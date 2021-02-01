import { combineReducers } from 'redux';
import mentorsReducers from './mentors/reducer/mentorsReducer';
import mentorReducers from './mentor/reducer/mentorReducer';
import favoritesReducer from './favorites/favoritesReducer';
import IAppState from './IAppState.interface';
import filteredMentorsReducers from './filteredMentors/reducer/filteredMentorsReducer';

const rootReducer = combineReducers<IAppState>({
  mentors: mentorsReducers,
  mentor: mentorReducers,
  favorites: favoritesReducer,

  filteredMentors: filteredMentorsReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
