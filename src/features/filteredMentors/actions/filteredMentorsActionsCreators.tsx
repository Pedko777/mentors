import mentorsActionTypes from './filteredMentorsActionsTypes.enum';
import {
  IFetchWithQueryRequest,
  IFetchWithQuerySuccess,
  IFetchWithQueryError,
} from './filteredMentorsActions.interface';
import { IMentors } from '../../../interfaces/Mentors.interface';

export const filteredMentorsRequest = (
  query: string
): IFetchWithQueryRequest => {
  return {
    type: mentorsActionTypes.FILTERED_MENTORS_WITH_QUERY_REQUEST,
    query,
  };
};

export const filteredMentorsSuccess = (
  filteredMentors: IMentors[]
): IFetchWithQuerySuccess => {
  return {
    type: mentorsActionTypes.FILTERED_MENTORS_WITH_QUERY_SUCCESS,
    filteredMentors,
  };
};

export const filteredMentorsError = (): IFetchWithQueryError => {
  return {
    type: mentorsActionTypes.FILTERED_MENTORS_WITH_QUERY_ERROR,
  };
};
