import {
  IGetMentorsRequest,
  IGetMentorsSuccess,
  IGetMentorsError,
} from './mentorsActions.interface';

type MentorsActions =
  | IGetMentorsRequest
  | IGetMentorsSuccess
  | IGetMentorsError;

export default MentorsActions;
