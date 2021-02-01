import {
  IGetMentorByIdRequest,
  IGetMentorByIdSuccess,
  IGetMentorByIdError,
} from './mentorActions.interface';

type MentorActions =
  | IGetMentorByIdRequest
  | IGetMentorByIdSuccess
  | IGetMentorByIdError;

export default MentorActions;
