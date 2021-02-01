import { IMentors } from '../../../interfaces/Mentors.interface';
import mentorsActionTypes from './mentorsActionsTypes.enum';

export interface IGetMentorsRequest {
  type: typeof mentorsActionTypes.GET_MENTORS_REQUEST;
}

export interface IGetMentorsSuccess {
  type: typeof mentorsActionTypes.GET_MENTORS_SUCCESS;
  mentors: IMentors[];
}

export interface IGetMentorsError {
  type: typeof mentorsActionTypes.GET_MENTORS_ERROR;
}
