import { IMentors } from '../../interfaces/Mentors.interface';
import {
  ADD_LIKE_MENTOR_BY_ID,
  DELETE_LIKE_MENTOR_BY_ID,
  MentorsActionTypes,
} from './favoritesTypes';

const mentorReducer = (
  state: IMentors[] = [],
  action: MentorsActionTypes
): IMentors[] => {
  switch (action.type) {
    case ADD_LIKE_MENTOR_BY_ID: {
      return [...state, action.payload];
    }
    case DELETE_LIKE_MENTOR_BY_ID: {
      return [...state, action.payload].filter(
        (mentor) => mentor.id !== action.payload.id
      );
    }
    default:
      return state;
  }
};

export default mentorReducer;
