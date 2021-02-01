import { IMentor } from '../../../interfaces/Mentors.interface';
import mentorsActionTypes from './mentorActionsTypes.enum';

export interface IGetMentorByIdRequest {
  type: typeof mentorsActionTypes.GET_MENTOR_BY_ID_REQUEST;
  mentorId: string;
}

export interface IGetMentorByIdSuccess {
  type: typeof mentorsActionTypes.GET_MENTOR_BY_ID_SUCCESS;
  mentor: IMentor | null;
}

export interface IGetMentorByIdError {
  type: typeof mentorsActionTypes.GET_MENTOR_BY_ID_ERROR;
}
