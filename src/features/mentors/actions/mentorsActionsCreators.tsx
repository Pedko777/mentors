import mentorsActionTypes from './mentorsActionsTypes.enum';
import {
  IGetMentorsRequest,
  IGetMentorsSuccess,
  IGetMentorsError,
} from './mentorsActions.interface';
import { IMentors } from '../../../interfaces/Mentors.interface';

export const getMentorsRequest = (): IGetMentorsRequest => {
  return {
    type: mentorsActionTypes.GET_MENTORS_REQUEST,
  };
};

export const getMentorsSuccess = (mentors: IMentors[]): IGetMentorsSuccess => {
  return {
    type: mentorsActionTypes.GET_MENTORS_SUCCESS,
    mentors,
  };
};

export const getMentorsError = (): IGetMentorsError => {
  return {
    type: mentorsActionTypes.GET_MENTORS_ERROR,
  };
};
