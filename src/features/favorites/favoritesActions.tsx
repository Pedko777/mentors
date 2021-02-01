import { IMentors } from '../../interfaces/Mentors.interface';
import {
  MentorsActionTypes,
  ADD_LIKE_MENTOR_BY_ID,
  DELETE_LIKE_MENTOR_BY_ID,
} from './favoritesTypes';

export const addLikeMentor = (mentor: IMentors): MentorsActionTypes => {
  return {
    type: ADD_LIKE_MENTOR_BY_ID,
    payload: mentor,
  };
};

export const deleteLikeMentor = (mentor: IMentors): MentorsActionTypes => {
  return {
    type: DELETE_LIKE_MENTOR_BY_ID,
    payload: mentor,
  };
};
