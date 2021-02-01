import {
  IFetchWithQueryRequest,
  IFetchWithQuerySuccess,
  IFetchWithQueryError,
} from './filteredMentorsActions.interface';

type MentorsActions =
  | IFetchWithQueryRequest
  | IFetchWithQuerySuccess
  | IFetchWithQueryError;

export default MentorsActions;
