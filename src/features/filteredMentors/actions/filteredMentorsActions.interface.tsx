import { IMentors } from '../../../interfaces/Mentors.interface';
import filteredMentorsActionTypes from './filteredMentorsActionsTypes.enum';

export interface IFetchWithQueryRequest {
  type: typeof filteredMentorsActionTypes.FILTERED_MENTORS_WITH_QUERY_REQUEST;
  query: string;
}

export interface IFetchWithQuerySuccess {
  type: typeof filteredMentorsActionTypes.FILTERED_MENTORS_WITH_QUERY_SUCCESS;
  filteredMentors: IMentors[];
}

export interface IFetchWithQueryError {
  type: typeof filteredMentorsActionTypes.FILTERED_MENTORS_WITH_QUERY_ERROR;
}
