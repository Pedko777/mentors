import mentorsActionTypes from './mentorActionsTypes.enum';
import {
  IGetMentorByIdRequest,
  IGetMentorByIdSuccess,
  IGetMentorByIdError,
} from './mentorActions.interface';
import { IMentor } from '../../../interfaces/Mentors.interface';

export const getMentorsByIdRequest = (id: string): IGetMentorByIdRequest => {
  return {
    type: mentorsActionTypes.GET_MENTOR_BY_ID_REQUEST,
    mentorId: id,
  };
};

export const getMentorsByIdSuccess = (
  mentor: IMentor
): IGetMentorByIdSuccess => {
  return {
    type: mentorsActionTypes.GET_MENTOR_BY_ID_SUCCESS,
    mentor,
  };
};

export const getMentorsByIdError = (): IGetMentorByIdError => {
  return {
    type: mentorsActionTypes.GET_MENTOR_BY_ID_ERROR,
  };
};
