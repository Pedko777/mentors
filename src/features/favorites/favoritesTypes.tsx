import { IMentors } from './../../interfaces/Mentors.interface';
export const ADD_LIKE_MENTOR_BY_ID = 'favorites/ADD_LIKE_MENTOR_BY_ID';
export const DELETE_LIKE_MENTOR_BY_ID = 'favorites/DELETE_LIKE_MENTOR_BY_ID';

interface AddLikeMentorByIdActions {
  type: typeof ADD_LIKE_MENTOR_BY_ID;
  payload: IMentors;
}

interface DeleteLikeMentorByIdActions {
  type: typeof DELETE_LIKE_MENTOR_BY_ID;
  payload: IMentors;
}

export type MentorsActionTypes =
  | AddLikeMentorByIdActions
  | DeleteLikeMentorByIdActions;
